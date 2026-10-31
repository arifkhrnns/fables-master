import React from 'react';
import InstagramEmbed from '../../components/InstagramEmbed.jsx';

export default function Page() {
  return <>
  <div className={"bg-blog-details fables-after-overlay "}>
    <div className={"container"}>
      <h2 className={"fables-page-title fables-second-border-color wow fadeInLeft"}>
        {" Pemberian TTD REMATRI dan Cek HB Bersama Puskesmas Wanasari"}
      </h2>
    </div>
  </div>
  <div className={"container"}>
    <div className={"my-4 my-lg-5"}>
      <h1 className={"fables-second-text-color font-30 semi-font my-3 mt-md-0"}>
        {"Safari Sosial SMPIT Ulil Albab di Yayasan Al Fajar Berseri, Tambun Selatan "}
      </h1>
      <p className={"fables-forth-text-color font-14"}>
        {" Bekasi, 30 September 2024 – Dalam rangka meningkatkan kesehatan remaja putri, SMPIT Ulil Albab bekerja sama dengan Puskesmas Wanasari menyelenggarakan kegiatan pemberian Tablet Tambah Darah (TTD) dan cek hemoglobin (Hb). Acara ini bertujuan untuk mendukung program kesehatan pemerintah dalam mencegah anemia pada remaja putri. Kegiatan yang berlangsung di aula SMPIT Ulil Albab ini diikuti oleh seluruh siswi dengan antusias. Dalam acara tersebut, tim medis dari Puskesmas Wanasari memberikan edukasi tentang pentingnya menjaga kadar hemoglobin agar tubuh tetap sehat dan bugar, terutama bagi remaja yang sedang dalam masa pertumbuhan. Selain pemberian tablet tambah darah, para siswi juga menjalani pemeriksaan hemoglobin untuk memastikan kesehatan mereka. Hasil pemeriksaan ini diharapkan menjadi motivasi bagi para siswa untuk menerapkan gaya hidup sehat, seperti mengonsumsi makanan bergizi dan rutin berolahraga. Kepala SMPIT Ulil Albab menyampaikan apresiasi atas dukungan Puskesmas Wanasari dalam kegiatan ini. “Kami sangat bersyukur bisa berkolaborasi untuk mendukung kesehatan siswa, karena generasi sehat adalah kunci masa depan bangsa,” ujar beliau. Kegiatan ini diharapkan dapat memberikan dampak positif dalam menjaga kesehatan remaja putri serta meningkatkan kesadaran pentingnya pola hidup sehat di kalangan pelajar. "}
      </p>
    </div>
    <div className={"row mx-sm-0 mb-4 mb-md-0"}>
      <div className={"col-12 col-sm-4 p-sm-0 mb-4 mb-sm-0 wow fadeIn"}>
        <div className={"position-relative image-container rotateOut-effect"}>
          <InstagramEmbed url={"https://www.instagram.com/reel/DAiQAKHyfCU/?utm_source=ig_embed&utm_campaign=loading"} />
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
