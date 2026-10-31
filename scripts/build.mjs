import fs from 'node:fs';
import path from 'node:path';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {build, createServer} from 'vite';
import {documentHtml, redirectHtml, escapeHtml} from './html.mjs';
import {site} from '../src/data/site.js';

await build();
const manifest=JSON.parse(fs.readFileSync('dist/.vite/manifest.json','utf8'));
const entry=manifest['src/main.jsx'];
const routes=JSON.parse(fs.readFileSync('src/data/routes.json','utf8'));
const aliases=JSON.parse(fs.readFileSync('src/data/aliases.json','utf8'));
const server=await createServer({server:{middlewareMode:true},appType:'custom'});
const write=(name,content)=>{const target=path.join('dist',name);fs.mkdirSync(path.dirname(target),{recursive:true});fs.writeFileSync(target,content);};
try {
  const {default:App}=await server.ssrLoadModule('/src/App.jsx');
  for(const page of Object.values(routes)){
    page.year=new Date().getFullYear();
    const {default:Page}=await server.ssrLoadModule(`/src/pages/${page.component}.jsx`);
    const markup=renderToString(React.createElement(App,{Page,page}));
    write(page.path.slice(1),documentHtml(page,markup,{script:'/'+entry.file,css:(entry.css||[]).map(f=>'/'+f),production:true}));
  }
  for(const [file,target] of Object.entries(aliases))write(file,redirectHtml(target));
  const urls=[...new Set(Object.values(routes).filter(p=>!p.noindex).map(p=>site.origin+(p.canonical==='/index.html'?'/':p.canonical)))];
  write('sitemap.xml',`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map(url=>`<url><loc>${escapeHtml(url)}</loc></url>`).join('')}</urlset>`);
  write('robots.txt',`User-agent: *\nAllow: /\nSitemap: ${site.origin}/sitemap.xml\n`);
  // Apache hosting is optional; no rewrite/fallback or Node runtime is required.
  write('.htaccess','ErrorDocument 404 /404.html\nDirectoryIndex index.html\n');
  console.log(`Rendered ${Object.keys(routes).length} React pages and ${Object.keys(aliases).length} compatibility URLs.`);
} finally {await server.close();}
