import fs from 'node:fs';
import assert from 'node:assert/strict';
import {chromium} from 'playwright';
import {serve} from './serve.mjs';

const routes=JSON.parse(fs.readFileSync('src/data/routes.json'));
const out='test-results';fs.mkdirSync(out,{recursive:true});
const server=serve('dist',4175);
const browser=await chromium.launch({channel:process.env.BROWSER_CHANNEL||'chrome',headless:true});
const results=[], interaction=[];
try {
  for(const width of [1440,390]){
    const context=await browser.newContext({viewport:{width,height:900},reducedMotion:'reduce'});
    // Testing must never send analytics, messages, or application responses.
    await context.route('**/*',route=>{
      const u=route.request().url();
      if((!u.startsWith('http://127.0.0.1:4175')&&/googletagmanager|google-analytics|whatsapp|formResponse/.test(u))||route.request().method()!=='GET')return route.abort();
      if(/google\.com\/maps/.test(u))return route.fulfill({status:200,contentType:'text/html',body:'<p>Peta eksternal tidak dimuat dalam pengujian.</p>'});
      return route.continue();
    });
    const page=await context.newPage();
    let errors=[],failed=[];
    page.on('pageerror',e=>errors.push(e.message));
    page.on('console',m=>{if(m.type()==='error'&&!/ERR_FAILED|Failed to load resource/.test(m.text()))errors.push(m.text());});
    page.on('response',r=>{if(r.status()>=400&&r.url().startsWith('http://127.0.0.1:4175'))failed.push({url:r.url(),status:r.status()});});
    for(const url of Object.keys(routes)){
      errors=[];failed=[];
      const response=await page.goto('http://127.0.0.1:4175'+url,{waitUntil:'domcontentloaded'});
      await page.waitForFunction(()=>document.querySelector('#root'));
      await page.waitForTimeout(250);
      await page.evaluate(async()=>{await document.fonts.ready;await Promise.all([...document.images].map(i=>i.complete?Promise.resolve():new Promise(resolve=>{i.onload=resolve;i.onerror=resolve;setTimeout(resolve,3000);})));});
      const images=await page.locator('img').evaluateAll(els=>els.filter(e=>!e.naturalWidth).map(e=>e.src));
      const overflow=await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1);
      const record={url,width,status:response.status(),errors:[...errors],failed:[...failed],images,overflow};results.push(record);
      fs.writeFileSync(`${out}/browser-progress.json`,JSON.stringify({results,interaction},null,2));
      console.log(`${width}px ${url}: ${errors.length} errors, ${images.length} broken images, overflow=${overflow}`);
      if(['index.html','tk.html','sd.html','ppdb.html','form-ppdb.html','blog-cat-masonry.html','uanews/safarisosial.html','maulkuadrat.html'].includes(url.slice(1))){
        await page.screenshot({path:`${out}/${url.slice(1).replaceAll('/','-')}-${width}.png`,fullPage:true});
        await page.screenshot({path:`${out}/${url.slice(1).replaceAll('/','-')}-${width}-viewport.png`});
      }
      // Every actual content URL also survives a direct reload on a plain static server.
      const reload=await page.reload({waitUntil:'domcontentloaded'});assert.equal(reload.status(),200,url);
    }
    await page.goto('http://127.0.0.1:4175/index.html');
    if(width===390){await page.getByRole('button',{name:'Buka menu'}).click();assert.equal(await page.getByRole('button',{name:'Buka menu'}).getAttribute('aria-expanded'),'true');}
    await page.getByRole('button',{name:'Unit',exact:true}).click();
    await page.locator('#menu-Unit').getByRole('link',{name:'TK',exact:true}).click();assert.ok(page.url().endsWith('/tk.html'));
    await page.goto('http://127.0.0.1:4175/index.html');
    await page.locator('.unit-card').filter({hasText:'SMP'}).click();assert.equal(await page.locator('.unit-title').textContent(),'SMPIT Ulil Albab');
    const hero=page.locator('.unique-header-carousel');await hero.getByRole('button',{name:'Tampilkan slide 2'}).click();assert.equal(await hero.getByRole('button',{name:'Tampilkan slide 2'}).getAttribute('aria-pressed'),'true');
    const extra=page.locator('.ekstra-carousel');await extra.getByRole('button',{name:'Slide berikutnya'}).click();assert.equal(await extra.getByRole('button',{name:'Tampilkan slide 2'}).getAttribute('aria-pressed'),'true');
    const whatsapp=await page.locator('.whatsapp-button a').getAttribute('href');assert.ok(whatsapp.includes('6282122037474'));
    await page.goto('http://127.0.0.1:4175/uanews/bromo.html');await page.locator('main a').first().click();assert.ok(await page.locator('dialog').isVisible());await page.keyboard.press('Escape');await page.locator('dialog').waitFor({state:'detached'});
    const notfound=await page.goto('http://127.0.0.1:4175/not-a-school-page.html');assert.equal(notfound.status(),404);assert.ok(await page.getByRole('link',{name:'Kembali Ke Beranda'}).isVisible());
    interaction.push({width,menu:true,unitSelector:true,heroCarousel:true,extracurricularCarousel:true,whatsappDestination:true,lightboxKeyboard:true,notFound:true});
    await context.close();
  }
  const context=await browser.newContext({javaScriptEnabled:false});const page=await context.newPage();await page.goto('http://127.0.0.1:4175/uanews/safarisosial.html');assert.ok((await page.locator('main').textContent()).includes('Safari Sosial'));interaction.push({staticHtmlWithoutJavaScript:true});await context.close();
} finally {
  fs.writeFileSync(`${out}/browser-report.json`,JSON.stringify({results,interaction},null,2));await browser.close();server.close();
}
const failures=results.filter(r=>r.status!==200||r.errors.length||r.failed.length||r.images.length||r.overflow);
console.log(JSON.stringify({checked:results.length,interaction,failures},null,2));assert.equal(failures.length,0,'Browser validation');
