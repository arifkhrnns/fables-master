import React from 'react';
import {site} from '../data/site.js';

export default function Footer({phone = '+62 821-2203-7474 (Ibu Lina)'}) {
  return <footer id="kontak">
    <div className="fables-footer-image fables-after-overlay white-color py-4 py-lg-5 bg-rules"><div className="container"><div className="row">
      <div className="col-12 col-md-6 col-lg-4 mb-4 mb-md-0">
        <a href="/index.html" className="fables-second-border-color border-bottom pb-3 d-block mb-3 mt-minus-13"><img src="/assets/custom/images/Group 2 (2).png" alt="SIT Ulil Albab" className="img-fluid" /></a>
        <p className="font-15 fables-third-text-color text-justify">SIT Ulil Albab adalah bagian dari Yayasan Ulil Albab. Saat ini SIT Ulil Albab memiliki 4 lembaga pendidikan. dan telah menciptakan alumni berprestasi.</p>
      </div>
      <div className="col-12 col-md-6 col-lg-4 mb-4 mb-md-0">
        <h2 className="font-20 semi-font fables-second-border-color border-bottom pb-3">Kontak</h2>
        {[["map-icon", "Alamat", site.address], ["phone", "Hubungi Kami", phone], ["email", "E-Mail", site.email]].map(([icon,label,value]) => <div className="my-2" key={label}>
          <h3 className="font-16 semi-font"><span className={`fables-icon${icon} fables-second-text-color pr-2 font-20 mt-1 d-inline-block`} /> {label}</h3><p className="font-14 fables-fifth-text-color mt-2">{value}</p>
        </div>)}
      </div>
      <div className="col-12 col-lg-4"><h2 className="font-20 semi-font fables-second-border-color border-bottom pb-3 mb-3">Tentang</h2><ul className="nav fables-footer-links">
        {[['Beranda','/index.html'],['Visi Misi','/index.html#visi-misi'],['Unit','/index.html#unit'],['Ekstrakulikuler','/index.html#ekstrakulikuler'],['Program Tahunan','/index.html#program-tahunan'],['Profil','/visimisi.html'],['Informasi','/blog-cat-masonry.html']].map(([label,href]) => <li key={label}><a href={href}>{label}</a></li>)}
      </ul></div>
    </div></div></div>
    <div className="copyright fables-main-background-color mt-0 border-0 white-color py-2"><p className="mb-1 text-center">Ikuti Kami di Sosial Media Kami</p><ul className="nav fables-footer-social-links justify-content-center fables-light-footer-links"><li><a href={site.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram SIT Ulil Albab"><i className="fab fa-instagram" /></a></li></ul></div>
  </footer>;
}
