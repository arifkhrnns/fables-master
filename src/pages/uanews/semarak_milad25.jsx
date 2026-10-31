import React from 'react';
import InstagramEmbed from '../../components/InstagramEmbed.jsx';

// Restored from ee33d1f1318478236ed4b657d5c50989abaa62e8:uanews/semarak_milad25.html; shared navigation/contact remains React.
export default function Page() {
  return <>
    <div className={"bg-blog-details fables-after-overlay "}>
      <div className={"container"}>
        <h2 className={"fables-page-title fables-second-border-color wow fadeInLeft"}>
          {" Milad ke-25 Yayasan Ulil Albab Bekasi"}
        </h2>
      </div>
    </div>
    <div className={"container"}>
      <div className={"my-4 my-lg-5"}>
        <h1 className={"fables-second-text-color font-30 semi-font my-3 mt-md-0"}>
          {"Semarak Milad ke-25 Yayasan Ulil Albab Bekasi, Hadirkan Berbagai Kegiatan Seru dan Bermanfaat "}
        </h1>
        <p className={"fables-forth-text-color font-14"}>
          {" Dalam rangka merayakan Milad ke-25, Yayasan Ulil Albab Bekasi menggelar berbagai kegiatan yang menarik dan bermanfaat bagi seluruh komunitas sekolah serta masyarakat sekitar. Acara ini menjadi momentum penting dalam perjalanan yayasan dalam memberikan kontribusi di dunia pendidikan serta pengembangan karakter generasi muda. Berbagai kegiatan telah disiapkan untuk menyemarakkan perayaan ini, mulai dari lomba-lomba edukatif, kegiatan sosial, hingga pentas seni yang menampilkan kreativitas dan bakat siswa. Setiap rangkaian acara dirancang untuk memberikan pengalaman yang berkesan, sekaligus memperkuat nilai kebersamaan dan kepedulian sosial. Seluruh warga sekolah dan masyarakat diundang untuk ikut serta dalam perayaan ini serta memeriahkan setiap kegiatan yang telah disiapkan. Untuk informasi lebih lanjut mengenai acara Milad ke-25 Yayasan Ulil Albab Bekasi, dapat mengunjungi ulilalbab.sch.id atau menghubungi 0813-1418-0955. Jangan lupa ikuti keseruannya melalui media sosial di @sit_ulilalbabekasi. Mari bersama merayakan 25 tahun perjalanan Yayasan Ulil Albab Bekasi menuju masa depan yang lebih gemilang!. "}
        </p>
      </div>
      <div className={"row mx-sm-0 mb-4 mb-md-0"}>
        <div className={"col-12 col-sm-4 p-sm-0 mb-4 mb-sm-0 wow fadeIn"}>
          <div className={"position-relative image-container rotateOut-effect"}>
            <InstagramEmbed url={"https://www.instagram.com/p/DGCJC6yT6wj/?utm_source=ig_embed&utm_campaign=loading"} />
          </div>
        </div>
        <div className={"col-12 col-md-6 col-lg-4 wow fadeInLeft"}>
          <div className={"latest-news-img-block"}>
            <p className={"latest-news-text fables-testimonial-detail bg-color-blogdetails italic text-white font-14 text-center p-6"}>
              <span>{"Dokumentasi belum tersedia"}</span>
            </p>
          </div>
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
