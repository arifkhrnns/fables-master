import React from 'react';
import Carousel from '../../components/Carousel.jsx';
import InstagramEmbed from '../../components/InstagramEmbed.jsx';

export default function Page() {
  return <>
  <div className={"bg-blog-details fables-after-overlay "}>
    <div className={"container"}>
      <h2 className={"fables-page-title fables-second-border-color wow fadeInLeft"}>
        {" Asesmen Nasional Berbasis Komputer (ANBK), Mengukur Mutu Sekolah"}
      </h2>
    </div>
  </div>
  <div className={"container"}>
    <div className={"my-4 my-lg-5"}>
      <Carousel className={"owl-carousel owl-theme default-carousel absolute-dots inside-text-carousel nav-0 mr-4 mb-3"}>
        <div className={"image-container rotateOut-effect"}>
          <img src={"/assets/custom/images/anbk/img1.png"} alt={"Asesmen Nasional Berbasis Komputer (ANBK), Mengukur Mutu Sekolah"} className={"w-100"} />
        </div>
        <div className={"image-container rotateOut-effect"}>
          <img src={"/assets/custom/images/anbk/img2.png"} alt={"Asesmen Nasional Berbasis Komputer (ANBK), Mengukur Mutu Sekolah"} className={"w-100"} />
        </div>
        <div className={"image-container rotateOut-effect"}>
          <img src={"/assets/custom/images/anbk/img3.png"} alt={"Asesmen Nasional Berbasis Komputer (ANBK), Mengukur Mutu Sekolah"} className={"w-100"} />
        </div>
        <div className={"image-container rotateOut-effect"}>
          <img src={"/assets/custom/images/anbk/img4.png"} alt={"Asesmen Nasional Berbasis Komputer (ANBK), Mengukur Mutu Sekolah"} className={"w-100"} />
        </div>
      </Carousel>
      <h1 className={"fables-second-text-color font-30 semi-font my-3 mt-md-0"}>
        {"Asesmen Nasional Berbasis Komputer (ANBK), Mengukur Mutu Sekolah "}
      </h1>
      <p className={"fables-forth-text-color font-14"}>
        {" Dahulu, kita mengenal istilah Ujian Nasional (UN) yaitu ujian tertulis bagi siswa-siswi tingkat akhir setiap jenjang Pendidikan, mulai dari SD, SMP, SMA dan sederajat. Ujian Nasional menjadi sarana mengukur ketercapaian pembelajaran siswa yang berlaku secara nasional. Namun dikarenakan adanya kesenjangan hasil nilai Ujian Nasional, hal tersebut kemudian menjadi salah satu alasan Ujian Nasional dievaluasi. "}
        <br />
        {" Tindak lanjut dari evaluasi terhadap pelaksanaan Ujian Nasional, maka mulai tahun 2021 diberlakukan Asesmen Nasional. ANBK atau singkatan dari Asesmen Nasional Berbasis Komputer sejatinya adalah program evaluasi yang diselenggarakan oleh Kementerian Pendidikan Kebudayaan, Riset, dan Teknologi (Kemdikbudristek) sebagai pengganti ujian nasional. Program ini diikuti oleh siswa SD kelas 5, siswa SMP kelas 8, dan siswa SMA, SMK kelas 11 sederajat dan bertujuan meningkatkan mutu pendidikan. Caranya adalah dengan memotret input, proses dan output pembelajaran pada seluruh satuan pendidikan. ANBK dilaksanakan dengan 3 instrumen, sebagai bagian dari evaluasi pemerintah meningkatkan kualitas pendidikan di Indonesia, yaitu: 1. Asesmen Kompetensi Minimum (AKM) yang mengukur literasi membaca dan literasi matematika (numerasi) murid, 2. Survei Karakter yang mengukur sikap, nilai, keyakinan, dan kebiasaan yang mencerminkan karakter murid, 3. Survei Lingkungan Belajar yang mengukur kualitas berbagai aspek input dan proses belajar-mengajar di kelas maupun di tingkat satuan pendidikan. "}
        <br />
        {" ANBK di SMPIT Ulil Albab dilaksanakan pada gelombang 1 tgl 9-10 September 2024 bertempat di SMPIT ULIL Albab. Assessment Nasional Berbasis Komputer di SMPIT ULIL ALBAB dilaksanakan di laboratorium komputer milik pribadi (sekolah) dengan sistem semi on-line yang diikuti oleh sejumlah siswa kelas 8 yang terpilih dari dapodik. ANBK 2024 memiliki beberapa tujuan utama yang diharapkan dapat tercapai, salah satunya Evaluasi Mutu Pendidikan memberikan gambaran yang lebih menyeluruh mengenai kualitas pendidikan di setiap satuan pendidikan, sehingga dapat diketahui sejauh mana pencapaian pembelajaran siswa. Hasil dari Asesmen ini menjadi bahan evaluasi bagi sekolah yang kemudian melakukan rencana tindak lanjut sebagai bentuk perbaikan mutu sekolah. SMPIT Ulil Albab, Be Smart and Religious. "}
        <br />
        {" (smpit-UA) "}
      </p>
    </div>
    <div className={"row mx-sm-0 mb-4 mb-md-0"}>
      <div className={"col-12 col-sm-4 p-sm-0 mb-4 mb-sm-0 wow fadeIn"}>
        <div className={"position-relative image-container rotateOut-effect"}>
          <InstagramEmbed url={"https://www.instagram.com/reel/C_ubAg4S9t_/?utm_source=ig_embed&utm_campaign=loading"} />
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
