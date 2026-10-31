import fs from 'node:fs';
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import {chromium} from 'playwright';
import {load} from 'cheerio';
import {serve} from './serve.mjs';
import {library, libraryNavigation} from '../src/data/library.js';

const routes = JSON.parse(fs.readFileSync('src/data/routes.json'));
const before = fs.existsSync('test-results/library-before.json') ? JSON.parse(fs.readFileSync('test-results/library-before.json')) : null;
const allowed = ['src/App.jsx', 'src/data/site.js', 'src/data/routes.json', 'scripts/html.mjs'];
const changed = before ? Object.entries(before).filter(([file, hash]) => !fs.existsSync(file) || crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex') !== hash).map(([file]) => file) : null;
if (before) assert.deepEqual(changed.sort(), allowed.sort(), 'Only intended existing files changed; school assets, pages, PPDB, Forms, Netlify, aliases and styles preserved');
const report = {changedExistingFiles: changed, checks: [], organizationImage: library.organizationImage ? 'available' : 'BLOCKED: original image attachment unavailable; full-image/zoom checks not run', referenceDesign: 'Attachment unavailable; based on written visual requirements only', externalRequests: 'blocked', errors: []};
const out = 'test-results/library';
fs.mkdirSync(out, {recursive: true});
const server = serve('dist', 4385);
const browser = await chromium.launch({channel: 'chrome', headless: true});
try {
  for (const width of [1440, 390]) {
    const context = await browser.newContext({viewport: {width, height: 900}, deviceScaleFactor: 1, isMobile: width === 390, hasTouch: width === 390});
    context.setDefaultTimeout(15000);
    context.setDefaultNavigationTimeout(30000);
    await context.route('**/*', route => new URL(route.request().url()).hostname === '127.0.0.1' ? route.continue() : route.abort());
    const page = await context.newPage();
    page.on('pageerror', e => report.errors.push(e.message));
    page.on('console', e => {if (e.type() === 'error' && !/ERR_FAILED|ERR_CONNECTION|Failed to load resource/.test(e.text())) report.errors.push(e.text());});
    for (const url of ['/perpustakaan.html', '/perpustakaan-organisasi.html']) {
      console.log('Checking', width, url);
      const response = await page.goto('http://127.0.0.1:4385' + url);
      assert.equal(response.status(), 200);
      await page.waitForLoadState('networkidle');
      assert.equal((await page.reload()).status(), 200);
      await page.waitForLoadState('networkidle');
      assert.equal(await page.locator('.library-header').count(), 1);
      assert.equal(await page.locator('.fables-navigation').count(), 0);
      assert.equal(await page.locator('.library-whatsapp').count(), 1);
      assert.equal(await page.locator('.library-whatsapp').getAttribute('href'), routes['/index.html'].whatsapp);
      assert.equal(await page.locator('.library-nav [aria-current="page"]').getAttribute('href'), url);
      assert.equal(await page.locator('.library-nav [aria-disabled="true"]').count(), 6);
      assert.equal(await page.locator('.library-nav a[href="#"]').count(), 0);
      assert.equal(await page.locator('.library-topbar a').getAttribute('href'), '/index.html');
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false, 'no horizontal overflow');
      const images = await page.locator('img').evaluateAll(elements => elements.map(image => ({src: image.getAttribute('src'), loaded: image.complete && image.naturalWidth > 0, visible: image.getBoundingClientRect().width > 0 && image.getBoundingClientRect().height > 0})));
      assert.ok(images.every(image => image.loaded && image.visible));
      if (url === '/perpustakaan.html') {
        assert.ok(await page.getByRole('heading', {level: 1}).innerText().then(t => t.includes('Selamat Datang di Portal Perpustakaan Digital')));
        assert.equal(await page.getByRole('link', {name: 'Lihat Organisasi'}).getAttribute('href'), '/perpustakaan-organisasi.html');
      } else if (library.organizationImage) {
        const image = page.locator('.library-organization-image img');
        const sizes = await image.evaluate(i => ({natural: i.naturalWidth / i.naturalHeight, rendered: i.width / i.height, objectFit: getComputedStyle(i).objectFit}));
        assert.ok(Math.abs(sizes.natural - sizes.rendered) < .01, 'organization image uncropped aspect ratio');
        assert.notEqual(sizes.objectFit, 'cover');
        assert.equal(await page.locator('.library-organization-image').getAttribute('href'), library.organizationImage);
        assert.equal(await page.locator('.library-organization-image').getAttribute('target'), '_blank');
      } else {
        assert.equal(await page.locator('.library-organization-image').count(), 0, 'No substitute organization image');
        assert.ok(await page.locator('.library-pending').isVisible());
      }
      await page.screenshot({path: `${out}/${url.slice(1, -5)}-${width}.png`, fullPage: true});
      if (width === 390) {
        await page.getByRole('button', {name: 'Buka menu', exact: true}).click();
        assert.ok(await page.getByRole('navigation', {name: 'Navigasi perpustakaan'}).isVisible());
        await page.screenshot({path: `${out}/${url.slice(1, -5)}-menu-${width}.png`, fullPage: true});
        await page.keyboard.press('Escape');
        assert.equal(await page.getByRole('button', {name: 'Buka menu', exact: true}).getAttribute('aria-expanded'), 'false');
      }
      report.checks.push({url, width, direct: 200, reload: 200, navigation: 'passed', images});
    }
    console.log('Checking navigation flow', width);
    await page.goto('http://127.0.0.1:4385/perpustakaan.html');
    await page.getByRole('link', {name: 'Lihat Organisasi'}).click();
    await page.waitForURL('**/perpustakaan-organisasi.html');
    if (width === 390) await page.getByRole('button', {name: 'Buka menu', exact: true}).click();
    await page.getByRole('navigation', {name: 'Navigasi perpustakaan'}).getByRole('link', {name: 'Beranda', exact: true}).click();
    await page.waitForURL('**/perpustakaan.html');
    await page.getByRole('link', {name: 'Website utama Ulil Albab'}).click();
    await page.waitForURL('**/index.html');
    assert.equal(await page.locator('.library-site').count(), 0);
    assert.ok(await page.locator('.fables-navigation').isVisible());
    assert.equal(await page.locator('link[href="/styles/pages/library.css"]').count(), 0);
    if (width === 390) await page.getByRole('button', {name: 'Buka menu', exact: true}).click();
    await page.getByRole('button', {name: 'Unit', exact: true}).click();
    assert.ok(await page.locator('#menu-Unit').getByRole('link', {name: 'Perpustakaan', exact: true}).isVisible());
    await page.screenshot({path: `${out}/school-unit-menu-${width}.png`, fullPage: false});
    await page.locator('#menu-Unit').getByRole('link', {name: 'Perpustakaan', exact: true}).click();
    await page.waitForURL('**/perpustakaan.html');
    report.checks.push({width, schoolMenu: 'passed', ctaAndBackLinks: 'passed'});
    await context.close();
  }
  for (const url of ['/perpustakaan.html', '/perpustakaan-organisasi.html']) {
    const dom = load(fs.readFileSync('dist' + url, 'utf8'));
    assert.equal(dom('h1').length, 1);
    assert.equal(dom('link[rel="canonical"]').attr('href'), 'https://ulilalbab.sch.id' + url);
    assert.equal(dom('link[href*="custom.css"]').length, 0);
    for (const item of libraryNavigation.filter(i => i.href)) assert.ok(dom(`.library-nav a[href="${item.href}"]`).length);
  }
  assert.equal((await fetch('http://127.0.0.1:4385/library-missing-page.html')).status, 404);
  assert.deepEqual(report.errors, []);
  report.staticHtml = 'Both routes contain prerendered content, metadata and navigation';
  report.hosting = 'Local static server only; not Netlify runtime';
} finally {
  await browser.close();
  await new Promise(resolve => server.close(resolve));
  fs.writeFileSync('test-results/library-report.json', JSON.stringify(report, null, 2));
}
console.log(JSON.stringify(report, null, 2));
