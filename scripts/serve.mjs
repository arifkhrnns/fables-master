import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import {pathToFileURL} from 'node:url';

export function serve(directory='dist', port=4173) {
  const root=path.resolve(directory);
  const mime={'.html':'text/html; charset=utf-8','.js':'text/javascript','.css':'text/css','.json':'application/json','.xml':'application/xml','.txt':'text/plain','.jpg':'image/jpeg','.jpeg':'image/jpeg','.png':'image/png','.svg':'image/svg+xml','.webp':'image/webp','.woff':'font/woff','.woff2':'font/woff2','.ttf':'font/ttf'};
  return http.createServer((req,res)=>{
    let pathname;try {pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);}catch {res.writeHead(400);return res.end();}
    let file=path.resolve(root,'.'+pathname+(pathname.endsWith('/')?'index.html':''));
    if(!file.startsWith(root+path.sep)||pathname.includes('\\')){res.writeHead(403);return res.end();}
    if(!fs.existsSync(file)||!fs.statSync(file).isFile()){res.statusCode=404;file=path.join(root,'404.html');}
    res.setHeader('Content-Type',mime[path.extname(file)]||'application/octet-stream');
    fs.createReadStream(file).pipe(res);
  }).listen(port,'127.0.0.1',()=>console.log(`Static preview: http://127.0.0.1:${port}`));
}
if(process.argv[1]&&import.meta.url===pathToFileURL(path.resolve(process.argv[1])).href)serve(process.argv[2]||'dist',Number(process.env.PORT||4173));
