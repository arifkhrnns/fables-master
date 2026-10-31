import React from 'react';
import Carousel from '../../components/Carousel.jsx';
import InstagramEmbed from '../../components/InstagramEmbed.jsx';

export default function Page() {
  return <>
  <div className={"bg-blog-details fables-after-overlay "}>
    <div className={"container"}>
      <h2 className={"fables-page-title fables-second-border-color wow fadeInLeft"}>
        {" Market Day SDIT Al-Qur'an Ulil Albab"}
      </h2>
    </div>
  </div>
  <div className={"container"}>
    <div className={"my-4 my-lg-5"}>
        <Carousel className={"restored-article-gallery"}>
          <div className={"image-container rotateOut-effect"}>
            <a href={"#"}>
              <img src={"/assets/custom/images/marketday/1 (1).JPG"} alt={"Dokumentasi kegiatan SIT Ulil Albab"} className={"w-100"} />
            </a>
          </div>
          <div className={"image-container rotateOut-effect"}>
            <a href={"#"}>
              <img src={"/assets/custom/images/marketday/1 (2).JPG"} alt={"Dokumentasi kegiatan SIT Ulil Albab"} className={"w-100"} />
            </a>
          </div>
          <div className={"image-container rotateOut-effect"}>
            <a href={"#"}>
              <img src={"/assets/custom/images/marketday/1 (3).JPG"} alt={"Dokumentasi kegiatan SIT Ulil Albab"} className={"w-100"} />
            </a>
          </div>
          <div className={"image-container rotateOut-effect"}>
            <a href={"#"}>
              <img src={"/assets/custom/images/marketday/1 (4).JPG"} alt={"Dokumentasi kegiatan SIT Ulil Albab"} className={"w-100"} />
            </a>
          </div>
          <div className={"image-container rotateOut-effect"}>
            <a href={"#"}>
              <img src={"/assets/custom/images/marketday/1 (5).JPG"} alt={"Dokumentasi kegiatan SIT Ulil Albab"} className={"w-100"} />
            </a>
          </div>
          <div className={"image-container rotateOut-effect"}>
            <a href={"#"}>
              <img src={"/assets/custom/images/marketday/1 (6).JPG"} alt={"Dokumentasi kegiatan SIT Ulil Albab"} className={"w-100"} />
            </a>
          </div>
          <div className={"image-container rotateOut-effect"}>
            <a href={"#"}>
              <img src={"/assets/custom/images/marketday/1 (7).JPG"} alt={"Dokumentasi kegiatan SIT Ulil Albab"} className={"w-100"} />
            </a>
          </div>
        </Carousel>

      <h1 className={"fables-second-text-color font-30 semi-font my-3 mt-md-0"}>
        {"Market Day SDIT Al-Qur'an Ulil Albab "}
      </h1>
      <p className={"fables-forth-text-color font-14"}>
        {" Ulil Albab, 2024 – Market Day SDIT Al-Qur'an Ulil Albab kali ini berlangsung dengan penuh semangat dan keceriaan, menjadi salah satu momen berharga dalam kalender kegiatan sekolah. Acara ini sukses memfasilitasi siswa-siswi untuk mengaplikasikan keterampilan wirausaha yang telah mereka pelajari dengan penuh antusiasme. Para peserta, didampingi oleh bapak/ibu guru serta orang tua yang mendukung, menjual berbagai produk kreatif yang mereka buat sendiri. Dari jajanan lezat hingga aneka makanan khas, setiap produk menjadi bukti nyata dari pembelajaran yang menyenangkan tentang bagaimana cara menjalankan usaha kecil. Kegiatan ini tidak hanya mengasah keterampilan wirausaha, tetapi juga melatih tanggung jawab, kreativitas, dan kerjasama anak-anak. Market Day ini tidak hanya menjadi ajang untuk berjualan, tetapi juga sebagai pengalaman berharga dalam mengembangkan keterampilan sosial dan kewirausahaan anak-anak. "}
      </p>
    </div>
    <div className={"row mx-sm-0 mb-4 mb-md-0"}>
      <div className={"col-12 col-sm-4 p-sm-0 mb-4 mb-sm-0 wow fadeIn"}>
        <div className={"position-relative image-container rotateOut-effect"}>
          <InstagramEmbed url={"https://www.instagram.com/reel/DDeCdfQTeVt/?utm_source=ig_embed&utm_campaign=loading"} />
        </div>
      </div>
      <div className={"col-12 col-md-6 col-lg-4 wow fadeInLeft"}>
                <div className={"news-card"} style={{"width":"100%","maxWidth":"300px","margin":"auto","textAlign":"center","padding":"20px","borderRadius":"10px","background":"linear-gradient(135deg, #6b73ff, #000dff)","boxShadow":"0 4px 10px rgba(0, 0, 0, 0.2)","animation":"fadeInUp 1s"}}>
          <div className={"news-card-content"}>
            <p style={{"color":"#fff","fontStyle":"italic","fontFamily":"'Arial', sans-serif","fontSize":"16px","margin":"10px 0"}}>
              {" Jelajahi lebih banyak dokumentasi kami di sini: "}
            </p>
            <a href={"https://drive.google.com/drive/u/0/folders/192FodVMoi2XF4VeghRUH4TmY6NpIagqF"} target={"_blank"} style={{"display":"inline-block","textDecoration":"none","backgroundColor":"#fff","color":"#000dff","fontSize":"14px","fontWeight":"bold","padding":"10px 20px","borderRadius":"5px","transition":"background-color 0.3s"}} rel={"noopener noreferrer"}>
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
