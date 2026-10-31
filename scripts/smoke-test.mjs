import fs from 'node:fs';
import assert from 'node:assert/strict';
import {chromium} from 'playwright';
import {serve} from './serve.mjs';
const aliases=JSON.parse(fs.readFileSync('src/data/aliases.json'));
const server=serve('dist',4179);
const browser=await chromium.launch({channel:process.env.BROWSER_CHANNEL||'chrome',headless:true});
const report={aliases:0,pages:[],autoplay:false,fonts:false,dev:[]};
try {
  for(const [file,target] of Object.entries(aliases)){
    const response=await fetch('http://127.0.0.1:4179/'+file);assert.equal(response.status,200,file);
    assert.ok((await response.text()).includes('url='+target.replaceAll('&','&amp;')),file);report.aliases++;
  }
  const context=await browser.newContext();
  await context.route('**/*',route=>/googletagmanager|google-analytics|formResponse/.test(route.request().url())?route.abort():route.continue());
  const page=await context.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
  for(const width of [1440,390]){
    await page.setViewportSize({width,height:900});
    for(const file of ['uanews/bromo.html','uanews/its.html','uanews/museumangkot.html','uanews/unbraw.html','uanews/kolosaldrama.html','uanews/maulid.html','uanews/pawai.html','uanews/upacara17.html','maulkuadrat.html','meyawo/public_html/maulkuadrat.html','home4.html']){
      const response=await page.goto('http://127.0.0.1:4179/'+file);assert.equal(response.status(),200);
      await page.waitForTimeout(150);assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1),false,file);
      if(file.includes('maulkuadrat')){assert.ok((await page.locator('footer').innerText()).includes(String(new Date().getFullYear())));assert.equal(await page.locator('a[href^="javascript:"]').count(),0);}
      report.pages.push({file,width});
    }
  }
  await page.setViewportSize({width:1440,height:900});await page.goto('http://127.0.0.1:4179/index.html');await page.mouse.move(0,0);
  await page.locator('.unique-header-carousel .owl-dot').nth(1).waitFor();
  await page.waitForFunction(()=>document.querySelector('.unique-header-carousel .owl-dot:nth-child(2)').getAttribute('aria-pressed')==='true',{},{timeout:8000});report.autoplay=true;
  await page.evaluate(()=>document.fonts.ready);
  report.fonts=await page.evaluate(()=>['16px "Open Sans"','16px fables'].every(font=>document.fonts.check(font)));assert.ok(report.fonts);
  assert.equal(errors.length,0,errors.join('\n'));report.errors=errors;
  for(const pathname of ['/', '/tk.html', '/uanews/safarisosial.html', '/not-existing']){
    const r=await fetch('http://127.0.0.1:5173'+pathname);assert.equal(r.status,pathname==='/not-existing'?404:200);assert.ok((await r.text()).includes('page-data'));report.dev.push({pathname,status:r.status});
  }
} finally {fs.writeFileSync('test-results/smoke-report.json',JSON.stringify(report,null,2));await browser.close();server.close();}
console.log(JSON.stringify(report,null,2));
