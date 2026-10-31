import React from 'react';
import {library} from '../data/library.js';

export default function LibraryOrganization() {
  return <section className="library-organization">
    <h1 className="library-sr-only">Organisasi {library.name}</h1>
    {library.organizationImage ? <a className="library-organization-image" href={library.organizationImage} target="_blank" rel="noopener noreferrer" aria-label="Buka gambar struktur organisasi ukuran asli di tab baru untuk memperbesar">
      <img src={library.organizationImage} width="1600" height="968" alt={`Struktur organisasi ${library.name}`} />
    </a> : <p className="library-pending">Gambar struktur organisasi belum tersedia.</p>}
  </section>;
}
