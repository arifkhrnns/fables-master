import React from 'react';
import Carousel from '../../components/Carousel.jsx';
import InstagramEmbed from '../../components/InstagramEmbed.jsx';

export default function Page() {
  return <>
  <div className={"bg-blog-details fables-after-overlay "}>
    <div className={"container"}>
      <h2 className={"fables-page-title fables-second-border-color wow fadeInLeft"}>
        {" Rapat Kerja Tahunan SIT Ulil Albab 2025"}
      </h2>
    </div>
  </div>
  <div className={"container"}>
    <div className={"my-4 my-lg-5"}>
        <Carousel className={"restored-article-gallery"}>
          <div className={"image-container rotateOut-effect"}>
            <a href={"#"}>
              <img src={"/assets/custom/images/raker/1 (1).JPG"} alt={"Dokumentasi kegiatan SIT Ulil Albab"} className={"w-100"} />
            </a>
          </div>
          <div className={"image-container rotateOut-effect"}>
            <a href={"#"}>
              <img src={"/assets/custom/images/raker/1 (2).JPG"} alt={"Dokumentasi kegiatan SIT Ulil Albab"} className={"w-100"} />
            </a>
          </div>
          <div className={"image-container rotateOut-effect"}>
            <a href={"#"}>
              <img src={"/assets/custom/images/raker/1 (3).JPG"} alt={"Dokumentasi kegiatan SIT Ulil Albab"} className={"w-100"} />
            </a>
          </div>
          <div className={"image-container rotateOut-effect"}>
            <a href={"#"}>
              <img src={"/assets/custom/images/raker/1 (4).JPG"} alt={"Dokumentasi kegiatan SIT Ulil Albab"} className={"w-100"} />
            </a>
          </div>
          <div className={"image-container rotateOut-effect"}>
            <a href={"#"}>
              <img src={"/assets/custom/images/raker/1 (5).JPG"} alt={"Dokumentasi kegiatan SIT Ulil Albab"} className={"w-100"} />
            </a>
          </div>
          <div className={"image-container rotateOut-effect"}>
            <a href={"#"}>
              <img src={"/assets/custom/images/raker/1 (6).JPG"} alt={"Dokumentasi kegiatan SIT Ulil Albab"} className={"w-100"} />
            </a>
          </div>
          <div className={"image-container rotateOut-effect"}>
            <a href={"#"}>
              <img src={"/assets/custom/images/raker/1 (7).jpg"} alt={"Dokumentasi kegiatan SIT Ulil Albab"} className={"w-100"} />
            </a>
          </div>
        </Carousel>

      <h1 className={"fables-second-text-color font-30 semi-font my-3 mt-md-0"}>
        {"Rapat Kerja Tahunan SIT Ulil Albab 2025: Menyusun Strategi untuk Pendidikan Unggul "}
      </h1>
      <p className={"fables-forth-text-color font-14"}>
        {" Ulil Albab, 2025 – SIT Ulil Albab menggelar Rapat Kerja Tahunan yang menjadi momentum penting dalam menyusun strategi terbaik untuk mewujudkan visi dan misi pendidikan yang unggul. Kegiatan yang berlangsung penuh semangat ini dihadiri oleh seluruh tim pengelola dan tenaga pendidik di SIT Ulil Albab. Dalam rapat ini, berbagai agenda penting dibahas, mulai dari evaluasi program-program yang telah dijalankan hingga perencanaan langkah-langkah strategis untuk menghadapi tantangan pendidikan di masa depan. Dengan tujuan memperkuat kualitas pendidikan dan meningkatkan pelayanan kepada siswa, rapat ini menjadi wadah untuk memperkuat sinergi di antara seluruh pihak yang terlibat. SIT Ulil Albab menyadari bahwa pendidikan yang berkualitas bukan hanya bertumpu pada kurikulum, tetapi juga pada komitmen dan kerja sama seluruh tim. Oleh karena itu, melalui Rapat Kerja ini, setiap langkah yang dirancang akan semakin mengarah pada pencapaian pendidikan yang berorientasi pada kualitas dan keberkahan. \"Kerja sama yang solid antara semua pihak menjadi kunci untuk memberikan pelayanan pendidikan terbaik bagi generasi penerus bangsa,\" ujar Kepala Yayasan SIT Ulil Albab. Kami mengucapkan terima kasih atas doa dan dukungan yang telah diberikan oleh semua pihak. Dengan semangat kebersamaan dan optimisme yang tinggi, SIT Ulil Albab siap melangkah maju mewujudkan pendidikan yang unggul dan berkualitas. "}
      </p>
    </div>
    <div className={"row mx-sm-0 mb-4 mb-md-0"}>
      <div className={"col-12 col-sm-4 p-sm-0 mb-4 mb-sm-0 wow fadeIn"}>
        <div className={"position-relative image-container rotateOut-effect"}>
          <InstagramEmbed url={"https://www.instagram.com/reel/DEY6FFYz2Yp/?utm_source=ig_embed&utm_campaign=loading"} />
        </div>
      </div>
      <div className={"col-12 col-md-6 col-lg-4 wow fadeInLeft"}>
                <div className={"news-card"} style={{"width":"100%","maxWidth":"300px","margin":"auto","textAlign":"center","padding":"20px","borderRadius":"10px","background":"linear-gradient(135deg, #6b73ff, #000dff)","boxShadow":"0 4px 10px rgba(0, 0, 0, 0.2)","animation":"fadeInUp 1s"}}>
          <div className={"news-card-content"}>
            <p style={{"color":"#fff","fontStyle":"italic","fontFamily":"'Arial', sans-serif","fontSize":"16px","margin":"10px 0"}}>
              {" Jelajahi lebih banyak dokumentasi kami di sini: "}
            </p>
            <a href={"https://drive.google.com/drive/folders/1HZiXAzUKnBIucARB5KrFGG-gIiI7R8N-?usp=sharing"} target={"_blank"} style={{"display":"inline-block","textDecoration":"none","backgroundColor":"#fff","color":"#000dff","fontSize":"14px","fontWeight":"bold","padding":"10px 20px","borderRadius":"5px","transition":"background-color 0.3s"}} rel={"noopener noreferrer"}>
              {" DOKUMENTASI "}
            </a>
          </div>
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
