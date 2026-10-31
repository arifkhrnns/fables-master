import React from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';
import LibraryLayout from './components/library/LibraryLayout.jsx';

export default function App({Page, page}) {
  if (page.layout === 'library') return <LibraryLayout page={page}><Page /></LibraryLayout>;
  if (page.standalone) return <Page year={page.year} />;
  return <><a className="skip-link" href="#main-content">Lewati ke konten</a><Header path={page.path} /><main id="main-content"><Page /></main><Footer phone={page.phone} /><WhatsAppButton href={page.whatsapp} /></>;
}
