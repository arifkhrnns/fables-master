import React from 'react';
import Carousel from '../components/Carousel.jsx';

export default function Page() {
  return <>
  <div className={"bg-blog-details fables-after-overlay "}>
    <div className={"container"}>
      <h2 className={"fables-page-title fables-second-border-color wow fadeInLeft"}>
        {" DRAMA KOLOSAL SIT ULIL ALBAB"}
      </h2>
    </div>
  </div>
  <div className={"container"}>
    <div className={"my-4 my-lg-5"}>
      <Carousel className={"owl-carousel owl-theme default-carousel absolute-dots inside-text-carousel nav-0 mr-4 mb-3"}>
        <div className={"image-container rotateOut-effect"}>
          <img src={"/assets/custom/images/kolosal drama/DSCF2923 1.png"} alt={"DRAMA KOLOSAL SIT ULIL ALBAB"} className={"w-100"} />
        </div>
        <div className={"image-container rotateOut-effect"}>
          <img src={"/assets/custom/images/kolosal drama/DSCF2831 1.png"} alt={"DRAMA KOLOSAL SIT ULIL ALBAB"} className={"w-100"} />
        </div>
      </Carousel>
      <h1 className={"fables-second-text-color font-30 semi-font my-3 mt-md-0"}>
        {"Drama Kolosal SIT Ulil Albab"}
      </h1>
    </div>
    <div className={"row mx-sm-0 mb-4 mb-md-0"}>
      <div className={"col-12 col-sm-4 p-sm-0 mb-4 mb-sm-0 wow fadeIn"}>
        <div className={"position-relative image-container rotateOut-effect"}>
          <img src={"/assets/custom/images/kolosal drama/image 9.png"} alt={"DRAMA KOLOSAL SIT ULIL ALBAB"} className={"w-100"} />
          <div className={"demo-gallery-poster fables-main-gradient"}>
            <a data-fancybox={""} href={"https://youtu.be/vOkje79ddJE"}>
              <img src={"/assets/custom/images/play-button.png"} alt={"play button"} className={"img-fluid"} />
            </a>
          </div>
        </div>
      </div>
      <div className={"col-12 col-md-6 col-lg-4 wow fadeInLeft"}>
        <div className={"latest-news-img-block"}>
          <p className={"latest-news-text fables-testimonial-detail bg-color-blogdetails italic text-white font-14 text-center p-6"}>
            <a href={"https://drive.google.com/drive/folders/1NvKsgA9c5pj4oN5cOfdSbs_AN8yuMWCq?usp=sharing"} target={"_blank"} rel={"noopener noreferrer"}>
              {"DOKUMENTASI"}
            </a>
          </p>
        </div>
      </div>
    </div>
    <div className={"row overflow-hidden mb-4 mt-md-4 my-lg-5"}>
      <div className={"col-12 col-md-6 col-lg-8 wow fadeInRight"}>
        <hr />
      </div>
    </div>
  </div>
  </>;
}
