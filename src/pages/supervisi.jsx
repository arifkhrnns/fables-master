import React from 'react';
import Carousel from '../components/Carousel.jsx';

export default function Page() {
  return <>
  <div className={"bg-blog-details fables-after-overlay "}>
    <div className={"container"}>
      <h2 className={"fables-page-title fables-second-border-color wow fadeInLeft"}>
        {" SUPERVISI UNTUK MENJAGA MUTU PEMBELAJARAN"}
      </h2>
    </div>
  </div>
  <div className={"container"}>
    <div className={"my-4 my-lg-5"}>
      <Carousel className={"owl-carousel owl-theme default-carousel absolute-dots inside-text-carousel nav-0 mr-4 mb-3"}>
        <div className={"image-container rotateOut-effect"}>
          <img src={"/assets/custom/images/supervisi/img3.png"} alt={"SUPERVISI UNTUK MENJAGA MUTU PEMBELAJARAN"} className={"w-100"} />
        </div>
        <div className={"image-container rotateOut-effect"}>
          <img src={"/assets/custom/images/supervisi/img1.png"} alt={"SUPERVISI UNTUK MENJAGA MUTU PEMBELAJARAN"} className={"w-100"} />
        </div>
        <div className={"image-container rotateOut-effect"}>
          <img src={"/assets/custom/images/supervisi/img2.png"} alt={"SUPERVISI UNTUK MENJAGA MUTU PEMBELAJARAN"} className={"w-100"} />
        </div>
        <div className={"image-container rotateOut-effect"}>
          <img src={"/assets/custom/images/supervisi/img4.png"} alt={"SUPERVISI UNTUK MENJAGA MUTU PEMBELAJARAN"} className={"w-100"} />
        </div>
      </Carousel>
      <h1 className={"fables-second-text-color font-30 semi-font my-3 mt-md-0"}>
        {"Supervisi Untuk Menjaga Mutu Pembelajaran"}
      </h1>
      <p className={"fables-forth-text-color font-14"}>
        {" Sebagai lembaga pendidikan yang menerapkan metode UMMI dalam pembelajaran Al Qur'an, maka SIT Ulil Albab terus berkoordinasi dengan pengurus UMMI Bekasi Raya. Diantaranya adalah kegiatan supervisi rutin yang dilakukan setiap semester 1 kali. "}
        <br />
        {" Pada semester ganjil tahun pelajaran 2024-2025, supervisi dilaksanakan pada tanggal 9 September 2024. Hal itu dilakukan dalam rangka menjaga mutu pembelajaran Al Qur'an metode UMMI agar sesuai dengan standar yang ditetapkan oleh pihak UMMI Foundation. "}
        <br />
        {" Beberapa hal yang dilakukan dalam proses supervisi adalah melakukan observasi pembelajaran yang dilakukan oleh guru Qur'an di lingkungan SIT Ulil Albab, yang meliputi pelaksanaan 7 tahapan pembelajaran metode UMMI, kualifikasi guru, rasio jumlah siswa, tempat yang memadai dan lain sebagainya. "}
        <br />
        {" Hadir dalam supervisi kali, 2 trainer UMMI Bekasi Raya ,yaitu Ustadz Hasyim Asy'ari dan Ustadz Muhammad Ismail. "}
        <br />
        {" Dalam sesi penyampaian evaluasi, usradz Hasyim dan Ustadz Ismail menyampaikan bahwa secara umum, pembelajaran metode UMMI di SIT Ulil Albab telah berjalan sesuai standar metode UMMI, meskipun terdapat hal-hal yang harus ditingkatkan. "}
        <br />
        {" Beliau menyatakan, jika SIT Ulil Albab komitmen dan konsisten dalam penerapan metode UMMI, maka SIT Ulil Albab layak untuk menjadi lembaga model dalam pembelajaran metode UMMI. "}
        <br />
        {" Dalam sesi penutup, Kepala Unit Bina Qur'an SIT Ulil Albab, Winarto, menyatakan bahwa kegiatan supervisi ini penting dalam rangka menjaga kualitas pembelajaran dengan harapan ketika kualitas pembelajaran metode UMMI terjaga dengan baik, maka akan dapat menghasilkan kualitas baccaan siswa yang baik pula. Dan tentunya itulah hal utama yang ingin di capai. "}
        <br />
        {" Acara evaluasi diakhiri dengan sesi foto bersama. "}
      </p>
    </div>
  </div>
  </>;
}
