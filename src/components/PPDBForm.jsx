import React from 'react';
import {site} from '../data/site.js';
export default function PPDBForm() {
  return <section className="ppdb-form">
    <div className="container py-4">
      <h1 className="font-30 fables-second-text-color">Pendaftaran PPDB SIT Ulil Albab {site.ppdbYear}</h1>
      <p>Tahun Ajaran {site.ppdbYear}</p>
    </div>
    <iframe title={`Formulir Pendaftaran PPDB SIT Ulil Albab ${site.ppdbYear}`} src={site.form} width="100%" height="1668" style={{border:0}} />
    <p className="container py-3">Jika formulir tidak tampil, <a href={site.form.replace('?embedded=true','')} target="_blank" rel="noopener noreferrer">buka formulir pendaftaran di Google Forms</a>.</p>
  </section>;
}
