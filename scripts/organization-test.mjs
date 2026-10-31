import fs from 'node:fs';
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import {chromium} from 'playwright';
import {serve} from './serve.mjs';
import {library} from '../src/data/library.js';

const expectedHash = '8b3a6fd98a4d83a2cf2e24d55a197d7559e371a8b4e06edba6675a06a5f79179';
for (const root of ['public', 'dist']) {
  const bytes = fs.readFileSync(root + library.organizationImage);
  assert.equal(crypto.createHash('sha256').update(bytes).digest('hex'), expectedHash, root + ': original attachment bytes');
  assert.equal(bytes.readUInt32BE(16), 1600);
  assert.equal(bytes.readUInt32BE(20), 968);
}
assert.ok(fs.readFileSync('dist/sitemap.xml', 'utf8').includes('https://ulilalbab.sch.id/perpustakaan-organisasi.html'));
const server = serve('dist', 4386);
const browser = await chromium.launch({channel: 'chrome', headless: true});
const report = {sha256: expectedHash, originalDimensions: [1600, 968], checks: [], errors: []};
fs.mkdirSync('test-results/organization', {recursive: true});
try {
  for (const width of [1440, 390]) {
    const context = await browser.newContext({viewport: {width, height: 900}, isMobile: width === 390, hasTouch: width === 390});
    context.setDefaultTimeout(15000);
    await context.route('**/*', route => new URL(route.request().url()).hostname === '127.0.0.1' ? route.continue() : route.abort());
    const page = await context.newPage();
    page.on('pageerror', error => report.errors.push(error.message));
    assert.equal((await page.goto('http://127.0.0.1:4386/perpustakaan-organisasi.html')).status(), 200);
    assert.equal((await page.reload()).status(), 200);
    await page.waitForLoadState('networkidle');
    const picture = page.locator('.library-organization-image img');
    await picture.scrollIntoViewIfNeeded();
    const dimensions = await picture.evaluate(image => ({naturalWidth: image.naturalWidth, naturalHeight: image.naturalHeight, width: image.getBoundingClientRect().width, height: image.getBoundingClientRect().height, fit: getComputedStyle(image).objectFit, complete: image.complete}));
    assert.equal(dimensions.naturalWidth, 1600);
    assert.equal(dimensions.naturalHeight, 968);
    assert.ok(dimensions.complete);
    assert.ok(Math.abs(dimensions.width / dimensions.height - 1600 / 968) < .001);
    assert.notEqual(dimensions.fit, 'cover');
    assert.equal(await page.locator('main img').count(), 1);
    assert.equal(await page.locator('.library-pending').count(), 0);
    assert.equal(await page.locator('meta[name="robots"][content*="noindex"]').count(), 0);
    assert.equal(await page.locator('.library-nav [aria-current="page"]').getAttribute('href'), '/perpustakaan-organisasi.html');
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);
    await page.evaluate(() => scrollTo(0, 0));
    await page.screenshot({path: `test-results/organization/page-${width}.png`, fullPage: true});
    // Element screenshot includes all pixels down to the bottom contact strip.
    await picture.screenshot({path: `test-results/organization/image-${width}.png`});
    const popupPromise = page.waitForEvent('popup');
    if (width === 390) await page.locator('.library-organization-image').tap();
    else await page.locator('.library-organization-image').click();
    const original = await popupPromise;
    await original.waitForLoadState('load');
    assert.equal(new URL(original.url()).pathname, library.organizationImage);
    await original.waitForFunction(() => document.images[0]?.complete && document.images[0]?.naturalWidth === 1600);
    assert.equal(await original.locator('img').evaluate(image => image.naturalHeight), 968);
    const response = await original.request.get(original.url());
    assert.equal(crypto.createHash('sha256').update(await response.body()).digest('hex'), expectedHash);
    await original.screenshot({path: `test-results/organization/original-${width}.png`, fullPage: true});
    report.checks.push({width, direct: 200, refresh: 200, dimensions, fullImage: true, openOriginal: width === 390 ? 'tap passed' : 'click passed'});
    await context.close();
  }
  assert.deepEqual(report.errors, []);
} finally {
  await browser.close();
  server.closeAllConnections();
  await new Promise(resolve => server.close(resolve));
  fs.writeFileSync('test-results/organization-report.json', JSON.stringify(report, null, 2));
}
console.log(JSON.stringify(report, null, 2));
