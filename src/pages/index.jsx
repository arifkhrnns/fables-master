import React from 'react';
import Carousel from '../components/Carousel.jsx';
import UnitSelector from '../components/UnitSelector.jsx';
import {site} from '../data/site.js';

export default function Page() {
  return <>
  <div className={"unique-header-section"} style={{"backgroundImage":"url(\"/assets/custom/images/UPACARA (1).jpg\")"}}>
    <div className={"unique-header-overlay"}>
    </div>
    <div className={"unique-header-container"}>
      <Carousel className={"unique-header-carousel owl-carousel owl-theme"}>
        <div className={"unique-carousel-item"}>
          <div className={"unique-header-content"}>
            <h1 className={"unique-header-title"}>
              {"SIT ULIL ALBAB"}
              <br />
              <span className={"unique-highlight-text"}>
                {"BE SMART AND RELIGIUS"}
              </span>
            </h1>
            <p className={"unique-header-description"}>
              {" Lembaga pendidikan islam yang membentuk manusia yang unggul dan akhlak islami. "}
            </p>
            <a style={{"padding":"10px 20px","backgroundColor":"#005eff","color":"white","border":"none","borderRadius":"50px","cursor":"pointer"}} href={"/form-ppdb.html"}>
              Daftar {site.ppdbYear}
            </a>
          </div>
        </div>
        <div className={"unique-carousel-item"}>
          <div className={"unique-header-content"}>
            <h2 className={"unique-header-title"}>
              {"SIT ULIL ALBAB "}
              <br />
              <span className={"unique-highlight-text"}>
                {"MEMBENTUK INSAN CERDAS QUR'ANI"}
              </span>
            </h2>
            <p className={"unique-header-description"}>
              {" Lembaga pendidikan islam yang membentuk manusia yang unggul dan akhlak islami. "}
            </p>
            <a style={{"padding":"10px 20px","backgroundColor":"#005eff","color":"white","border":"none","borderRadius":"50px","cursor":"pointer"}} href={"/form-ppdb.html"}>
              Daftar {site.ppdbYear}
            </a>
          </div>
        </div>
      </Carousel>
    </div>
  </div>
  <div className={"fables-page-content fables-light-gary-background py-1"} id={"visi-misi"}>
    <div className={"container"}>
      <h2 className={"fables-main-text-color font-35 font-weight-bold text-center mt-4 mt-lg-5"}>
        <span className={"fables-second-text-color"}>
          {"VISI "}
        </span>
        {"&"}
        <span className={"fables-second-text-color"}>
          {" MISI"}
        </span>
      </h2>
      <p className={"font-35 text-center mb-4 mb-lg-5"}>
        {"SIT Ulil Albab"}
      </p>
      <div className={"text-center my-4 my-md-5"}>
        <div className={"col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2"}>
          <h2 className={"font-35 font-weight-bold fables-second-text-color mb-4"}>
            {"VISI"}
          </h2>
          <p className={"fables-forth-text-color font-italic font-20 text-center"}>
            {" \"Menjadi Sekolah Unggul Bertaraf Nasional yang Islami\" "}
          </p>
        </div>
      </div>
      <div className={"text-center my-4"}>
        <h2 className={"font-35 font-weight-bold fables-second-text-color"}>
          {"MISI"}
        </h2>
      </div>
      <div className={"mission-container"}>
        <p>
          <span className={"mission-number fables-second-text-color"}>
            {"1."}
          </span>
          {" Menjadikan keunggulan bidang Al-Qur'an dan Sains sebagai landasan pendidikan. "}
        </p>
        <p>
          <span className={"mission-number fables-second-text-color"}>
            {"2."}
          </span>
          {" Membentuk jiwa kepemimpinan yang berkarakter Islami pada setiap peserta didik. "}
        </p>
        <p>
          <span className={"mission-number fables-second-text-color"}>
            {"3."}
          </span>
          {" Menyelenggarakan pembelajaran yang efektif dan berfokus pada keterampilan abad 21: Komunikasi, Kolaborasi, Berpikir Kritis, dan Kreatif. "}
        </p>
      </div>
    </div>
    <svg xmlns={"http://www.w3.org/2000/svg"} style={{"marginBottom":"-12px"}} viewBox={"0 0 1440 320"}>
      <path fill={"#f3f4f5"} fillOpacity={"1"} d={"M0,256L26.7,250.7C53.3,245,107,235,160,234.7C213.3,235,267,245,320,245.3C373.3,245,427,235,480,218.7C533.3,203,587,181,640,165.3C693.3,149,747,139,800,160C853.3,181,907,235,960,256C1013.3,277,1067,267,1120,240C1173.3,213,1227,171,1280,154.7C1333.3,139,1387,149,1413,154.7L1440,160L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"}>
      </path>
    </svg>
  </div>
  <div className={"fables-page-content py-1"} style={{"backgroundColor":"#f3f4f5"}} id={"karakter"}>
    <div className={"container"}>
      <h2 className={"fables-main-text-color font-35 font-weight-bold text-center mt-4 mt-lg-5"}>
        {"7 "}
        <span className={"fables-second-text-color"}>
          {"Karakteristik"}
        </span>
        {" Standar "}
      </h2>
      <p className={" font-35 text-center mb-4 mb-lg-5"}>
        {"Kelulusan SIT Ulil Albab"}
      </p>
      <div className={"row mb-0 mb-lg-5 overflow-hidden"}>
        <div className={"col-12 col-sm-6 col-lg-3 text-center mb-4 mb-lg-0 wow bounceInUp"}>
          <div className={"table-block table-border-light py-4 py-lg-5 fables-second-hover-border"}>
            <h2 className={"fables-second-text-color bold-font font-35 font-weight-bold position-relative"}>
              <img src={"/assets/custom/images/Aqidah lurus.png"} alt={"SIT Ulil Albab"} />
              <span className={"table-badge fables-fifth-text-color position-absolute"}>
              </span>
            </h2>
            <p className={"mb-3 fables-fifth-text-color font-13"}>
            </p>
            <h2 className={"fables-forth-text-color text-center bold-font table-title font-14 fables-third-after position-relative"}>
              {"Aqidah Lurus"}
            </h2>
          </div>
        </div>
        <div className={"col-12 col-sm-6 col-lg-3 text-center mb-4 mb-lg-0 wow bounceInUp"}>
          <div className={"table-block table-border-light py-4 py-lg-5 fables-second-hover-border"}>
            <h2 className={"fables-second-text-color bold-font font-35 font-weight-bold position-relative"}>
              <img src={"/assets/custom/images/shalat.png"} alt={"SIT Ulil Albab"} />
              <span className={"table-badge fables-fifth-text-color position-absolute"}>
              </span>
            </h2>
            <p className={"mb-3 fables-fifth-text-color font-13"}>
            </p>
            <h2 className={"fables-forth-text-color text-center bold-font table-title font-14 fables-third-after position-relative"}>
              {"Ibadah Benar"}
            </h2>
          </div>
        </div>
        <div className={"col-12 col-sm-6 col-lg-3 text-center mb-4 mb-lg-0 wow bounceInUp"}>
          <div className={"table-block table-border-light py-4 py-lg-5 fables-second-hover-border"}>
            <h2 className={"fables-second-text-color bold-font font-35 font-weight-bold position-relative"}>
              <img src={"/assets/custom/images/akhlaq mulia.png"} alt={"SIT Ulil Albab"} />
              <span className={"table-badge fables-fifth-text-color position-absolute"}>
              </span>
            </h2>
            <p className={"mb-3 fables-fifth-text-color font-13"}>
            </p>
            <h2 className={"fables-forth-text-color text-center bold-font table-title font-14 fables-third-after position-relative"}>
              {"Akhlaq Mulia"}
            </h2>
          </div>
        </div>
        <div className={"col-12 col-sm-6 col-lg-3 text-center mb-4 mb-lg-0 wow bounceInUp"}>
          <div className={"table-block table-border-light py-4 py-lg-5 fables-second-hover-border"}>
            <h2 className={"fables-second-text-color bold-font font-35 font-weight-bold position-relative"}>
              <img src={"/assets/custom/images/Mandiri.png"} alt={"SIT Ulil Albab"} />
              <span className={"table-badge fables-fifth-text-color position-absolute"}>
              </span>
            </h2>
            <p className={"mb-3 fables-fifth-text-color font-13"}>
            </p>
            <h2 className={"fables-forth-text-color text-center bold-font table-title font-14 fables-third-after position-relative"}>
              {"Mandiri"}
            </h2>
          </div>
        </div>
        <div className={"col-12 col-sm-6 col-lg-3 text-center mb-4 mb-lg-0 wow bounceInUp"}>
          <div className={"table-block table-border-light py-4 py-lg-5 fables-second-hover-border"}>
            <h2 className={"fables-second-text-color bold-font font-35 font-weight-bold position-relative"}>
              <img src={"/assets/custom/images/quran.png"} alt={"SIT Ulil Albab"} />
              <span className={"table-badge fables-fifth-text-color position-absolute"}>
              </span>
            </h2>
            <p className={"mb-3 fables-fifth-text-color font-13"}>
            </p>
            <h2 className={"fables-forth-text-color text-center bold-font table-title font-14 fables-third-after position-relative"}>
              {"Memahami Al-Quran"}
            </h2>
          </div>
        </div>
        <div className={"col-12 col-sm-6 col-lg-3 text-center mb-4 mb-lg-0 wow bounceInUp"}>
          <div className={"table-block table-border-light py-4 py-lg-5 fables-second-hover-border"}>
            <h2 className={"fables-second-text-color bold-font font-35 font-weight-bold position-relative"}>
              <img src={"/assets/custom/images/idea.png"} alt={"SIT Ulil Albab"} />
              <span className={"table-badge fables-fifth-text-color position-absolute"}>
              </span>
            </h2>
            <p className={"mb-3 fables-fifth-text-color font-13"}>
            </p>
            <h2 className={"fables-forth-text-color text-center bold-font table-title font-14 fables-third-after position-relative"}>
              {"Berwawasan Luas"}
            </h2>
          </div>
        </div>
        <div className={"col-12 col-sm-6 col-lg-3 text-center mb-4 mb-lg-0 wow bounceInUp"}>
          <div className={"table-block table-border-light py-4 py-lg-5 fables-second-hover-border"}>
            <h2 className={"fables-second-text-color bold-font font-35 font-weight-bold position-relative"}>
              <img src={"/assets/custom/images/terampil.png"} alt={"SIT Ulil Albab"} />
              <span className={"table-badge fables-fifth-text-color position-absolute"}>
              </span>
            </h2>
            <p className={"mb-3 fables-fifth-text-color font-13"}>
            </p>
            <h2 className={"fables-forth-text-color text-center bold-font table-title font-14 fables-third-after position-relative"}>
              {"Terampil"}
            </h2>
          </div>
        </div>
      </div>
    </div>
    <svg xmlns={"http://www.w3.org/2000/svg"} style={{"marginBottom":"-10px"}} viewBox={"0 0 1440 320"}>
      <path fill={"#ffffff"} fillOpacity={"1"} d={"M0,64L24,96C48,128,96,192,144,197.3C192,203,240,149,288,117.3C336,85,384,75,432,85.3C480,96,528,128,576,122.7C624,117,672,75,720,80C768,85,816,139,864,160C912,181,960,171,1008,138.7C1056,107,1104,53,1152,32C1200,11,1248,21,1296,42.7C1344,64,1392,96,1416,112L1440,128L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"}>
      </path>
    </svg>
  </div>
  <section className={"unit-section text-center mt-lg-10"} id={"unit"}>
    <h2 className={"fables-main-text-color font-35 font-weight-bold text-center mt-4 mt-lg-5"}>
      <span className={"fables-second-text-color"}>
        {"Unit"}
      </span>
      {" Pendidikan "}
    </h2>
    <p className={"font-35 text-center mb-4 mb-lg-5"}>
      {"SIT Ulil Albab"}
    </p>
    <UnitSelector units={[{"logo":"/assets/custom/images/logo_tk.jpg","title":"TKIT Ulil Albab","description":"","label":"TK"},{"logo":"/assets/custom/images/logo_sd.png","title":"SDIT Ulil Albab","description":"","label":"SD"},{"logo":"/assets/custom/images/logo_smp.png","title":"SMPIT Ulil Albab","description":"","label":"SMP"},{"logo":"/assets/custom/images/logo_sma.png","title":"SMAIT Ulil Albab","description":"","label":"SMA"}]} />
    <svg xmlns={"http://www.w3.org/2000/svg"} style={{"marginBottom":"-40px"}} viewBox={"0 0 1440 320"}>
      <path fill={"#f3f4f5"} fillOpacity={"1"} d={"M0,128L20,144C40,160,80,192,120,208C160,224,200,224,240,240C280,256,320,288,360,250.7C400,213,440,107,480,85.3C520,64,560,128,600,176C640,224,680,256,720,272C760,288,800,288,840,288C880,288,920,288,960,250.7C1000,213,1040,139,1080,128C1120,117,1160,171,1200,165.3C1240,160,1280,96,1320,69.3C1360,43,1400,53,1420,58.7L1440,64L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"}>
      </path>
    </svg>
  </section>
  <div className={"ekstra-carousel-section py-5"} style={{"backgroundColor":"#f3f4f5"}} id={"ekstrakulikuler"}>
    <div className={"container"}>
      <h2 className={"text-center fables-main-text-color font-36 my-4 my-lg-5"} style={{"background":"linear-gradient(90deg, #0066ff, #00ccff)","WebkitBackgroundClip":"text","color":"transparent","textShadow":"2px 2px 4px rgba(0, 0, 0, 0.2)","fontFamily":"'Montserrat', sans-serif","position":"relative"}}>
        {" Ekstrakulikuler "}
        <span style={{"position":"absolute","bottom":"-10px","left":"50%","transform":"translateX(-50%)","width":"60px","height":"4px","backgroundColor":"#00ccff","borderRadius":"2px","transition":"width 0.3s"}}>
        </span>
      </h2>
      <Carousel className={"ekstra-carousel owl-carousel owl-theme"}>
        <div className={"ekstra-item"}>
          <div className={"ekstra-card"}>
            <img src={"/assets/custom/images/ekstrakulikuler/nasyid.png"} alt={"Nasyid"} className={"ekstra-card-img"} />
            <div className={"ekstra-card-body"}>
              <h3 className={"ekstra-card-title"}>
                {"NASYID"}
              </h3>
            </div>
          </div>
        </div>
        <div className={"ekstra-item"}>
          <div className={"ekstra-card"}>
            <img src={"/assets/custom/images/ekstrakulikuler/karate.png"} alt={"Karate"} className={"ekstra-card-img"} />
            <div className={"ekstra-card-body"}>
              <h3 className={"ekstra-card-title"}>
                {"Karate"}
              </h3>
            </div>
          </div>
        </div>
        <div className={"ekstra-item"}>
          <div className={"ekstra-card"}>
            <img src={"/assets/custom/images/ekstrakulikuler/panahan.png"} alt={"Panahan"} className={"ekstra-card-img"} />
            <div className={"ekstra-card-body"}>
              <h3 className={"ekstra-card-title"}>
                {"Panahan"}
              </h3>
            </div>
          </div>
        </div>
        <div className={"ekstra-item"}>
          <div className={"ekstra-card"}>
            <img src={"/assets/custom/images/DSCF9403 1.png"} alt={"Badminton"} className={"ekstra-card-img"} />
            <div className={"ekstra-card-body"}>
              <h3 className={"ekstra-card-title"}>
                {"Badminton"}
              </h3>
            </div>
          </div>
        </div>
        <div className={"ekstra-item"}>
          <div className={"ekstra-card"}>
            <img src={"/assets/custom/images/ekstrakulikuler/voli.png"} alt={"Voli"} className={"ekstra-card-img"} />
            <div className={"ekstra-card-body"}>
              <h3 className={"ekstra-card-title"}>
                {"Voli"}
              </h3>
            </div>
          </div>
        </div>
        <div className={"ekstra-item"}>
          <div className={"ekstra-card"}>
            <img src={"/assets/custom/images/ekstrakulikuler/futsal.png"} alt={"Futsal"} className={"ekstra-card-img"} />
            <div className={"ekstra-card-body"}>
              <h3 className={"ekstra-card-title"}>
                {"Futsal"}
              </h3>
            </div>
          </div>
        </div>
        <div className={"ekstra-item"}>
          <div className={"ekstra-card"}>
            <img src={"/assets/custom/images/ekstrakulikuler/KIR.png"} alt={"KIR (Karya Ilmiah Remaja)"} className={"ekstra-card-img"} />
            <div className={"ekstra-card-body"}>
              <h3 className={"ekstra-card-title"}>
                {"KIR (Karya Ilmiah Remaja)"}
              </h3>
            </div>
          </div>
        </div>
        <div className={"ekstra-item"}>
          <div className={"ekstra-card"}>
            <img src={"/assets/custom/images/ekstrakulikuler/tarisaman.png"} alt={"Tari Saman"} className={"ekstra-card-img"} />
            <div className={"ekstra-card-body"}>
              <h3 className={"ekstra-card-title"}>
                {"Tari Saman"}
              </h3>
            </div>
          </div>
        </div>
        <div className={"ekstra-item"}>
          <div className={"ekstra-card"}>
            <img src={"/assets/custom/images/ekstrakulikuler/pramuka.png"} alt={"Pramuka"} className={"ekstra-card-img"} />
            <div className={"ekstra-card-body"}>
              <h3 className={"ekstra-card-title"}>
                {"Pramuka"}
              </h3>
            </div>
          </div>
        </div>
      </Carousel>
      <button className={"owl-prev"}>
        <i className={"fa fa-chevron-left"}>
        </i>
      </button>
      <button className={"owl-next"}>
        <i className={"fa fa-chevron-right"}>
        </i>
      </button>
      <div className={"owl-dots-custom"}>
      </div>
    </div>
    <svg xmlns={"http://www.w3.org/2000/svg"} style={{"marginBottom":"-60px"}} viewBox={"0 0 1440 320"}>
      <path fill={"#ffffff"} fillOpacity={"1"} d={"M0,256L26.7,250.7C53.3,245,107,235,160,234.7C213.3,235,267,245,320,245.3C373.3,245,427,235,480,218.7C533.3,203,587,181,640,165.3C693.3,149,747,139,800,160C853.3,181,907,235,960,256C1013.3,277,1067,267,1120,240C1173.3,213,1227,171,1280,154.7C1333.3,139,1387,149,1413,154.7L1440,160L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"}>
      </path>
    </svg>
  </div>
  <div className={"program-tahunan-container"} id={"program-tahunan"}>
    <div className={"container"}>
      <h2 className={"text-center fables-main-text-color font-36 my-4 my-lg-5"} style={{"background":"linear-gradient(90deg, #0066ff, #00ccff)","WebkitBackgroundClip":"text","color":"transparent","textShadow":"2px 2px 4px rgba(0, 0, 0, 0.2)","fontFamily":"'Montserrat', sans-serif","position":"relative"}}>
        {" Program Tahunan "}
        <span style={{"position":"absolute","bottom":"-10px","left":"50%","transform":"translateX(-50%)","width":"60px","height":"4px","backgroundColor":"#00ccff","borderRadius":"2px","transition":"width 0.3s"}}>
        </span>
      </h2>
      <div className={"row-tahunan"}>
        <div className={"tahunan-col-12 col-sm-6 col-md-4 mb-4"}>
          <div className={"program-image-wrapper"}>
            <a href={"#"}>
              <img src={"/assets/custom/images/IMG_0144.jpg"} alt={"Kunjungan Edukasi"} className={"program-image"} />
            </a>
          </div>
          <h2 className={"program-item-title"}>
            <a href={"#"} className={"program-item-link"}>
              {"Kunjungan Edukasi"}
            </a>
          </h2>
        </div>
        <div className={"tahunan-col-12 col-sm-6 col-md-4 mb-4"}>
          <div className={"program-image-wrapper"}>
            <a href={"#"}>
              <img src={"/assets/custom/images/DSCF4075.JPG"} alt={"Qur'an Camp"} className={"program-image"} />
            </a>
          </div>
          <h2 className={"program-item-title"}>
            <a href={"#"} className={"program-item-link"}>
              {"Qur'an Camp"}
            </a>
          </h2>
        </div>
        <div className={"tahunan-col-12 col-sm-6 col-md-4 mb-4"}>
          <div className={"program-image-wrapper"}>
            <a href={"#"}>
              <img src={"/assets/custom/images/DSCF2350.JPG"} alt={"Khotaman & Imtihan Al-Quran"} className={"program-image"} />
            </a>
          </div>
          <h2 className={"program-item-title"}>
            <a href={"#"} className={"program-item-link"}>
              {"Khotaman & Imtihan Al-Quran"}
            </a>
          </h2>
        </div>
        <div className={"tahunan-col-12 col-sm-6 col-md-4 mb-4"}>
          <div className={"program-image-wrapper"}>
            <a href={"#"}>
              <img src={"/assets/custom/images/Market Day SDIT 2023 (58).jpg"} alt={"Entrepreneurship Day"} className={"program-image"} />
            </a>
          </div>
          <h2 className={"program-item-title"}>
            <a href={"#"} className={"program-item-link"}>
              {"Entrepreneurship Day"}
            </a>
          </h2>
        </div>
        <div className={"tahunan-col-12 col-sm-6 col-md-4 mb-4"}>
          <div className={"program-image-wrapper"}>
            <a href={"#"}>
              <img src={"/assets/custom/images/DSCF7459.JPG"} alt={"Malam Bina Iman & Taqwa"} className={"program-image"} />
            </a>
          </div>
          <h2 className={"program-item-title"}>
            <a href={"#"} className={"program-item-link"}>
              {"Malam Bina Iman & Taqwa"}
            </a>
          </h2>
        </div>
        <div className={"tahunan-col-12 col-sm-6 col-md-4 mb-4"}>
          <div className={"program-image-wrapper"}>
            <a href={"#"}>
              <img src={"/assets/custom/images/DSCF5855.JPG"} alt={"Study Campus"} className={"program-image"} />
            </a>
          </div>
          <h2 className={"program-item-title"}>
            <a href={"#"} className={"program-item-link"}>
              {"Study Campus"}
            </a>
          </h2>
        </div>
        <div className={"tahunan-col-12 col-sm-6 col-md-4 mb-4"}>
          <div className={"program-image-wrapper"}>
            <a href={"#"}>
              <img src={"/assets/custom/images/DSCF0309.JPG"} alt={"Ekspedisi Sosial"} className={"program-image"} />
            </a>
          </div>
          <h2 className={"program-item-title"}>
            <a href={"#"} className={"program-item-link"}>
              {"Ekspedisi Sosial"}
            </a>
          </h2>
        </div>
        <div className={"tahunan-col-12 col-sm-6 col-md-4 mb-4"}>
          <div className={"program-image-wrapper"}>
            <a href={"#"}>
              <img src={"/assets/custom/images/totr.jpg"} alt={"Takjil on the Road & I'tikaf Ramadhan"} className={"program-image"} />
            </a>
          </div>
          <h2 className={"program-item-title"}>
            <a href={"#"} className={"program-item-link"}>
              {"Takjil on the Road & I'tikaf Ramadhan"}
            </a>
          </h2>
        </div>
      </div>
    </div>
    <svg xmlns={"http://www.w3.org/2000/svg"} style={{"marginBottom":"-60px"}} viewBox={"0 0 1440 320"}>
      <path fill={"#f3f4f5"} fillOpacity={"1"} d={"M0,128L20,144C40,160,80,192,120,208C160,224,200,224,240,240C280,256,320,288,360,250.7C400,213,440,107,480,85.3C520,64,560,128,600,176C640,224,680,256,720,272C760,288,800,288,840,288C880,288,920,288,960,250.7C1000,213,1040,139,1080,128C1120,117,1160,171,1200,165.3C1240,160,1280,96,1320,69.3C1360,43,1400,53,1420,58.7L1440,64L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"}>
      </path>
    </svg>
  </div>
  <div className={"fables-page-content"} style={{"backgroundColor":"#f3f4f5"}} id={"ua-news"}>
    <div className={"container"}>
      <div className={"row-news"}>
        <div className={"col-12-news"}>
          <a href={"/blog-cat-masonry.html"}>
            <h2 className={"text-center fables-main-text-color font-36 my-4 my-lg-5"} style={{"background":"linear-gradient(90deg, #0066ff, #00ccff)","WebkitBackgroundClip":"text","color":"transparent","textShadow":"2px 2px 4px rgba(0, 0, 0, 0.2)","fontFamily":"'Montserrat', sans-serif","position":"relative"}}>
              {" UA News "}
              <span style={{"position":"absolute","bottom":"-10px","left":"50%","transform":"translateX(-50%)","width":"60px","height":"4px","backgroundColor":"#00ccff","borderRadius":"2px","transition":"width 0.3s"}}>
              </span>
            </h2>
          </a>
        </div>
                <div className={"col-12-news col-sm-6-news col-md-4-news mb-4 mb-lg-5 wow fadeIn"}>
          <div className={"position-relative-news"}>
            <div className={"image-container-news translate-effect-right"}>
              <a href={"/uanews/sdita.html"}>
                <img src={"/assets/custom/images/sdita.png"} alt={"Dokumentasi kegiatan SIT Ulil Albab"} className={"img-fluid w-100"} />
              </a>
            </div>
            <h2 className={"font-18-news my-3 mx-3"}>
              <a href={"/uanews/sdita.html"} className={"fables-main-text-color fables-second-hover-color"}>
                {" SDIT Al-Quran Ulil Albab Raih Akreditasi A "}
              </a>
            </h2>
            <p className={"font-13-news mb-2 text-justify mx-3"}>
              {" SDIT Al-Qur'an Ulil Albab dengan bangga mengumumkan keberhasilan meraih Akreditasi A, sebuah prestasi yang patut dibanggakan dan menjadi tonggak penting dalam perjalanan pendidikan di sekolah ini. "}
            </p>
            <a href={"/uanews/sdita.html"} className={"btn fables-second-text-color fables-main-hover-color p-0 font-15-news border-0 mx-3 mb-3"}>
              {" Baca Penuh "}
              <i className={"fas fa-long-arrow-alt-right"}>
              </i>
            </a>
          </div>
        </div>
        <div className={"col-12-news col-sm-6-news col-md-4-news mb-4 mb-lg-5 wow fadeIn"}>
          <div className={"position-relative-news"}>
            <div className={"image-container-news translate-effect-right"}>
              <a href={"/uanews/raker.html"}>
                <img src={"/assets/custom/images/raker/1 (1).JPG"} alt={"Dokumentasi kegiatan SIT Ulil Albab"} className={"img-fluid w-100"} />
              </a>
              <span className={"above-date position-absolute text-center fables-second-background-color white-color px-2 py-1"}>
                <span className={"bold-font day"}>
                  {"02"}
                </span>
                <span className={"month d-block"}>
                  {"Januari"}
                </span>
              </span>
            </div>
            <h2 className={"font-18-news my-3 mx-3"}>
              <a href={"/uanews/raker.html"} className={"fables-main-text-color fables-second-hover-color"}>
                {" Rapat Kerja Tahunan SIT Ulil Albab "}
              </a>
            </h2>
            <p className={"font-13-news mb-2 text-justify mx-3"}>
              {" SIT Ulil Albab menggelar Rapat Kerja Tahunan yang menjadi momentum penting dalam menyusun strategi terbaik untuk mewujudkan visi dan misi pendidikan yang unggul. Kegiatan yang berlangsung penuh semangat ini dihadiri oleh seluruh tim pengelola dan tenaga pendidik di SIT Ulil Albab. "}
            </p>
            <a href={"/uanews/raker.html"} className={"btn fables-second-text-color fables-main-hover-color p-0 font-15-news border-0 mx-3 mb-3"}>
              {" Baca Penuh "}
              <i className={"fas fa-long-arrow-alt-right"}>
              </i>
            </a>
          </div>
        </div>
        <div className={"col-12-news col-sm-6-news col-md-4-news mb-4 mb-lg-5 wow fadeIn"}>
          <div className={"position-relative-news"}>
            <div className={"image-container-news translate-effect-right"}>
              <a href={"/uanews/marketday.html"}>
                <img src={"/assets/custom/images/marketday/1 (6).JPG"} alt={"Dokumentasi kegiatan SIT Ulil Albab"} className={"img-fluid w-100"} />
              </a>
              <span className={"above-date position-absolute text-center fables-second-background-color white-color px-2 py-1"}>
                <span className={"bold-font day"}>
                  {"12"}
                </span>
                <span className={"month d-block"}>
                  {"Desember"}
                </span>
              </span>
            </div>
            <h2 className={"font-18-news my-3 mx-3"}>
              <a href={"/uanews/anbk.html"} className={"fables-main-text-color fables-second-hover-color "}>
                {"Market Day SDIT Al-QUran Ulil Albab"}
              </a>
            </h2>
            <p className={"font-13-news mb-2 text-justify mx-3"}>
              {" Market Day SDIT Al-Qur'an Ulil Albab kali ini berlangsung dengan penuh semangat dan keceriaan, menjadi salah satu momen berharga dalam kalender kegiatan sekolah. Acara ini sukses memfasilitasi siswa-siswi untuk mengaplikasikan keterampilan wirausaha yang telah mereka pelajari dengan penuh antusiasme. "}
            </p>
            <a href={"/uanews/marketday.html"} className={"btn fables-second-text-color fables-main-hover-color p-0 font-15-news border-0 mx-3 mb-3"}>
              {" Baca Penuh "}
              <i className={"fas fa-long-arrow-alt-right"}>
              </i>
            </a>
          </div>
        </div>
<div className={"col-12-news col-sm-6-news col-md-4-news mb-4 mb-lg-5 wow fadeIn"}>
          <div className={"position-relative-news"}>
            <div className={"image-container-news translate-effect-right"}>
              <a href={"/uanews/safarisosial.html"}>
                <img src={"/assets/custom/images/safari/6.png"} alt={"SIT Ulil Albab"} className={"img-fluid w-100"} />
              </a>
              <span className={"above-date position-absolute text-center fables-second-background-color white-color px-2 py-1"}>
                <span className={"bold-font day"}>
                  {"24"}
                </span>
                <span className={"month d-block"}>
                  {"September"}
                </span>
              </span>
            </div>
            <h2 className={"font-18-news my-3 mx-3"}>
              <a href={"/uanews/safarisosial.html"} className={"fables-main-text-color fables-second-hover-color"}>
                {" Safari Sosial SMPIT Ulil Albab "}
              </a>
            </h2>
            <p className={"font-13-news mb-2 text-justify mx-3"}>
              {" SMPIT Ulil Albab kembali menggelar kegiatan safari sosial sebagai wujud kepedulian terhadap masyarakat, kali ini dengan mengunjungi Yayasan Al Fajar Berseri, "}
            </p>
            <a href={"/uanews/safarisosial.html"} className={"btn fables-second-text-color fables-main-hover-color p-0 font-15-news border-0 mx-3 mb-3"}>
              {" Baca Penuh "}
              <i className={"fas fa-long-arrow-alt-right"}>
              </i>
            </a>
          </div>
        </div>
        <div className={"col-12-news col-sm-6-news col-md-4-news mb-4 mb-lg-5 wow fadeIn"}>
          <div className={"position-relative-news"}>
            <div className={"image-container-news translate-effect-right"}>
              <a href={"/uanews/maulid.html"}>
                <img src={"/assets/custom/images/maulid/1.png"} alt={"SIT Ulil Albab"} className={"img-fluid w-100"} />
              </a>
              <span className={"above-date position-absolute text-center fables-second-background-color white-color px-2 py-1"}>
                <span className={"bold-font day"}>
                  {"17"}
                </span>
                <span className={"month d-block"}>
                  {"September"}
                </span>
              </span>
            </div>
            <h2 className={"font-18-news my-3 mx-3"}>
              <a href={"/uanews/maulid.html"} className={"fables-main-text-color fables-second-hover-color"}>
                {" Peringatan Maulid Nabi Muhammad SAW "}
              </a>
            </h2>
            <p className={"font-13-news mb-2 text-justify mx-3"}>
              {" 12 Rabiul Awwal, ummat Islam mengenalnya sebagai tanggal kelahiran Nabi Muhammad SAW, kala itu belum ada perhitungan tahun, dan baru di tandai dengan adanya peristiwa-peristiwa besar. "}
            </p>
            <a href={"/uanews/maulid.html"} className={"btn fables-second-text-color fables-main-hover-color p-0 font-15-news border-0 mx-3 mb-3"}>
              {" Baca Penuh "}
              <i className={"fas fa-long-arrow-alt-right"}>
              </i>
            </a>
          </div>
        </div>
        <div className={"col-12-news col-sm-6-news col-md-4-news mb-4 mb-lg-5 wow fadeIn"}>
          <div className={"position-relative-news"}>
            <div className={"image-container-news translate-effect-right"}>
              <a href={"/uanews/anbk.html"}>
                <img src={"/assets/custom/images/anbk/img1.png"} alt={"SIT Ulil Albab"} className={"img-fluid w-100"} />
              </a>
              <span className={"above-date position-absolute text-center fables-second-background-color white-color px-2 py-1"}>
                <span className={"bold-font day"}>
                  {"10"}
                </span>
                <span className={"month d-block"}>
                  {"September"}
                </span>
              </span>
            </div>
            <h2 className={"font-18-news my-3 mx-3"}>
              <a href={"/uanews/anbk.html"} className={"fables-main-text-color fables-second-hover-color "}>
                {"ANBK Mengukur Mutu Sekolah"}
              </a>
            </h2>
            <p className={"font-13-news mb-2 text-justify mx-3"}>
              {" Dahulu, kita mengenal istilah Ujian Nasional (UN) yaitu ujian tertulis bagi siswa-siswi tingkat akhir setiap jenjang Pendidikan, mulai dari SD, SMP, SMA dan sederajat. "}
            </p>
            <a href={"/uanews/anbk.html"} className={"btn fables-second-text-color fables-main-hover-color p-0 font-15-news border-0 mx-3 mb-3"}>
              {" Baca Penuh "}
              <i className={"fas fa-long-arrow-alt-right"}>
              </i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>;
}
