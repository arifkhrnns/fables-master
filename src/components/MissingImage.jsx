import React from 'react';
export default function MissingImage({alt, className = ''}) {
  return <span className={`missing-image ${className}`} role="img" aria-label={alt || 'Foto belum tersedia'}>Foto belum tersedia</span>;
}
