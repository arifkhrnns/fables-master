import React from 'react';
import Carousel from '../../components/Carousel.jsx';
import InstagramEmbed from '../../components/InstagramEmbed.jsx';

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
      <p className={"fables-forth-text-color font-14"}>
        {" Sekolah Islam Terpadu (SIT) Ulil Albab kembali menunjukkan komitmennya dalam membangun karakter dan semangat kebangsaan melalui sebuah acara yang spektakuler. Siswa dan siswi SIT Ulil Albab menggelar pentas drama kolosal bertema \"Road to Independence\" yang berhasil memukau para penonton. Drama ini mengisahkan perjalanan bangsa Indonesia menuju kemerdekaan, dengan menampilkan berbagai peristiwa penting dalam sejarah perjuangan rakyat Indonesia melawan penjajah. Mulai dari perjuangan para pahlawan, seperti Soekarno, Hatta, hingga tokoh-tokoh rakyat biasa yang turut berperan dalam memperjuangkan kemerdekaan. Acara yang diadakan lapangan SIT Ulil Albab ini dihadiri oleh seluruh warga sekolah, mulai dari siswa, guru, hingga orang tua. Pementasan ini juga menjadi ajang unjuk bakat bagi para siswa yang tidak hanya berakting, tetapi juga berperan sebagai tim produksi, seperti penata rias, kostum, dan musik. Pentas drama \"Road to Independence\" berhasil menggambarkan dengan sangat apik semangat juang dan nasionalisme yang tinggi. Penggunaan properti, kostum, dan efek panggung yang mendukung alur cerita semakin menambah kekhidmatan acara ini. Tidak hanya itu, penampilan para siswa yang totalitas dalam memerankan tokoh-tokoh sejarah juga mendapatkan apresiasi tinggi dari para hadirin. "}
      </p>
    </div>
    <div className={"row mx-sm-0 mb-4 mb-md-0"}>
      <div className={"col-12 col-sm-4 p-sm-0 mb-4 mb-sm-0 wow fadeIn"}>
        <div className={"position-relative image-container rotateOut-effect"}>
          <InstagramEmbed url={"https://www.instagram.com/reel/C_hS_mCSlrR/?utm_source=ig_embed&utm_campaign=loading"} />
        </div>
      </div>
      <div className={"news-card"} style={{"width":"100%","maxWidth":"300px","margin":"auto","textAlign":"center","padding":"20px","borderRadius":"10px","background":"linear-gradient(135deg, #6b73ff, #000dff)","boxShadow":"0 4px 10px rgba(0, 0, 0, 0.2)","animation":"fadeInUp 1s"}}>
        <div className={"news-card-content"}>
          <p style={{"color":"#fff","fontStyle":"italic","fontFamily":"'Arial', sans-serif","fontSize":"16px","margin":"10px 0"}}>
            {" Jelajahi lebih banyak dokumentasi kami di sini: "}
          </p>
          <a href={"https://drive.google.com/drive/folders/1NvKsgA9c5pj4oN5cOfdSbs_AN8yuMWCq?usp=sharing"} target={"_blank"} style={{"display":"inline-block","textDecoration":"none","backgroundColor":"#fff","color":"#000dff","fontSize":"14px","fontWeight":"bold","padding":"10px 20px","borderRadius":"5px","transition":"background-color 0.3s"}} rel={"noopener noreferrer"}>
            {" DOKUMENTASI "}
          </a>
        </div>
      </div>
    </div>
    <div className={"row overflow-hidden mb-4 mt-md-4 my-lg-5"}>
      <div className={"col-12 col-md-6 col-lg-8 wow fadeInRight"}>
        <p className={"fables-forth-text-color font-14 mt-4 mt-sm-0"}>
          {" Acara ini ditutup dengan tepuk tangan meriah dari para penonton. Pentas drama kolosal \"Road to Independence\" ini tidak hanya menjadi hiburan, tetapi juga menjadi momen refleksi dan inspirasi bagi semua yang hadir untuk terus mengingat dan menghargai perjuangan para pahlawan dalam meraih kemerdekaan. Dengan suksesnya acara ini, SIT Ulil Albab sekali lagi membuktikan dedikasinya dalam mencetak generasi muda yang tidak hanya cerdas secara akademik, tetapi juga memiliki jiwa nasionalisme yang kuat. "}
        </p>
        <hr />
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
