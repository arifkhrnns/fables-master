import React from 'react';
import Carousel from '../components/Carousel.jsx';

// Restored from ee33d1f1318478236ed4b657d5c50989abaa62e8:tk.html; shared navigation/contact remains React.
export default function Page() {
  return <div className="unit-page">
    <div style={{"backgroundImage":"url(\"/assets/custom/images/bg-tk.JPG\")","backgroundSize":"cover","backgroundPosition":"center","backgroundRepeat":"no-repeat","height":"100vh","width":"100%","display":"flex","flexDirection":"column","justifyContent":"center","alignItems":"center","textAlign":"center","fontFamily":"'Comic Neue', 'Comic Sans MS', cursive","position":"relative","overflow":"hidden"}}>
      <div style={{"position":"absolute","top":"0","left":"0","width":"100%","height":"100%","backgroundColor":"rgba(0,0,0,0.4)","zIndex":"1"}}>
      </div>
      <div style={{"position":"relative","zIndex":"2"}}>
        <h1 style={{"fontSize":"48px","fontWeight":"bold","color":"#FFEB3B","textShadow":"2px 2px 6px rgba(0,0,0,0.7)","marginBottom":"20px"}}>
          {" TK Ulil Albab "}
        </h1>
        <p style={{"fontSize":"22px","color":"#fff","textShadow":"1px 1px 4px rgba(0,0,0,0.8)","maxWidth":"700px","margin":"0 auto"}}>
          {" Membangun Generasi Cerdas Sejak Usia Dini dengan Penuh Keceriaan 🌈 "}
        </p>
      </div>
    </div>
    <div className={"container my-5"}>
      <div className={"row align-items-center"}>
        <div className={"col-12 col-lg-6 d-flex justify-content-center mb-4 mb-lg-0"}>
          <img src={"/assets/custom/images/tk/kepsek-tk.png"} alt={"Kepala Sekolah TK Ulil Albab"} className={"img-fluid"} style={{"maxWidth":"50%","height":"auto"}} />
        </div>
        <div className={"col-12 col-lg-6"}>
          <h2 className={"font-30 semi-font fables-second-text-color mb-3"}>
            {"Tentang Kami"}
          </h2>
          <p className={"font-15 fables-fifth-text-color text-justify mb-3"}>
            {" TK Ulil Albab adalah lembaga pendidikan di bawah naungan Yayasan Ulil Albab Bekasi. Kami memiliki visi untuk menciptakan anak-anak yang cerdas, kreatif, dan berakhlak mulia. Dengan kurikulum yang dirancang khusus untuk usia dini, kami memberikan pendidikan yang menyenangkan dan berfokus pada perkembangan holistik anak. "}
          </p>
          <p className={"font-15 fables-fifth-text-color text-justify"}>
            {" Kami percaya bahwa setiap anak memiliki potensi unik yang harus dikembangkan sejak dini. Oleh karena itu, program kami mencakup pembelajaran akademik, seni, olahraga, dan pengembangan karakter. "}
          </p>
        </div>
      </div>
    </div>
    <div className={"container my-5"}>
      <div className={"row"}>
        <div className={"col-12"}>
          <h2 className={"font-30 semi-font fables-second-text-color text-center mb-5"}>
            {"Mengapa Memilih Kami?"}
          </h2>
        </div>
        <div className={"col-12 col-md-4"}>
          <div className={"text-center"}>
            <img src={"/assets/custom/images/bg-tk.JPG"} alt={"Qualified Teachers"} className={"img-fluid mb-3"} />
            <h4 className={"font-20 semi-font fables-second-text-color"}>
              {"Guru Berkualitas"}
            </h4>
            <p className={"font-14 fables-fifth-text-color"}>
              {" Para guru kami adalah tenaga pendidik berpengalaman dan berkualitas yang berdedikasi untuk perkembangan anak-anak. "}
            </p>
          </div>
        </div>
        <div className={"col-12 col-md-4"}>
          <div className={"text-center"}>
            <img src={"/assets/custom/images/tk/funenvironment.png"} alt={"Fun Environment"} className={"img-fluid mb-3"} />
            <h4 className={"font-20 semi-font fables-second-text-color"}>
              {"Lingkungan Menyenangkan"}
            </h4>
            <p className={"font-14 fables-fifth-text-color"}>
              {" Kami menyediakan lingkungan yang aman dan menyenangkan di mana anak-anak bisa belajar sambil bermain. "}
            </p>
          </div>
        </div>
        <div className={"col-12 col-md-4"}>
          <div className={"text-center"}>
            <img src={"/assets/custom/images/tk/deeplearning.jpg"} alt={"Holistic Approach"} className={"img-fluid mb-3"} />
            <h4 className={"font-20 semi-font fables-second-text-color"}>
              {"Pendekatan Deep Learning"}
            </h4>
            <p className={"font-14 fables-fifth-text-color"}>
              {" Kami menggunakan pendekatan pembelajaran mendalam yang mendorong anak untuk berpikir kritis, memahami makna, dan belajar secara menyeluruh sejak dini. "}
            </p>
          </div>
        </div>
      </div>
    </div>
    <section className={"my-5"} id={"galeri"}>
      <div className={"container"}>
        <h2 className={"text-center mb-4 fables-second-text-color font-30 semi-font"}>
          {"Galeri Kegiatan"}
        </h2>
        <Carousel className="unit-gallery" label="Galeri Kegiatan TK Ulil Albab">
          <img src={"/assets/custom/images/tk/galeri1.jpg"} className={"img-fluid d-block mx-auto"} style={{"maxWidth":"75%","height":"auto"}} alt={"Galeri 1"} />
          <img src={"/assets/custom/images/tk/galeri2.JPG"} className={"img-fluid d-block mx-auto"} style={{"maxWidth":"75%","height":"auto"}} alt={"Galeri 2"} />
          <img src={"/assets/custom/images/tk/galeri3.JPG"} className={"img-fluid d-block mx-auto"} style={{"maxWidth":"75%","height":"auto"}} alt={"Galeri 3"} />
          <img src={"/assets/custom/images/tk/galeri4.JPG"} className={"img-fluid d-block mx-auto"} style={{"maxWidth":"75%","height":"auto"}} alt={"Galeri 4"} />
          <img src={"/assets/custom/images/tk/galeri5.jpg"} className={"img-fluid d-block mx-auto"} style={{"maxWidth":"75%","height":"auto"}} alt={"Galeri 5"} />
        </Carousel>
      </div>
    </section>
  </div>;
}
