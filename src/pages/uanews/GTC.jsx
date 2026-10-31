import React from 'react';

export default function Page() {
  return <>
    <div className="bg-blog-details fables-after-overlay">
      <div className="container"><h1 className="fables-page-title fables-second-border-color">Goes To Campus</h1></div>
    </div>
    <ul className="gtc-destinations">
      <li><a href="/uanews/its.html">Institut Teknologi Sepuluh Nopember (ITS)</a></li>
      <li><a href="/uanews/unbraw.html">Universitas Brawijaya</a></li>
      <li><a href="/uanews/museumangkot.html">Museum Angkut</a></li>
      <li><a href="/uanews/bromo.html">Gunung Bromo</a></li>
    </ul>
    <div className="gtc-news-link"><a href="/blog-cat-masonry.html">Explore More News</a></div>
  </>;
}
