import React, {useRef, useState} from 'react';
import {library, libraryNavigation} from '../../data/library.js';
import routes from '../../data/routes.json';

export default function LibraryLayout({page, children}) {
  const [open, setOpen] = useState(false);
  const toggle = useRef(null);
  // Reuse the configured school homepage destination, including its message.
  const whatsapp = routes['/index.html'].whatsapp;
  return <div className="library-site">
    <a className="skip-link" href="#main-content">Lewati ke konten</a>
    <div className="library-topbar"><div className="library-container"><a href="/index.html"><span aria-hidden="true">←</span> Website utama Ulil Albab</a><span>Portal Perpustakaan</span></div></div>
    <header className="library-header" onKeyDown={event => {
      if (event.key === 'Escape' && open) {setOpen(false); toggle.current?.focus();}
    }}>
      <div className="library-container library-brand-row">
        <a className="library-brand" href="/perpustakaan.html">
          <img src={library.logo} alt="Logo SMP IT Ulil Albab" width="56" height="64" />
          <span><strong>{library.name}</strong><small>NPP: {library.npp}</small></span>
        </a>
        <button ref={toggle} className="library-menu-toggle" type="button" aria-expanded={open} aria-controls="library-navigation" onClick={() => setOpen(!open)}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d={open ? 'M5 5l14 14M19 5L5 19' : 'M4 6h16M4 12h16M4 18h16'} /></svg>
          {open ? 'Tutup menu' : 'Buka menu'}
        </button>
      </div>
      <nav id="library-navigation" className={`library-nav ${open ? 'is-open' : ''}`} aria-label="Navigasi perpustakaan">
        <ul className="library-container">{libraryNavigation.map(item => <li key={item.label}>
          {item.href ? <a href={item.href} aria-current={page.path === item.href ? 'page' : undefined}>{item.label}</a>
            : <span className="library-nav-disabled" aria-disabled="true">{item.label}<small>Segera hadir</small></span>}
        </li>)}</ul>
      </nav>
    </header>
    <main id="main-content" className="library-main">{children}</main>
    <footer className="library-footer"><div className="library-container"><span>{library.name}</span><span>NPP: {library.npp}</span></div></footer>
    {whatsapp && <a className="library-whatsapp" href={whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Hubungi sekolah melalui WhatsApp (tab baru)">
      <img src="/assets/custom/images/whatsapp (1) 2.png" alt="" width="27" height="27" /><span>WhatsApp</span>
    </a>}
  </div>;
}
