import {chromium} from 'playwright';
import fs from 'node:fs';
import assert from 'node:assert/strict';
import {serve} from './serve.mjs';
const server=serve('dist',4178);const browser=await chromium.launch({channel:'chrome',headless:true});
try {
 const context=await browser.newContext();const blocked=[];
 await context.route('**/*',r=>{if(r.request().method()!=='GET'||/formResponse|googletagmanager|google-analytics/.test(r.request().url())){blocked.push(r.request().url());return r.abort();}return r.continue();});
 const page=await context.newPage();await page.goto('http://127.0.0.1:4178/form-ppdb.html',{waitUntil:'load'});await page.waitForTimeout(2000);
 const frame=page.frames().find(f=>f.url().includes('docs.google.com/forms/'));
 assert.ok(frame,'Original Google Form loaded');
 // Leave every field empty. Google performs required-field validation locally.
 // All POST requests and formResponse requests remain blocked as a safeguard.
 await frame.getByRole('button',{name:'Berikutnya',exact:true}).click();
 await frame.getByText('Pertanyaan ini wajib diisi').first().waitFor();
 const validationErrors=await frame.getByText('Pertanyaan ini wajib diisi').count();
 const report={url:frame.url(),validationErrors,submitted:false,enteredData:false,text:await frame.locator('body').innerText(),fields:await frame.locator('input:not([type=hidden]),textarea,[role=radio]').evaluateAll(els=>els.map(e=>({tag:e.tagName,type:e.getAttribute('type'),role:e.getAttribute('role'),required:e.getAttribute('aria-required')||e.required,label:e.getAttribute('aria-label')}))),blocked};
 fs.writeFileSync('test-results/form-report.json',JSON.stringify(report,null,2));console.log(JSON.stringify(report,null,2));
} finally {await browser.close();server.close();}
