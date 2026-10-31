import React from 'react';
import InstagramEmbed from '../../components/InstagramEmbed.jsx';

// Restored from ee33d1f1318478236ed4b657d5c50989abaa62e8:uanews/Milad_25.html; shared navigation/contact remains React.
export default function Page() {
  return <>
    <div className={"bg-blog-details fables-after-overlay"}>
      <div className={"container"}>
        <h2 className={"fables-page-title fables-second-border-color wow fadeInLeft"}>
          {" Milad ke-25 SIT Ulil Albab "}
        </h2>
      </div>
    </div>
    <div className={"container"}>
      <div className={"my-4 my-lg-5"}>
        <h1 className={"fables-second-text-color font-30 semi-font my-3 mt-md-0"}>
          {" SIT Ulil Albab Rayakan 25 Tahun Dedikasi dalam Pendidikan "}
        </h1>
        <p className={"fables-forth-text-color font-14"}>
          {" Ulil Albab,Cibitung -Sekolah Islam Terpadu (SIT) Ulil Albab merayakan 25 tahun perjalanan penuh inspirasi dalam mencetak generasi unggul, berakhlak mulia, dan berprestasi. Perayaan ini menjadi momen refleksi atas dedikasi sekolah dalam menghadirkan pendidikan berbasis nilai Islami serta inovasi di era modern. Sebagai bagian dari perayaan, SIT Ulil Albab memperkenalkan logo khusus 25 tahun yang menggambarkan semangat kebersamaan, inovasi, serta komitmen terhadap pendidikan berkualitas. Logo ini merepresentasikan pijakan kuat yang telah dibangun selama dua setengah dekade, sekaligus menjadi simbol harapan untuk masa depan yang lebih gemilang. “Momen ini tidak hanya menjadi ajang perayaan, tetapi juga kesempatan bagi kami untuk terus berinovasi dan beradaptasi dalam menghadapi tantangan dunia pendidikan di masa depan,” ujar perwakilan SIT Ulil Albab dalam pernyataannya. Dengan semangat kebersamaan, SIT Ulil Albab mengajak seluruh pihak—guru, siswa, orang tua, dan masyarakat—untuk terus mendukung perjalanan sekolah menuju masa depan yang lebih cerah. Ucapan terima kasih pun disampaikan kepada semua yang telah memberikan dukungan dan doa selama ini. Perayaan 25 tahun ini menjadi bukti bahwa SIT Ulil Albab terus berkomitmen untuk mencetak generasi unggul, berdaya saing, dan tetap berpegang teguh pada nilai-nilai Islami. "}
        </p>
      </div>
      <div className={"row mx-sm-0 mb-4 mb-md-0"}>
        <div className={"col-12 col-sm-4 p-sm-0 mb-4 mb-sm-0 wow fadeIn"}>
          <div className={"position-relative image-container rotateOut-effect"}>
            <InstagramEmbed url={"https://www.instagram.com/reel/DFMzwBJz2cn/?utm_source=ig_embed&utm_campaign=loading"} />
          </div>
        </div>
        <div className={"button-container"}>
          <a href={"/blog-cat-masonry.html"} className={"btn"}>
            {"UA News"}
          </a>
        </div>
      </div>
    </div>
  </>;
}
