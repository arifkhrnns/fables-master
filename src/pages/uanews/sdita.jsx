import React from 'react';
import InstagramEmbed from '../../components/InstagramEmbed.jsx';

export default function Page() {
  return <>
  <div className={"bg-blog-details fables-after-overlay "}>
    <div className={"container"}>
      <h2 className={"fables-page-title fables-second-border-color wow fadeInLeft"}>
        {" SDIT Al-Qur'an Ulil Albab Raih Akreditasi A"}
      </h2>
    </div>
  </div>
  <div className={"container"}>
    <div className={"my-4 my-lg-5"}>
      <h1 className={"fables-second-text-color font-30 semi-font my-3 mt-md-0"}>
        {"Selamat dan Apresiasi Setinggi-tingginya: SDIT Al-Qur'an Ulil Albab Raih Akreditasi A "}
      </h1>
      <p className={"fables-forth-text-color font-14"}>
        {" Ulil Albab, 2024 – SDIT Al-Qur'an Ulil Albab dengan bangga mengumumkan keberhasilan meraih Akreditasi A, sebuah prestasi yang patut dibanggakan dan menjadi tonggak penting dalam perjalanan pendidikan di sekolah ini. Keberhasilan ini tidak lepas dari kerja keras dan dedikasi seluruh tim guru, staf, siswa, serta dukungan luar biasa dari orang tua dan masyarakat yang telah memberikan kepercayaan dan doa yang tiada henti. Proses akreditasi ini menjadi bukti nyata komitmen bersama untuk terus menjaga dan meningkatkan kualitas pendidikan di SDIT Al-Qur'an Ulil Albab. \"Terima kasih atas dukungan dan kepercayaan yang telah diberikan kepada kami. Prestasi ini adalah hasil dari kerjasama yang solid antara seluruh pihak,\" ujar Kepala Sekolah SDIT Al-Qur'an Ulil Albab. Dengan capaian ini, SDIT Al-Qur'an Ulil Albab semakin bersemangat untuk terus mencetak generasi unggul yang tidak hanya berprestasi, tetapi juga memiliki akhlak mulia. "}
      </p>
    </div>
    <div className={"row mx-sm-0 mb-4 mb-md-0"}>
      <div className={"col-12 col-sm-4 p-sm-0 mb-4 mb-sm-0 wow fadeIn"}>
        <div className={"position-relative image-container rotateOut-effect"}>
          <InstagramEmbed url={"https://www.instagram.com/p/DEWKvd2TaPT/?utm_source=ig_embed&utm_campaign=loading"} />
        </div>
      </div>
      <div className={"col-12 col-md-6 col-lg-4 wow fadeInLeft"}>
        <div className={"latest-news-img-block"}>
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
