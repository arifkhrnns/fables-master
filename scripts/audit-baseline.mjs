// Compare published content, not HTML/JSX tree shape. Run after npm run build.
import fs from 'node:fs';
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import {execFileSync} from 'node:child_process';
import {load} from 'cheerio';
const baseline='ee33d1f1318478236ed4b657d5c50989abaa62e8';
const git=(...args)=>execFileSync('git',args,{encoding:'utf8',maxBuffer:20000000});
const tree=git('ls-tree','-r','--name-only',baseline).trim().split(/\r?\n/);
const html=tree.filter(f=>f.endsWith('.html'));
const sources=new Map(html.map(f=>[f,git('show',`${baseline}:${f}`)]));
const routes=JSON.parse(fs.readFileSync('src/data/routes.json'));
const compact=s=>s.normalize('NFKC').replace(/[\s\u200b-\u200f\ufeff]+/g,'');
const norm=s=>s.replace(/\s+/g,' ').trim();
const hash=s=>crypto.createHash('sha256').update(s).digest('hex');
function url(ref,file){const u=new URL(ref.trim(),'https://baseline/'+file);if(u.hostname==='baseline')return decodeURIComponent(u.pathname)+u.search+u.hash;if(u.hostname.includes('instagram.com'))return 'https://www.instagram.com'+u.pathname.replace(/\/$/,'');return u.href;}
function content(raw){const dom=load(raw);dom('head,script,style,noscript,.fables-navigation,nav,#header,#footer,.fables-footer-image,.copyright,.whatsapp-button,#search,.modal,#ju-loading-screen,.instagram-media').remove();return dom;}
const acceptedText={
 'form-ppdb.html':{'Loading…':'Fallback iframe replaced with accessible local heading/link; original form URL retained.'},
 'maulkuadrat.html':{'Copyright © maulkuadrat':'Original script inserts the current year; React renders the year with the same attribution.'},
 'meyawo/public_html/maulkuadrat.html':{'Copyright © maulkuadrat':'Original script inserts the current year; React renders the year with the same attribution.'},
 'ppdb.html':{'Portal PPDB SIT Ulil Albab':'Confirmed active year 2026/2027 added to heading.','Start Registration':'Confirmed registration label Daftar 2026/2027.','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor.':'Template filler deliberately removed.'},
 'tk.html':{'Sebelumnya':'React carousel previous control uses aria-label Slide sebelumnya.','Berikutnya':'React carousel next control uses aria-label Slide berikutnya.'},
 'uanews/semarak_milad25.html':{'DOKUMENTASI':'Source has literal LINK DRIVE DOKUMENTASI; retained as unavailable text pending official URL.'},
};
const acceptedLinks={
 'blog-cat-masonry.html':{'/uanews/campleadersip.html.html':'/uanews/campleadersip.html'},
 'uanews/semarak_milad25.html':{'/uanews/LINK DRIVE DOKUMENTASI':null},
};
const exclusions={'meyawo/public_html/components.html':'Meyawo component demo, not school content; compatibility URL retained.','uanews/CNTHNEWS.html':'JUDUL/HEADER JUDUL example, not a school article; compatibility URL retained.'};
const report={baseline,method:'Normalized visible text blocks and text nodes, section headings, link destinations, embed identities, shared navigation/footer; no DOM-tree equality.',pages:[],shared:[],unexpected:[],downloads:[],localDocumentFiles:tree.filter(f=>/\.(pdf|docx?|xlsx?|pptx?|zip)$/i.test(f)),reusedEvidence:['docs/asset-recovery-manifest.json','test-results/recovery-coverage-report.json','test-results/recovery-visual-report.json','test-results/recovery-contact-report.json','test-results/browser-report.json'],pendingOfficialInformation:['SMP program photos intentionally follow the original SD-folder mapping.','SMA alumni logo/caption mismatch retained for official correction.','SMA banner dates/discount still refer to 2025.','Official brochure destinations absent.','Semarak Milad documentation URL is a placeholder.']};
for(const file of html){
 const raw=sources.get(file);const full=load(raw);const dom=content(raw);const route=routes['/'+file];
 if(exclusions[file]){report.pages.push({source:file,status:'deliberately excluded',reason:exclusions[file]});continue;}
 if(file==='header.html'||file==='footer.html'){report.pages.push({source:file,status:'shared component',target:file==='header.html'?'src/components/Header.jsx + src/data/site.js':'src/components/Footer.jsx + src/data/site.js'});continue;}
 if(!route){report.unexpected.push({file,type:'unmapped page'});continue;}
 const built=fs.readFileSync('dist/'+file,'utf8');const current=load(built);const main=current(route.standalone?'body':'main');const text=compact(main.text());
 const blocks=[...new Set(dom('body h1,body h2,body h3,body h4,body h5,body h6,body p,body li,body figcaption,body td,body th,body button,body label').map((i,e)=>norm(dom(e).text())).get().filter(Boolean))];
 const nodes=[];dom('body *').contents().each((i,e)=>{if(e.type==='text'&&norm(e.data))nodes.push(norm(e.data));});
 const missing=[...new Set([...blocks,...nodes])].filter(s=>!text.includes(compact(s)));
 const decisions=missing.map(s=>({sourceText:s,reason:acceptedText[file]?.[s]||null}));
 for(const d of decisions)if(!d.reason)report.unexpected.push({file,type:'text',...d});
 const newLinks=new Set(main.find('a[href]').map((i,e)=>url(current(e).attr('href'),file)).get());
 const links=dom('a[href]').map((i,e)=>({label:norm(dom(e).text()),original:dom(e).attr('href'),destination:url(dom(e).attr('href'),file)})).get();
 for(const a of links){
  if(a.original==='#'||a.original.startsWith('javascript:')){a.status='source placeholder/control';continue;}
  if(newLinks.has(a.destination))a.status='preserved';
  else if(Object.hasOwn(acceptedLinks[file]||{},a.destination)){a.status='intentional correction';a.currentDestination=acceptedLinks[file][a.destination];if(a.currentDestination)assert(newLinks.has(a.currentDestination));}
  else{a.status='unexpected';report.unexpected.push({file,type:'link',...a});}
  if(a.destination.includes('drive.google.com')||/\.(pdf|docx?|xlsx?|pptx?|zip)(?:$|[?#])/i.test(a.destination))report.downloads.push({page:'/'+file,...a});
 }
 const embeds=full('iframe[src],blockquote[data-instgrm-permalink]').map((i,e)=>({type:e.tagName,source:full(e).attr('src')||full(e).attr('data-instgrm-permalink')})).get();
 const targets=new Set(current('iframe[src],a[href],blockquote[data-instgrm-permalink]').map((i,e)=>url(current(e).attr('src')||current(e).attr('href')||current(e).attr('data-instgrm-permalink'),file)).get());
 for(const e of embeds){e.preserved=targets.has(url(e.source,file));if(!e.preserved)report.unexpected.push({file,type:'embed',...e});}
 const dynamic=full('[onclick],[data-property],form[action],a[download],video,audio,object,embed').map((i,e)=>({tag:e.tagName,attributes:e.attribs})).get();
 report.pages.push({source:file,target:'src/pages/'+route.component+'.jsx',route:'/'+file,status:route.standalone?'creator profile preserved separately':'school content preserved',sourceSha256:hash(raw),renderedSha256:hash(built),sections:dom('h1,h2,h3,h4').map((i,e)=>norm(dom(e).text())).get(),textBlocks:blocks.length,textNodes:new Set(nodes).size,acceptedTextDifferences:decisions,links,embeds,dynamic});
 if(route.standalone)continue;
 let oldNav=full('.fables-navigation');if(!oldNav.length){const shared=load(sources.get('header.html'));oldNav=shared('.fables-navigation');}
 const headerLinks=oldNav.find('a[href]').map((i,e)=>({label:norm(load(e).root().text()),href:e.attribs.href})).get().filter(a=>a.label&&a.href!=='#');
 const newHeader=current('header a[href]').map((i,e)=>({label:norm(current(e).text()),href:current(e).attr('href')})).get();
 const navChecks=headerLinks.map(a=>{const dest=url(a.href,file);const exact=newHeader.some(b=>b.label===a.label&&b.href===dest);const corrected={TK:'/tk.html',SD:'/sd.html',SMP:'/smp.html',SMA:'/sma.html','VISI MISI':'/visimisi.html','Sejarah Singkat':'/sejarah.html','UA News':'/blog-cat-masonry.html','Struktur Organisasi':'/404.html',Komite:'/404.html',Prestasi:'/404.html',Fasilitas:'/404.html'};const replacement=corrected[a.label];const preserved=exact||!!replacement&&newHeader.some(b=>b.label===a.label&&b.href===replacement);if(!preserved)report.unexpected.push({file,type:'navigation',...a});return {...a,preserved,currentDestination:exact?dest:replacement,reason:exact?'same destination':'intentional repair of old placeholder, broken relative path, or equivalent dedicated page'};});
 let oldFooter=full('.fables-footer-image');if(!oldFooter.length){const shared=load(sources.get('footer.html'));oldFooter=shared('.fables-footer-image');}
 const footerParagraphs=oldFooter.find('p').map((i,e)=>norm(load(e).root().text())).get();
 const footerText=compact(current('footer').text());const footerDecisions=[];
 for(const p of footerParagraphs)if(!footerText.includes(compact(p))){
  if(file==='form-ppdb.html'&&p==='+62 821-2203-7474 (Ibu Lina)'&&footerText.includes(compact('+62 813-1418-0955 (Ibu Lina)')))footerDecisions.push({source:p,current:'+62 813-1418-0955 (Ibu Lina)',status:'official mapping needed; existing approved contact retained'});
  else report.unexpected.push({file,type:'footer text',text:p});
 }
 const oldFooterLinks=oldFooter.find('a[href]').map((i,e)=>({label:norm(load(e).root().text()),href:e.attribs.href})).get().filter(a=>a.label&&a.href!=='#');
 const newFooter=current('footer a[href]').map((i,e)=>({label:norm(current(e).text()),href:current(e).attr('href')})).get();
 const footerChecks=oldFooterLinks.map(a=>{const dest=a.label==='Unit'?'/index.html#unit':a.href.startsWith('#')?'/index.html'+a.href:url(a.href,file);const preserved=newFooter.some(b=>b.label===a.label&&b.href===dest);if(!preserved)report.unexpected.push({file,type:'footer link',...a});return {...a,currentDestination:dest,preserved};});
 const originalWhatsApp=full('.whatsapp-button a').attr('href');
 const currentWhatsAppLinks=current('.whatsapp-button a').map((i,e)=>current(e).attr('href')).get();
 // PPDB also has an in-content CTA; compare the original floating button with
 // the matching current button, rather than mistaking the first CTA for it.
 const currentWhatsApp=currentWhatsAppLinks.find(h=>h===originalWhatsApp)||currentWhatsAppLinks[0];
 let whatsappDecision='same source target or no baseline button';
 if(originalWhatsApp&&originalWhatsApp!==currentWhatsApp){
  if(file==='form-ppdb.html'&&originalWhatsApp.includes('phone=+6282122037474')&&currentWhatsApp?.includes('phone=+6281314180955'))whatsappDecision='official mapping needed; existing approved 0813 target retained although baseline uses 0821';
  else if(file==='ppdb.html'&&originalWhatsApp.includes('phone=+6282122037474')&&currentWhatsApp==="https://api.whatsapp.com/send?phone=+6282122037474&text=Assalamu'alaikum, saya mau bertanya tentang PPDB SIT Ulil Albab")whatsappDecision='same 0821 destination; existing PPDB greeting adds punctuation and SIT, retained intentionally';
  else report.unexpected.push({file,type:'WhatsApp',originalWhatsApp,currentWhatsApp});
 }
 report.shared.push({page:'/'+file,navigation:navChecks,footer:footerChecks,contactAndAboutParagraphs:footerParagraphs.length,footerDecisions,originalWhatsApp,currentWhatsApp,currentWhatsAppLinks,whatsappDecision});
}
report.additionalReactRoutes=Object.keys(routes).filter(p=>!html.includes(p.slice(1)));
report.summary={baselineHtml:html.length,schoolPages:report.pages.filter(p=>p.status==='school content preserved').length,creatorPages:report.pages.filter(p=>p.status==='creator profile preserved separately').length,sharedFragments:2,excludedExamples:2,additionalLegacyRoutes:report.additionalReactRoutes.length,downloadLinks:report.downloads.length,unexpected:report.unexpected.length};
fs.writeFileSync('docs/baseline-completeness.json',JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({summary:report.summary,unexpected:report.unexpected,dynamic:report.pages.filter(p=>p.dynamic?.length).map(p=>({page:p.source,dynamic:p.dynamic}))},null,2));
assert.equal(report.unexpected.length,0,'Unclassified baseline differences; inspect docs/baseline-completeness.json');
