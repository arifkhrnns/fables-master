import {site} from '../src/data/site.js';

export const escapeHtml = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const theme = [
  'https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i',
  '/assets/vendor/fontawesome/css/fontawesome-all.min.css',
  '/assets/custom/css/fables-icons.css',
  '/assets/vendor/bootstrap/css/bootstrap.min.css',
  '/assets/vendor/bootstrap/css/bootstrap-4-navbar.css',
  '/assets/vendor/owlcarousel/owl.theme.default.min.css',
  '/assets/custom/css/custom.css',
  '/assets/custom/css/custom-responsive.css',
];

export function documentHtml(page, markup, {script='/src/main.jsx', css=[], production=false}={}) {
  const styles=[...(page.standalone || page.layout === 'library'?[]:theme), ...(page.styles||[]), ...css];
  const canonical=site.origin+(page.canonical==='/index.html'?'/':page.canonical);
  // Preserve the original home-page GTM integration, only on a production build.
  const tracking=production&&page.path==='/index.html'?`<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${site.tagManager}');</script>`:'';
  return `<!doctype html>
<html lang="id"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${escapeHtml(page.title)}</title>
<meta name="description" content="${escapeHtml(page.description)}"><link rel="canonical" href="${escapeHtml(canonical)}">${page.noindex?'<meta name="robots" content="noindex, follow">':''}
<link rel="icon" href="/assets/custom/images/yayasan.jpeg">${styles.map(href=>`<link rel="stylesheet" href="${escapeHtml(href)}">`).join('\n')}${tracking}</head>
<body>${tracking?`<noscript><iframe title="Google Tag Manager" src="https://www.googletagmanager.com/ns.html?id=${site.tagManager}" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>`:''}<div id="root">${markup}</div><script id="page-data" type="application/json">${JSON.stringify(page).replaceAll('<','\\u003c')}</script><script type="module" src="${script}"></script></body></html>`;
}

export function redirectHtml(target) {
  return `<!doctype html><html lang="id"><head><meta charset="UTF-8"><meta name="robots" content="noindex, follow"><meta http-equiv="refresh" content="0;url=${escapeHtml(target)}"><title>Halaman dipindahkan | SIT Ulil Albab</title><link rel="canonical" href="${site.origin}${escapeHtml(target)}"></head><body><p>Halaman telah dipindahkan. <a href="${escapeHtml(target)}">Lanjutkan</a>.</p></body></html>`;
}
