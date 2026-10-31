import React from 'react';
import DocumentationLink from '../../components/DocumentationLink.jsx';
import Carousel from '../../components/Carousel.jsx';
import InstagramEmbed from '../../components/InstagramEmbed.jsx';

export default function Page() {
  return <>
  <div className={"bg-blog-details fables-after-overlay "}>
    <div className={"container"}>
      <h2 className={"fables-page-title fables-second-border-color wow fadeInLeft"}>
        {" Quran Leadership Camp 2024"}
      </h2>
    </div>
  </div>
  <div className={"container"}>
    <div className={"my-4 my-lg-5"}>
      <Carousel className={"owl-carousel owl-theme default-carousel absolute-dots inside-text-carousel nav-0 mr-4 mb-3"}>
        <div className={"image-container rotateOut-effect"}>
          <a href={"#"}>
            <img src={"/assets/custom/images/qlc/1 (1).jpg"} alt={"Quran Leadership Camp 2024"} className={"w-100"} />
          </a>
        </div>
        <div className={"image-container rotateOut-effect"}>
          <a href={"#"}>
            <img src={"/assets/custom/images/qlc/1 (2).jpg"} alt={"Quran Leadership Camp 2024"} className={"w-100"} />
          </a>
        </div>
        <div className={"image-container rotateOut-effect"}>
          <a href={"#"}>
            <img src={"/assets/custom/images/qlc/1 (3).jpg"} alt={"Quran Leadership Camp 2024"} className={"w-100"} />
          </a>
        </div>
        <div className={"image-container rotateOut-effect"}>
          <a href={"#"}>
            <img src={"/assets/custom/images/qlc/1 (4).jpg"} alt={"Quran Leadership Camp 2024"} className={"w-100"} />
          </a>
        </div>
        <div className={"image-container rotateOut-effect"}>
          <a href={"#"}>
            <img src={"/assets/custom/images/qlc/1 (5).jpg"} alt={"Quran Leadership Camp 2024"} className={"w-100"} />
          </a>
        </div>
        <div className={"image-container rotateOut-effect"}>
          <a href={"#"}>
            <img src={"/assets/custom/images/qlc/1 (6).jpg"} alt={"Quran Leadership Camp 2024"} className={"w-100"} />
          </a>
        </div>
        <div className={"image-container rotateOut-effect"}>
          <a href={"#"}>
            <img src={"/assets/custom/images/qlc/1 (7).jpg"} alt={"Quran Leadership Camp 2024"} className={"w-100"} />
          </a>
        </div>
        <div className={"image-container rotateOut-effect"}>
          <a href={"#"}>
            <img src={"/assets/custom/images/qlc/1 (8).jpg"} alt={"Quran Leadership Camp 2024"} className={"w-100"} />
          </a>
        </div>
        <div className={"image-container rotateOut-effect"}>
          <a href={"#"}>
            <img src={"/assets/custom/images/qlc/1 (9).jpg"} alt={"Quran Leadership Camp 2024"} className={"w-100"} />
          </a>
        </div>
        <div className={"image-container rotateOut-effect"}>
          <a href={"#"}>
            <img src={"/assets/custom/images/qlc/1 (10).jpg"} alt={"Quran Leadership Camp 2024"} className={"w-100"} />
          </a>
        </div>
        <div className={"image-container rotateOut-effect"}>
          <a href={"#"}>
            <img src={"/assets/custom/images/qlc/1 (11).jpg"} alt={"Quran Leadership Camp 2024"} className={"w-100"} />
          </a>
        </div>
      </Carousel>
      <h1 className={"fables-second-text-color font-30 semi-font my-3 mt-md-0"}>
        {"Quran Leadership Camp 2024 "}
      </h1>
      <p className={"fables-forth-text-color font-14"}>
        {" Subang, 5-7 November 2024 – SMPIT Ulil Albab kembali mengadakan kegiatan Quran Leadership Camp (QLC) sebagai bagian dari program pembentukan karakter islami dan kepemimpinan siswa. Acara yang berlangsung selama tiga hari ini bertempat di kawasan alam Legok Gintung, Subang, yang menawarkan suasana sejuk dan kondusif untuk pembelajaran serta refleksi spiritual. Kegiatan ini diikuti oleh seluruh siswa SMPIT dengan semangat dan antusiasme tinggi. Selama camp, siswa diberikan berbagai pembekalan yang mencakup nilai-nilai kepemimpinan berbasis Al-Qur’an, penguatan hafalan ayat-ayat suci, serta pelatihan keterampilan kepemimpinan melalui simulasi dan kerja tim. Berbagai aktivitas outdoor seperti hiking, diskusi kelompok, serta agenda malam keakraban semakin mempererat hubungan antar peserta sekaligus menanamkan rasa tanggung jawab dan solidaritas. Momen ini juga menjadi ajang untuk melatih kemandirian siswa dalam menghadapi tantangan sehari-hari. Adapula sesi tahajud berjamaah dan khataman Al-Qur’an di malam terakhir, di mana siswa bersama para guru mendekatkan diri kepada Allah SWT, memohon petunjuk untuk menjadi pemimpin masa depan yang bertakwa dan berintegritas. Melalui Quran Leadership Camp, SMPIT Ulil Albab berharap dapat membentuk generasi muda yang tidak hanya cerdas secara akademis, tetapi juga memiliki jiwa kepemimpinan yang kuat serta berakar pada nilai-nilai Al-Qur’an. "}
      </p>
    </div>
    <div className={"row mx-sm-0 mb-4 mb-md-0"}>
      <div className={"col-12 col-sm-4 p-sm-0 mb-4 mb-sm-0 wow fadeIn"}>
        <div className={"position-relative image-container rotateOut-effect"}>
          <InstagramEmbed url={"https://www.instagram.com/reel/DCyCb_BTXLE/?utm_source=ig_embed&utm_campaign=loading"} />
        </div>
      </div>
      <div className={"col-12 col-md-6 col-lg-4 wow fadeInLeft"}>
        <DocumentationLink href={"https://drive.google.com/drive/folders/1qDorUZqq3rWdYLly-muE8E_ETtn9_IhP"} />
      </div>
    </div>
  </div>
  <div className={"button-container"}>
    <a href={"/blog-cat-masonry.html"} className={"btn"}>
      {"UA News"}
    </a>
  </div>
  </>;
}
