import React from 'react';
import InstagramEmbed from '../../components/InstagramEmbed.jsx';

// Restored from ee33d1f1318478236ed4b657d5c50989abaa62e8:uanews/seminar_karil.html; shared navigation/contact remains React.
export default function Page() {
  return <>
    <div className={"bg-blog-details fables-after-overlay"}>
      <div className={"container"}>
        <h2 className={"fables-page-title fables-second-border-color wow fadeInLeft"}>
          {" Seminar Hasil Karya Ilmiah "}
        </h2>
      </div>
    </div>
    <div className={"container"}>
      <div className={"my-4 my-lg-5"}>
        <h1 className={"fables-second-text-color font-30 semi-font my-3 mt-md-0"}>
          {" Siswa Kelas 12 SMAIT Ulil Albab Gelar Seminar Hasil Karya Ilmiah "}
        </h1>
        <p className={"fables-forth-text-color font-14"}>
          {" SMAIT ULIL ALBAB-Siswa-siswi kelas 12 SMAIT Ulil Albab menunjukkan kreativitas, inovasi, dan semangat belajar yang luar biasa dalam Seminar Hasil Karya Ilmiah yang digelar hari ini. Kegiatan ini menjadi ajang bagi para siswa untuk mempresentasikan hasil penelitian mereka sebagai bentuk kontribusi nyata terhadap ilmu pengetahuan dan pemecahan berbagai permasalahan. Berbagai topik penelitian yang inovatif dan solutif ditampilkan dalam seminar ini, mencerminkan kerja keras serta dedikasi para siswa dalam mengembangkan wawasan akademik mereka. Dari riset ilmiah hingga gagasan kreatif untuk menjawab tantangan masa kini, setiap karya ilmiah yang dipresentasikan menjadi bukti bahwa generasi muda memiliki potensi besar dalam menciptakan perubahan. \"Ilmu adalah lentera kehidupan, dan penelitian adalah jalannya,\" menjadi prinsip yang dipegang teguh oleh para peserta seminar dalam menggali dan mengembangkan pengetahuan mereka. Acara ini tidak hanya menjadi momen penting bagi para siswa untuk menunjukkan kemampuan berpikir kritis dan analitis, tetapi juga sebagai bentuk apresiasi terhadap peran guru pembimbing, orang tua, serta seluruh pihak yang telah mendukung proses pembelajaran mereka. SMAIT Ulil Albab berharap melalui kegiatan ini, semangat meneliti dan berinovasi terus tumbuh di kalangan siswa, membentuk mereka menjadi generasi unggul yang siap berkarya dan berkontribusi bagi masa depan. "}
        </p>
      </div>
      <div className={"row mx-sm-0 mb-4 mb-md-0"}>
        <div className={"col-12 col-sm-4 p-sm-0 mb-4 mb-sm-0 wow fadeIn"}>
          <div className={"position-relative image-container rotateOut-effect"}>
            <InstagramEmbed url={"https://www.instagram.com/reel/DFcU0lgz_ME/?utm_source=ig_embed&utm_campaign=loading"} />
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
