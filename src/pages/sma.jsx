import React from 'react';
import LightboxLink from '../components/LightboxLink.jsx';
import Carousel from '../components/Carousel.jsx';

// Restored from ee33d1f1318478236ed4b657d5c50989abaa62e8:sma.html; shared navigation/contact remains React.
export default function Page() {
  return <div className="unit-page">
    <h1 className={"sr-only"}>
      {"SMAIT Ulil Albab"}
    </h1>
    <LightboxLink className="unit-banner-link" href={"/assets/custom/images/sma/banner.jpg"} title="Banner SMAIT Ulil Albab">
      <div style={{"position":"relative","width":"100%","overflow":"hidden","cursor":"pointer"}}>        <img src={"/assets/custom/images/sma/banner.jpg"} alt={"Banner SMAIT Ulil Albab"} style={{"width":"100%","height":"auto","display":"block"}} />
        <div style={{"position":"absolute","bottom":"15px","right":"20px","background":"rgba(0,0,0,0.5)","padding":"6px 14px","borderRadius":"4px","color":"#fff","fontSize":"14px","fontWeight":"600","fontFamily":"Arial, sans-serif"}}>
          {" SMAIT ULIL ALBAB "}
        </div>
      </div>
    </LightboxLink>
    <div className={"container my-5"}>
      <div className={"row align-items-center"}>
        <div className={"col-12 col-lg-6 d-flex flex-column align-items-center mb-4 mb-lg-0"}>
          <img src={"/assets/custom/images/sma/kepsek.png"} alt={"Kepala Sekolah SMAIT Ulil Albab"} className={"img-fluid"} style={{"maxWidth":"50%","height":"auto"}} />
          <div className={"text-center mt-3"}>
            <h4 className={"font-weight-bold fables-second-text-color mb-1"}>
              {"Nur Alifiyanti, S.Pd., M.Pd."}
            </h4>
            <p className={"font-14 text-muted"} style={{"fontStyle":"italic"}}>
              {"Kepala Sekolah SMAIT Ulil Albab"}
            </p>
          </div>
        </div>
        <div className={"col-12 col-lg-6"}>
          <h2 className={"font-30 semi-font fables-second-text-color mb-3"}>
            {"Tentang SMAIT Ulil Albab"}
          </h2>
          <p className={"font-15 fables-fifth-text-color text-justify mb-3"}>
            {" SMAIT Ulil Albab berkomitmen memberikan pendidikan berbasis Al-Quran yang dipadukan dengan kurikulum nasional dan internasional. Kami berfokus pada pembentukan karakter islami, kecerdasan intelektual, dan kepemimpinan. "}
          </p>
          <p className={"font-15 fables-fifth-text-color text-justify"}>
            {" Dengan tenaga pengajar yang berpengalaman, fasilitas modern, dan lingkungan yang mendukung, SMAIT Ulil Albab menjadi pilihan tepat untuk menyiapkan siswa menghadapi masa depan dan melanjutkan ke perguruan tinggi terbaik. "}
          </p>
        </div>
      </div>
    </div>
    <div className={"fables-alumni-section py-5 bg-light"}>
      <div className={"container"}>
        <h2 className={"font-30 semi-font fables-second-text-color text-center mb-4"}>
          {" Alumni SMAIT Ulil Albab Diterima di PTN Ternama "}
        </h2>
        <p className={"text-center font-15 fables-fifth-text-color mb-5"}>
          {" Dengan izin Allah dan usaha sungguh-sungguh, alumni SMAIT Ulil Albab telah diterima di berbagai Perguruan Tinggi Negeri favorit di Indonesia. "}
        </p>
        <Carousel className={"alumni-carousel"} interval={2500} label="Alumni SMAIT Ulil Albab">
          <div className={"item"}>
            <img src={"/assets/custom/images/sma/unsika.png"} alt={"Universitas Indonesia"} className={"alumni-logo mx-auto"} />
            <p className={"mt-2 font-weight-bold"}>
              {"Universitas Singaperbangsa Karawang"}
            </p>
          </div>
          <div className={"item"}>
            <img src={"/assets/custom/images/sma/unsika.png"} alt={"Universitas Gadjah Mada"} className={"alumni-logo mx-auto"} />
            <p className={"mt-2 font-weight-bold"}>
              {"UGM"}
            </p>
          </div>
          <div className={"item"}>
            <img src={"/assets/custom/images/sma/unsika.png"} alt={"Institut Teknologi Bandung"} className={"alumni-logo mx-auto"} />
            <p className={"mt-2 font-weight-bold"}>
              {"ITB"}
            </p>
          </div>
          <div className={"item"}>
            <img src={"/assets/custom/images/sma/unsika.png"} alt={"Institut Pertanian Bogor"} className={"alumni-logo mx-auto"} />
            <p className={"mt-2 font-weight-bold"}>
              {"IPB"}
            </p>
          </div>
          <div className={"item"}>
            <img src={"/assets/custom/images/sma/unsika.png"} alt={"UIN Jakarta"} className={"alumni-logo mx-auto"} />
            <p className={"mt-2 font-weight-bold"}>
              {"UIN Jakarta"}
            </p>
          </div>
          <div className={"item"}>
            <img src={"/assets/custom/images/sma/unsika.png"} alt={"Universitas Negeri Jakarta"} className={"alumni-logo mx-auto"} />
            <p className={"mt-2 font-weight-bold"}>
              {"UNJ"}
            </p>
          </div>
        </Carousel>
      </div>
    </div>
  </div>;
}
