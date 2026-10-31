import React from 'react';
import Carousel from '../../components/Carousel.jsx';
import InstagramEmbed from '../../components/InstagramEmbed.jsx';

export default function Page() {
  return <>
  <div className={"bg-blog-details fables-after-overlay "}>
    <div className={"container"}>
      <h2 className={"fables-page-title fables-second-border-color wow fadeInLeft"}>
        {" PAWAI SIT ULIL ALBAB"}
      </h2>
    </div>
  </div>
  <div className={"container"}>
    <div className={"my-4 my-lg-5"}>
      <Carousel className={"owl-carousel owl-theme default-carousel absolute-dots inside-text-carousel nav-0 mr-4 mb-3"}>
        <div className={"image-container rotateOut-effect"}>
          <img src={"/assets/custom/images/pawai/KARNAVAL 17AN 2024-416.png"} alt={"PAWAI SIT ULIL ALBAB"} className={"w-100"} />
        </div>
        <div className={"image-container rotateOut-effect"}>
          <img src={"/assets/custom/images/pawai/KARNAVAL 17AN 2024-531.png"} alt={"PAWAI SIT ULIL ALBAB"} className={"w-100"} />
        </div>
        <div className={"image-container rotateOut-effect"}>
          <img src={"/assets/custom/images/pawai/KARNAVAL 17AN 2024-95.png"} alt={"PAWAI SIT ULIL ALBAB"} className={"w-100"} />
        </div>
        <div className={"image-container rotateOut-effect"}>
          <img src={"/assets/custom/images/pawai/KARNAVAL 17AN 2024-546.png"} alt={"PAWAI SIT ULIL ALBAB"} className={"w-100"} />
        </div>
        <div className={"image-container rotateOut-effect"}>
          <img src={"/assets/custom/images/pawai/KARNAVAL 17AN 2024-552.png"} alt={"PAWAI SIT ULIL ALBAB"} className={"w-100"} />
        </div>
        <div className={"image-container rotateOut-effect"}>
          <img src={"/assets/custom/images/pawai/KARNAVAL 17AN 2024-553.png"} alt={"PAWAI SIT ULIL ALBAB"} className={"w-100"} />
        </div>
      </Carousel>
      <h1 className={"fables-second-text-color font-30 semi-font my-3 mt-md-0"}>
        {"PAWAI SIT ULILALBAB"}
      </h1>
      <p className={"fables-forth-text-color font-14"}>
        {" Dalam rangka memperingati Hari Kemerdekaan Indonesia ke-79, Sekolah Islam Terpadu (SIT) Ulil Albab menggelar acara karnaval yang penuh warna dan keceriaan pada tanggal 15 Agustus 2024. Acara karnaval ini menjadi salah satu rangkaian kegiatan dalam menyemarakkan perayaan kemerdekaan dengan melibatkan seluruh siswa, guru, serta orang tua. Karnaval yang diadakan di sekitar lingkungan sekolah ini diikuti oleh siswa dari berbagai jenjang pendidikan, mulai dari TK, SD, SMP, hingga SMA. Dengan mengenakan kostum bertema kebangsaan, budaya daerah, dan pahlawan nasional, peserta karnaval berbaris rapi sambil mengibarkan bendera merah putih. Parade ini dimulai dari gerbang sekolah dan berjalan mengelilingi area sekitar, diiringi dengan yel-yel semangat dan sorak sorai penonton. "}
      </p>
    </div>
    <div className={"row mx-sm-0 mb-4 mb-md-0"}>
      <div className={"col-12 col-sm-4 p-sm-0 mb-4 mb-sm-0 wow fadeIn"}>
        <div className={"position-relative image-container rotateOut-effect"}>
          <InstagramEmbed url={"https://www.instagram.com/reel/C_PQNcrS7xN/?utm_source=ig_embed&utm_campaign=loading"} />
        </div>
      </div>
      <div className={"news-card"} style={{"width":"100%","maxWidth":"300px","margin":"auto","textAlign":"center","padding":"20px","borderRadius":"10px","background":"linear-gradient(135deg, #6b73ff, #000dff)","boxShadow":"0 4px 10px rgba(0, 0, 0, 0.2)","animation":"fadeInUp 1s"}}>
        <div className={"news-card-content"}>
          <p style={{"color":"#fff","fontStyle":"italic","fontFamily":"'Arial', sans-serif","fontSize":"16px","margin":"10px 0"}}>
            {" Jelajahi lebih banyak dokumentasi kami di sini: "}
          </p>
          <a href={"https://drive.google.com/drive/folders/1ppKr74gK3GLdDigSFd-qDtHYPTnY3c_1"} target={"_blank"} style={{"display":"inline-block","textDecoration":"none","backgroundColor":"#fff","color":"#000dff","fontSize":"14px","fontWeight":"bold","padding":"10px 20px","borderRadius":"5px","transition":"background-color 0.3s"}} rel={"noopener noreferrer"}>
            {" DOKUMENTASI "}
          </a>
        </div>
      </div>
    </div>
    <div className={"row overflow-hidden mb-4 mt-md-4 my-lg-5"}>
      <div className={"col-12 col-md-6 col-lg-8 wow fadeInRight"}>
        <p className={"fables-forth-text-color font-14 mt-4 mt-sm-0"}>
          {" Selain sebagai ajang perayaan, karnaval ini juga menjadi sarana edukasi bagi para siswa untuk lebih mengenal keragaman budaya dan memperkuat rasa persatuan. Acara diakhiri dengan pemberian penghargaan untuk kostum terbaik, penampilan paling kreatif, dan yel-yel termeriah, yang disambut dengan antusiasme dari seluruh peserta dan penonton. Dengan penuh semangat kebersamaan dan cinta tanah air, karnaval peringatan kemerdekaan di SIT Ulil Albab ini sukses menghidupkan semangat perjuangan dalam setiap langkah yang diambil, menjadi momen yang tidak hanya meriah tetapi juga berkesan bagi semua yang hadir. "}
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
