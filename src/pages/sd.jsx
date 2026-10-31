import React from 'react';


// Restored from ee33d1f1318478236ed4b657d5c50989abaa62e8:sd.html; shared navigation/contact remains React.
export default function Page() {
  return <div className="unit-page">
    <div style={{"backgroundImage":"url(\"/assets/custom/images/sd/bg.jpg\")","backgroundSize":"cover","backgroundPosition":"center","backgroundRepeat":"no-repeat","height":"100vh","width":"100%","display":"flex","flexDirection":"column","justifyContent":"center","alignItems":"center","textAlign":"center","fontFamily":"'Comic Neue', 'Comic Sans MS', cursive","position":"relative","overflow":"hidden"}}>
      <div style={{"position":"absolute","top":"0","left":"0","width":"100%","height":"100%","backgroundColor":"rgba(0,0,0,0.4)","zIndex":"1"}}>
      </div>
      <div style={{"position":"relative","zIndex":"2"}}>
        <h1 style={{"fontSize":"48px","fontWeight":"bold","color":"#FFEB3B","textShadow":"2px 2px 6px rgba(0,0,0,0.7)","marginBottom":"20px"}}>
          {" SDIT AL-QURAN ULIL ALBAB "}
        </h1>
        <p style={{"fontSize":"22px","color":"#fff","textShadow":"1px 1px 4px rgba(0,0,0,0.8)","maxWidth":"700px","margin":"0 auto"}}>
          {" Menjadi Pilar Pendidikan Berkualitas untuk Generasi Muda "}
        </p>
      </div>
    </div>
    <div className={"container my-5"}>
      <div className={"row align-items-center"}>
        <div className={"col-12 col-lg-6 d-flex flex-column align-items-center mb-4 mb-lg-0"}>
          <img src={"/assets/custom/images/sd/kepseksd.png"} alt={"Kepala Sekolah SD Ulil Albab"} className={"img-fluid"} style={{"maxWidth":"50%","height":"auto"}} />
          <div className={"text-center mt-3"}>
            <h4 className={"font-weight-bold fables-second-text-color mb-1"}>
              {"Iskandar, S.Pd. Gr."}
            </h4>
            <p className={"font-14 text-muted"} style={{"fontStyle":"italic"}}>
              {"Kepala Sekolah SDIT Al-Quran Ulil Albab"}
            </p>
          </div>
        </div>
        <div className={"col-12 col-lg-6"}>
          <h2 className={"font-30 semi-font fables-second-text-color mb-3"}>
            {"Tentang SD Ulil Albab"}
          </h2>
          <p className={"font-15 fables-fifth-text-color text-justify mb-3"}>
            {" SD Ulil Albab merupakan sekolah dasar yang berkomitmen untuk menyediakan pendidikan berkualitas tinggi dengan pendekatan holistik. Kami percaya bahwa setiap anak memiliki potensi luar biasa dan kami berupaya untuk mengembangkan kemampuan mereka dalam lingkungan yang mendukung dan inspiratif. "}
          </p>
          <p className={"font-15 fables-fifth-text-color text-justify"}>
            {" Kami menawarkan berbagai program akademik dan ekstrakurikuler yang dirancang untuk memfasilitasi perkembangan intelektual, sosial, dan emosional siswa kami. Dengan fasilitas modern dan tenaga pengajar yang berpengalaman, SD Ulil Albab menjadi pilihan utama bagi orang tua yang mencari pendidikan terbaik untuk anak-anak mereka. "}
          </p>
        </div>
      </div>
    </div>
    <div className={"fables-programs-section py-5 bg-light"}>
      <div className={"container"}>
        <h2 className={"font-30 semi-font fables-second-text-color text-center mb-4"}>
          {"Program Unggulan"}
        </h2>
        <div className={"row"}>
          <div className={"col-lg-4 mb-4"}>
            <div className={"fables-program-card p-4 text-center"}>
              <img src={"/assets/custom/images/sd/farm.JPG"} alt={"Kurikum Berbasis Karakter"} className={"program-img mb-3"} />
              <h3 className={"font-20 fables-second-text-color"}>
                {"Kurikum Berbasis Karakter"}
              </h3>
              <p className={"font-14 fables-fifth-text-color mt-3"}>
                {" Mengajarkan nilai-nilai karakter melalui pendekatan yang integratif, mempersiapkan siswa untuk menjadi individu yang bertanggung jawab dan beretika. "}
              </p>
            </div>
          </div>
          <div className={"col-lg-4 mb-4"}>
            <div className={"fables-program-card p-4 text-center"}>
              <img src={"/assets/custom/images/sd/panah.JPG"} alt={"Aktivitas Ekstrakurikuler"} className={"program-img mb-3"} />
              <h3 className={"font-20 fables-second-text-color"}>
                {"Aktivitas Ekstrakurikuler"}
              </h3>
              <p className={"font-14 fables-fifth-text-color mt-3"}>
                {" Menawarkan berbagai kegiatan seperti olahraga, seni, dan sains untuk memperkaya pengalaman belajar siswa di luar kelas. "}
              </p>
            </div>
          </div>
          <div className={"col-lg-4 mb-4"}>
            <div className={"fables-program-card p-4 text-center"}>
              <img src={"/assets/custom/images/sd/funcooking.JPG"} alt={"Lingkungan Belajar Nyaman"} className={"program-img mb-3"} />
              <h3 className={"font-20 fables-second-text-color"}>
                {"Lingkungan Belajar Nyaman"}
              </h3>
              <p className={"font-14 fables-fifth-text-color mt-3"}>
                {" Menyediakan suasana yang kondusif dan aman, sehingga siswa dapat belajar dengan tenang, fokus, dan penuh semangat. "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>;
}
