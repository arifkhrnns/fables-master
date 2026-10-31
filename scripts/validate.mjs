import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {load} from 'cheerio';
import {site} from '../src/data/site.js';

const routes=JSON.parse(fs.readFileSync('src/data/routes.json'));
const aliases=JSON.parse(fs.readFileSync('src/data/aliases.json'));
const failures=[];let links=0,assets=0;
const walk=dir=>fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(dir,e.name)):[path.join(dir,e.name)]);
function localRef(ref,source){
  if(!ref||/^(?:[a-z]+:|\/\/|#)/i.test(ref))return;
  const url=new URL(ref,'https://local.test/'+path.relative('dist',source).replaceAll('\\','/'));
  const target=path.join('dist',decodeURIComponent(url.pathname));
  if(!fs.existsSync(target)){failures.push(`${source}: missing ${ref}`);return;}
  if(url.hash&&target.endsWith('.html')){
    const $=load(fs.readFileSync(target,'utf8'));const id=decodeURIComponent(url.hash.slice(1));
    if(!$('[id]').toArray().some(e=>e.attribs.id===id))failures.push(`${source}: missing fragment ${ref}`);
  }
}
for(const [url,page] of Object.entries(routes)){
  const file=path.join('dist',url);const html=fs.readFileSync(file,'utf8');const $=load(html);
  assert.equal($('html').attr('lang'),'id',url);
  assert.equal($('title').text(),page.title,url);
  assert.ok($('meta[name=description]').attr('content'),url);
  assert.equal($('link[rel=canonical]').length,1,url);
  assert.equal($('h1').length,1,`${url}: exactly one primary heading`);
  assert.ok($('#root').text().trim().length>20,`${url}: pre-rendered content`);
  assert.equal($('script[src*="jquery"], script[src*="owl"],script[src*="bootstrap"]').length,0,url);
  for(const e of $('a[href],img[src],script[src],link[href],iframe[src]').toArray()){
    const ref=e.attribs.href||e.attribs.src; localRef(ref,file);e.tagName==='a'?links++:assets++;
  }
  for(const e of $('img').toArray())assert.ok('alt' in e.attribs,`${url}: missing alt`);
  for(const e of $('[href^="#"]').toArray()){
    const id=e.attribs.href.slice(1);if(id&&!$('[id]').toArray().some(x=>x.attribs.id===id))failures.push(`${url}: missing #${id}`);
  }
  for(const e of $('[style]').toArray())for(const m of e.attribs.style.matchAll(/url\(\s*(?:"([^"]*)"|'([^']*)'|([^)]*))\s*\)/g))localRef((m[1]??m[2]??m[3]).trim(),file);
}
for(const file of walk('dist').filter(f=>f.endsWith('.css'))){
  for(const m of fs.readFileSync(file,'utf8').matchAll(/url\(\s*(?:"([^"]*)"|'([^']*)'|([^)]*))\s*\)/g))localRef((m[1]??m[2]??m[3]).trim(),file);
}
for(const file of Object.keys(aliases))assert.ok(fs.existsSync(path.join('dist',file)),file);
const form=load(fs.readFileSync('dist/form-ppdb.html','utf8'));
assert.equal(form('iframe').attr('src'),site.form,'Original Google Forms destination');
assert.ok(fs.readFileSync('dist/robots.txt','utf8').includes(site.origin));
assert.ok(!walk('dist').some(f=>/node_modules|retained|audit-original|\.env/.test(f)));
const report={pages:Object.keys(routes).length,compatibilityUrls:Object.keys(aliases).length,links,assets,failures};
fs.mkdirSync('test-results',{recursive:true});fs.writeFileSync('test-results/static-report.json',JSON.stringify(report,null,2));
console.log(JSON.stringify(report,null,2));assert.equal(failures.length,0,'All internal references must resolve');
