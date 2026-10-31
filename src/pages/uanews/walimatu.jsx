import React from 'react';
import InstagramEmbed from '../../components/InstagramEmbed.jsx';

export default function Page() {
  return <>
  <div className={"bg-blog-details fables-after-overlay "}>
    <div className={"container"}>
      <h2 className={"fables-page-title fables-second-border-color wow fadeInLeft"}>
        {" WalimatuSyafar Umroh Wihastari, S.Pd."}
      </h2>
    </div>
  </div>
  <div className={"container"}>
    <div className={"my-4 my-lg-5"}>
      <h1 className={"fables-second-text-color font-30 semi-font my-3 mt-md-0"}>
        {"Walimatusyafar Umroh Wihastari, S.Pd. "}
      </h1>
      <p className={"fables-forth-text-color font-14"}>
        {" Bekasi, 13 Oktober 2024 – Suasana haru dan bahagia menyelimuti acara Walimatusyafar yang diselenggarakan oleh Yayasan SIT Ulil Albab untuk melepas keberangkatan Ibu Wihastari, S.Pd. menunaikan ibadah umrah. Ibu Wihastari, seorang pendidik yang berdedikasi, diberikan kesempatan mulia ini sebagai bentuk penghargaan atas pengabdian dan kontribusinya selama bertahun-tahun di yayasan. Acara yang berlangsung khidmat ini diawali dengan pembacaan doa bersama untuk kelancaran perjalanan dan ibadah umrah beliau. Dalam sambutannya, Ketua Yayasan SIT Ulil Albab menyampaikan bahwa pemberangkatan ini merupakan wujud apresiasi atas keteladanan dan kerja keras Ibu Wihastari yang telah memberikan dampak besar bagi dunia pendidikan di lingkungan SIT Ulil Albab. Acara ditutup dengan pelukan hangat dari rekan-rekan kerja, dan pihak yayasan, disertai doa agar Ibu Wihastari dapat menjalankan ibadah dengan khusyuk dan kembali ke tanah air dengan selamat. "}
      </p>
    </div>
    <div className={"row mx-sm-0 mb-4 mb-md-0"}>
      <div className={"col-12 col-sm-4 p-sm-0 mb-4 mb-sm-0 wow fadeIn"}>
        <div className={"position-relative image-container rotateOut-effect"}>
          <InstagramEmbed url={"https://www.instagram.com/reel/DBGUt1Yy1tu/?utm_source=ig_embed&utm_campaign=loading"} />
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
