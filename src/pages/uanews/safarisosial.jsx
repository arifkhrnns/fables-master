import React from 'react';
import DocumentationLink from '../../components/DocumentationLink.jsx';
import Carousel from '../../components/Carousel.jsx';
import InstagramEmbed from '../../components/InstagramEmbed.jsx';

export default function Page() {
  return <>
  <div className={"bg-blog-details fables-after-overlay "}>
    <div className={"container"}>
      <h2 className={"fables-page-title fables-second-border-color wow fadeInLeft"}>
        {" Safari Sosial SMPIT Ulil Albab di Yayasan Al Fajar Berseri, Tambun Selatan"}
      </h2>
    </div>
  </div>
  <div className={"container"}>
    <div className={"my-4 my-lg-5"}>
      <Carousel className={"owl-carousel owl-theme default-carousel absolute-dots inside-text-carousel nav-0 mr-4 mb-3"}>
        <div className={"image-container rotateOut-effect"}>
          <img src={"/assets/custom/images/safari/1.png"} alt={"Safari Sosial SMPIT Ulil Albab di Yayasan Al Fajar Berseri, Tambun Selatan"} className={"w-100"} />
        </div>
        <div className={"image-container rotateOut-effect"}>
          <img src={"/assets/custom/images/safari/2.png"} alt={"Safari Sosial SMPIT Ulil Albab di Yayasan Al Fajar Berseri, Tambun Selatan"} className={"w-100"} />
        </div>
        <div className={"image-container rotateOut-effect"}>
          <img src={"/assets/custom/images/safari/3.png"} alt={"Safari Sosial SMPIT Ulil Albab di Yayasan Al Fajar Berseri, Tambun Selatan"} className={"w-100"} />
        </div>
        <div className={"image-container rotateOut-effect"}>
          <img src={"/assets/custom/images/safari/4.png"} alt={"Safari Sosial SMPIT Ulil Albab di Yayasan Al Fajar Berseri, Tambun Selatan"} className={"w-100"} />
        </div>
        <div className={"image-container rotateOut-effect"}>
          <img src={"/assets/custom/images/safari/5.png"} alt={"Safari Sosial SMPIT Ulil Albab di Yayasan Al Fajar Berseri, Tambun Selatan"} className={"w-100"} />
        </div>
        <div className={"image-container rotateOut-effect"}>
          <img src={"/assets/custom/images/safari/6.png"} alt={"Safari Sosial SMPIT Ulil Albab di Yayasan Al Fajar Berseri, Tambun Selatan"} className={"w-100"} />
        </div>
      </Carousel>
      <h1 className={"fables-second-text-color font-30 semi-font my-3 mt-md-0"}>
        {"Safari Sosial SMPIT Ulil Albab di Yayasan Al Fajar Berseri, Tambun Selatan "}
      </h1>
      <p className={"fables-forth-text-color font-14"}>
        {" Tambun Selatan Bekasi, 24 September 2024 SMPIT Ulil Albab kembali menggelar kegiatan safari sosial sebagai wujud kepedulian terhadap masyarakat, kali ini dengan mengunjungi Yayasan Al Fajar Berseri, sebuah lembaga yang fokus pada pembinaan Orang dengan Gangguan Jiwa (ODGJ) dan lansia yang terlantar di wilayah Tambun Selatan Bekasi. "}
        <br />
        {" Dalam kunjungan ini, para siswa, guru, dan perwakilan dari SMPIT Ulil Albab tidak hanya memberikan bantuan materi, tetapi juga berinteraksi langsung dengan penghuni yayasan. Melalui kegiatan seperti ini, diharapkan dapat menumbuhkan rasa empati, kepedulian sosial, serta pemahaman yang lebih mendalam mengenai isu-isu kesehatan mental di masyarakat. "}
      </p>
    </div>
    <div className={"row mx-sm-0 mb-4 mb-md-0"}>
      <div className={"col-12 col-sm-4 p-sm-0 mb-4 mb-sm-0 wow fadeIn"}>
        <div className={"position-relative image-container rotateOut-effect"}>
          <InstagramEmbed url={"https://www.instagram.com/reel/DAUmBB8S9xU/?utm_source=ig_embed&utm_campaign=loading"} />
        </div>
      </div>
      <div className={"col-12 col-md-6 col-lg-4 wow fadeInLeft"}>
        <DocumentationLink href={"https://drive.google.com/drive/folders/13QgkM9L95Lry8dEj5ptYuwq0Vlk7P9VY?usp=drive_link"} />
      </div>
    </div>
    <div className={"button-container"}>
      <a href={"/blog-cat-masonry.html"} className={"btn"}>
        {"UA News"}
      </a>
    </div>
  </div>
  </>;
}
