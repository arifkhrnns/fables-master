import React, {useEffect, useRef, useState} from 'react';
import {navigation} from '../data/site.js';

export default function Header({path}) {
  const [mobile, setMobile] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const header = useRef(null);
  useEffect(() => {
    const scroll = () => setScrolled(window.scrollY > 100);
    const outside = e => {if (!header.current?.contains(e.target)) setDropdown(null);};
    scroll(); window.addEventListener('scroll', scroll, {passive:true}); document.addEventListener('click', outside);
    return () => {window.removeEventListener('scroll', scroll); document.removeEventListener('click', outside);};
  }, []);
  return <header ref={header} className={`fables-navigation fables-main-background-color py-3 py-lg-0 ${scrolled ? 'navbar-scrolled' : ''}`} onKeyDown={e => {
    if(e.key === 'Escape') {setDropdown(null); setMobile(false); header.current.querySelector('[aria-expanded="true"]')?.focus();}
  }}>
    <div className="container"><div className="row"><div className="col-12 col-md-12">
      <nav className="navbar navbar-expand-md btco-hover-menu py-lg-2" aria-label="Navigasi utama">
        <a className="navbar-brand pl-0" href="/index.html"><img src="/assets/custom/images/logo.png" alt="ULIL ALBAB" className="fables-logo" /></a>
        <button className="navbar-toggler" type="button" aria-label="Buka menu" aria-controls="school-navigation" aria-expanded={mobile} onClick={() => setMobile(!mobile)}><span className="fables-iconmenu-icon text-white font-16" /></button>
        <div className={`collapse navbar-collapse ${mobile ? 'show' : ''}`} id="school-navigation">
          <ul className="navbar-nav mx-auto fables-nav">
            {navigation.map(item => <li key={item.label} className={`nav-item ${item.children ? 'dropdown' : ''}`} onMouseEnter={()=>{if(item.children && matchMedia('(hover:hover) and (min-width: 768px)').matches)setDropdown(item.label);}} onMouseLeave={()=>{if(matchMedia('(hover:hover) and (min-width: 768px)').matches)setDropdown(null);}}>
              {item.children ? <><button type="button" className="nav-link dropdown-toggle" aria-label={item.label} aria-expanded={dropdown === item.label} aria-controls={`menu-${item.label}`} onClick={e => setDropdown(e.detail > 0 && matchMedia('(hover:hover) and (min-width: 768px)').matches ? item.label : dropdown === item.label ? null : item.label)}>{item.label}</button>
                <ul id={`menu-${item.label}`} className={`dropdown-menu ${dropdown === item.label ? 'show' : ''}`}>{item.children.map(([label, href]) => <li key={label}><a className="dropdown-item" href={href} aria-current={path === href ? 'page' : undefined}>{label}</a></li>)}</ul></>
                : <a className="nav-link" href={item.href} aria-current={path === item.href ? 'page' : undefined}>{item.label}</a>}
            </li>)}
          </ul>
        </div>
      </nav>
    </div></div></div>
  </header>;
}
