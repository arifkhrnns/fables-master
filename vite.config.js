import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {documentHtml, redirectHtml} from './scripts/html.mjs';

export default defineConfig({
  appType: 'custom',
  plugins: [react(), {
    name:'school-static-pages',
    configureServer(server) {
      return () => server.middlewares.use(async (req,res,next) => {
        const pathname=decodeURI(req.url.split('?')[0]);
        if(pathname!=='/'&&!pathname.endsWith('.html')&&(/\.[a-z0-9]+$/i.test(pathname)||pathname.startsWith('/@')||pathname.startsWith('/src/'))) return next();
        try {
          const routes=JSON.parse(fs.readFileSync('src/data/routes.json','utf8'));
          const aliases=JSON.parse(fs.readFileSync('src/data/aliases.json','utf8'));
          if(aliases[pathname.slice(1)]){res.setHeader('Content-Type','text/html');return res.end(redirectHtml(aliases[pathname.slice(1)]));}
          const requested=pathname==='/'?'/index.html':pathname;
          const page=routes[requested]||routes['/404.html'];
          page.year=new Date().getFullYear();
          const {default:App}=await server.ssrLoadModule('/src/App.jsx');
          const {default:Page}=await server.ssrLoadModule(`/src/pages/${page.component}.jsx`);
          const html=documentHtml(page,renderToString(React.createElement(App,{Page,page})));
          res.statusCode=routes[requested]?200:404;res.setHeader('Content-Type','text/html; charset=utf-8');
          res.end(await server.transformIndexHtml(pathname,html));
        } catch(e) {server.ssrFixStacktrace(e);next(e);}
      });
    },
  }],
  build: {manifest:true, rollupOptions:{input:'src/main.jsx'}},
});
