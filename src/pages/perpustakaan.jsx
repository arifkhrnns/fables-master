import React from 'react';
import {library} from '../data/library.js';

export default function LibraryHome() {
  return <section className="library-hero">
    <div className="library-container library-hero-grid">
      <div className="library-hero-copy">
        <p className="library-eyebrow"><span aria-hidden="true" /> PERPUSTAKAAN DIGITAL</p>
        <h1>Selamat Datang di Portal <span>Perpustakaan Digital</span></h1>
        <p className="library-hero-name">{library.name}</p>
        <p className="library-hero-npp">NPP: {library.npp}</p>
        <a className="library-primary-button" href="/perpustakaan-organisasi.html">Lihat Organisasi <span aria-hidden="true">↗</span></a>
      </div>
      <div className="library-hero-art"><img src="/assets/library/digital-library.svg" alt="Ilustrasi buku terbuka dan koleksi buku pada layar perpustakaan digital" width="640" height="560" fetchPriority="high" /></div>
    </div>
  </section>;
}
