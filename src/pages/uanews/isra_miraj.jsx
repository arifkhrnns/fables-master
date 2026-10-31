import React from 'react';
import InstagramEmbed from '../../components/InstagramEmbed.jsx';

// Restored from ee33d1f1318478236ed4b657d5c50989abaa62e8:uanews/isra_miraj.html; shared navigation/contact remains React.
export default function Page() {
  return <>
    <div className={"bg-blog-details fables-after-overlay"}>
      <div className={"container"}>
        <h2 className={"fables-page-title fables-second-border-color wow fadeInLeft"}>
          {" Peringatan Isra Miraj 2025 "}
        </h2>
      </div>
    </div>
    <div className={"container"}>
      <div className={"my-4 my-lg-5"}>
        <h1 className={"fables-second-text-color font-30 semi-font my-3 mt-md-0"}>
          {" SMPIT Ulil Albab Gelar Peringatan Isra Miraj 2025 dengan Berbagai Lomba Islami "}
        </h1>
        <p className={"fables-forth-text-color font-14"}>
          {" Dalam rangka memperingati Isra Miraj Nabi Muhammad SAW, SMPIT Ulil Albab menyelenggarakan berbagai kegiatan islami yang melibatkan seluruh siswa. Acara ini berlangsung di lingkungan sekolah dengan tujuan menanamkan nilai-nilai keislaman dan meneladani akhlak Rasulullah SAW. Kegiatan ini diisi dengan berbagai perlombaan, antara lain lomba membaca Al-Quran, yang bertujuan untuk meningkatkan keterampilan tilawah dengan tartil dan tajwid yang benar, serta lomba hafalan Al-Quran, yang mendorong siswa untuk lebih memahami dan menghafal ayat-ayat suci. Selain itu, ada juga lomba adzan, yang memberikan kesempatan bagi siswa untuk melatih keterampilan dalam mengumandangkan panggilan ibadah, serta fashion show tokoh Muslim, yang menampilkan busana khas dari tokoh-tokoh Islam yang menginspirasi. Kepala sekolah SMPIT Ulil Albab menyampaikan bahwa kegiatan ini mengapa diadakan sebagai sarana edukasi yang tidak hanya mengasah kemampuan siswa dalam bidang keagamaan, tetapi juga memperkuat karakter dan kecintaan mereka terhadap ajaran Islam. Dalam pelaksanaannya, acara ini mendapat dukungan penuh dari para siapa guru, panitia, serta orang tua siswa yang turut berperan dalam keberhasilannya. Dengan bagaimana suasana yang penuh semangat dan antusiasme, kegiatan ini berjalan dengan lancar dan sukses. Melalui peringatan Isra Miraj ini, diharapkan para siswa dapat terus termotivasi untuk mengamalkan nilai-nilai Islam dalam kehidupan sehari-hari serta tumbuh menjadi generasi yang beriman, berprestasi, dan berakhlak mulia. "}
        </p>
      </div>
      <div className={"row mx-sm-0 mb-4 mb-md-0"}>
        <div className={"col-12 col-sm-4 p-sm-0 mb-4 mb-sm-0 wow fadeIn"}>
          <div className={"position-relative image-container rotateOut-effect"}>
            <InstagramEmbed url={"https://www.instagram.com/reel/DFhAj_fTVtP/?utm_source=ig_embed&utm_campaign=loading"} />
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
