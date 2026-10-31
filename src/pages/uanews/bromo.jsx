import React from 'react';
import LightboxLink from '../../components/LightboxLink.jsx';

export default function Page() {
  return <>
  <div className={"bg-blog-details fables-after-overlay "}>
    <div className={"container"}>
      <h1 className={"fables-page-title fables-second-border-color wow fadeInLeft"}>
        {" Perjalanan Menuju Bromo"}
      </h1>
    </div>
  </div>
  <div className={"container"}>
    <LightboxLink href={"/assets/custom/images/GTC/bromo.jpg"}>
      <img src={"/assets/custom/images/GTC/bromo.jpg"} alt={"perjalanan menuju bromo"} className={"responsive-img"} />
    </LightboxLink>
    <div className={"button-container"}>
      <a href={"/blog-cat-masonry.html"} className={"btn"}>
        {"UA News"}
      </a>
    </div>
  </div>
  </>;
}
