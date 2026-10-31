import React from 'react';
import Carousel from '../components/Carousel.jsx';
import MissingImage from '../components/MissingImage.jsx';

export default function Page() {
  return <>
  <div className={"fables-header fables-after-overlay bg-rules"} style={{"backgroundImage":"url(\"/assets/custom/images/DSCF9453.JPG\")"}}>
    <div className={"container overflow-hidden"}>
      <Carousel className={"owl-carousel owl-theme default-carousel fables-sqr-nav dots-0 wow fadeInUpBig"}>
        <div>
          <h1 className={"white-color bold-font mt-lg-5 mb-4"}>
            {"SIT ULIL ALBAB"}
            <br />
            <span className={"fables-second-text-color-main"}>
              {"BE SMART AND RELIGIUS"}
            </span>
          </h1>
          <a href={"#"} className={"btn fables-second-background-color fables-second-border-color white-color rounded-0 mr-4 px-md-4 py-2 btn-bg-hover white-color-hover"}>
            {"Daftar"}
          </a>
        </div>
        <div>
          <h2 className={"white-color bold-font mt-lg-5 mb-4"}>
            {"SIT ULIL ALBAB "}
            <br />
            <span className={"fables-second-text-color-main"}>
              {"MEMBENTUK INSAN CERDAS QUR'ANI "}
            </span>
          </h2>
          <a href={"#"} className={"btn fables-second-background-color fables-second-border-color white-color rounded-0 mr-4 px-md-4 py-2 btn-bg-hover  white-color-hover"}>
            {"Daftar"}
          </a>
        </div>
      </Carousel>
    </div>
  </div>
  <div className={"fables-page-content"} id={"visi-misi"}>
    <div className={"container"}>
      <div className={"row my-4 my-md-5"}>
        <div className={"col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center"}>
          <h2 className={"font-35 font-weight-bold fables-second-text-color mb-4"}>
            {"VISI"}
          </h2>
          <p className={"fables-forth-text-color"}>
            {" Menjadi Sekolah Unggul Bertaraf Nasional Yang Islami "}
          </p>
        </div>
        <div className={"col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center"}>
          <br />
          <h2 className={"font-35 font-weight-bold fables-second-text-color mb-4"}>
            {"MISI"}
          </h2>
        </div>
        <div className={"col-12 col-sm-6 col-lg-4 pt-3 pt-md-5 wow zoomIn"}>
          <div className={"row text-center text-md-center"}>
            <div className={"col-12 col-md-10 pl-md-0"}>
              <div className={"font-15 fables-forth-text-color"}>
                {" Menjadikan keunggulan bidang Al Quran dan Sains. "}
              </div>
            </div>
          </div>
        </div>
        <div className={"col-12 col-sm-6 col-lg-4 pt-3 pt-md-5 wow zoomIn"}>
          <div className={"row text-center text-md-center"}>
            <div className={"col-12 col-md-10 pl-md-0"}>
              <div className={"font-15 fables-forth-text-color"}>
                {" Membentuk jiwa kepemimpinan berkarakter Islami. "}
              </div>
            </div>
          </div>
        </div>
        <div className={"col-12 col-sm-6 col-lg-4 pt-3 pt-md-5 wow zoomIn"}>
          <div className={"row text-center text-md-center"}>
            <div className={"col-12 col-md-12 pl-md-0"}>
              <div className={"font-15 fables-forth-text-color"}>
                {" Menyelenggarakan pembelajaran efektif dengan mengacu pada keterampilan abad 21 (Communicative, Collaboration, Critical Thinking, Creative Thingking). "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className={"container"}>
    <h2 className={"fables-main-text-color font-35 font-weight-bold text-center mt-4 mt-lg-5"}>
      {"7 "}
      <span className={"fables-second-text-color"}>
        {"Karakteristik"}
      </span>
      {" Standar "}
    </h2>
    <p className={"fables-forth-text-color text-center mb-4 mb-lg-5"}>
      {"Kelulusan SIT Ulil Albab"}
    </p>
    <div className={"row mb-0 mb-lg-5 overflow-hidden"}>
      <div className={"col-12 col-sm-6 col-lg-3 text-center mb-4 mb-lg-0 wow bounceInUp"}>
        <div className={"table-block table-border-light py-4 py-lg-5 fables-second-hover-border"}>
          <h2 className={"fables-second-text-color bold-font font-35 font-weight-bold position-relative"}>
            {"1 "}
            <span className={"table-badge fables-fifth-text-color position-absolute"}>
            </span>
          </h2>
          <p className={"mb-3 fables-fifth-text-color font-13"}>
          </p>
          <h2 className={"fables-forth-text-color text-center bold-font table-title font-17 fables-third-after position-relative"}>
            {"Aqidah Lurus"}
          </h2>
        </div>
      </div>
      <div className={"col-12 col-sm-6 col-lg-3 text-center mb-4 mb-lg-0 wow bounceInUp"}>
        <div className={"table-block table-border-light py-4 py-lg-5 fables-second-hover-border"}>
          <h2 className={"fables-second-text-color bold-font font-35 font-weight-bold position-relative"}>
            <img src={"/assets/custom/images/ibadah 1.png"} alt={"SIT Ulil Albab"} />
            <span className={"table-badge fables-fifth-text-color position-absolute"}>
            </span>
          </h2>
          <p className={"mb-3 fables-fifth-text-color font-13"}>
          </p>
          <h2 className={"fables-forth-text-color text-center bold-font table-title font-17 fables-third-after position-relative"}>
            {"Ibadah Benar"}
          </h2>
        </div>
      </div>
      <div className={"col-12 col-sm-6 col-lg-3 text-center mb-4 mb-lg-0 wow bounceInUp"}>
        <div className={"table-block table-border-light py-4 py-lg-5 fables-second-hover-border"}>
          <h2 className={"fables-second-text-color bold-font font-35 font-weight-bold position-relative"}>
            {"3"}
            <span className={"table-badge fables-fifth-text-color position-absolute"}>
            </span>
          </h2>
          <p className={"mb-3 fables-fifth-text-color font-13"}>
          </p>
          <h2 className={"fables-forth-text-color text-center bold-font table-title font-17 fables-third-after position-relative"}>
            {"Akhlaq Mulia"}
          </h2>
        </div>
      </div>
      <div className={"col-12 col-sm-6 col-lg-3 text-center mb-4 mb-lg-0 wow bounceInUp"}>
        <div className={"table-block table-border-light py-4 py-lg-5 fables-second-hover-border"}>
          <h2 className={"fables-second-text-color bold-font font-35 font-weight-bold position-relative"}>
            {"4 "}
            <span className={"table-badge fables-fifth-text-color position-absolute"}>
            </span>
          </h2>
          <p className={"mb-3 fables-fifth-text-color font-13"}>
          </p>
          <h2 className={"fables-forth-text-color text-center bold-font table-title font-17 fables-third-after position-relative"}>
            {"Mandiri"}
          </h2>
        </div>
      </div>
      <div className={"col-12 col-sm-6 col-lg-3 text-center mb-4 mb-lg-0 wow bounceInUp"}>
        <div className={"table-block table-border-light py-4 py-lg-5 fables-second-hover-border"}>
          <h2 className={"fables-second-text-color bold-font font-35 font-weight-bold position-relative"}>
            {"5 "}
            <span className={"table-badge fables-fifth-text-color position-absolute"}>
            </span>
          </h2>
          <p className={"mb-3 fables-fifth-text-color font-13"}>
          </p>
          <h2 className={"fables-forth-text-color text-center bold-font table-title font-17 fables-third-after position-relative"}>
            {"Memahami Al-Quran"}
          </h2>
        </div>
      </div>
      <div className={"col-12 col-sm-6 col-lg-3 text-center mb-4 mb-lg-0 wow bounceInUp"}>
        <div className={"table-block table-border-light py-4 py-lg-5 fables-second-hover-border"}>
          <h2 className={"fables-second-text-color bold-font font-35 font-weight-bold position-relative"}>
            {"6"}
            <span className={"table-badge fables-fifth-text-color position-absolute"}>
            </span>
          </h2>
          <p className={"mb-3 fables-fifth-text-color font-13"}>
          </p>
          <h2 className={"fables-forth-text-color text-center bold-font table-title font-17 fables-third-after position-relative"}>
            {"Berwawasan Luas"}
          </h2>
        </div>
      </div>
      <div className={"col-12 col-sm-6 col-lg-3 text-center mb-4 mb-lg-0 wow bounceInUp"}>
        <div className={"table-block table-border-light py-4 py-lg-5 fables-second-hover-border"}>
          <h2 className={"fables-second-text-color bold-font font-35 font-weight-bold position-relative"}>
            {"7"}
            <span className={"table-badge fables-fifth-text-color position-absolute"}>
            </span>
          </h2>
          <p className={"mb-3 fables-fifth-text-color font-13"}>
          </p>
          <h2 className={"fables-forth-text-color text-center bold-font table-title font-17 fables-third-after position-relative"}>
            {"Terampil"}
          </h2>
        </div>
      </div>
    </div>
  </div>
  <div className={"fables-testimonial fables-after-overlay py-4 py-lg-5 mt-4 mt-lg-5 bg-rules"}>
    <div className={"container"}>
      <p className={"font-35 fables-third-text-color text-center z-index position-relative mt-2"}>
        {"10 Ekstrakurikuler"}
      </p>
      <div className={"row"}>
        <div className={"col-12 col-lg-8 offset-lg-2"}>
          <Carousel className={"owl-carousel owl-theme dots-0 mt-4 center-testimonial-carousel padding-outer"} id={"fables-testimonial-carousel"}>
            <div className={"text-center fables-testimonial-carousel-item"}>
              <div>
                <img src={"/assets/custom/images/DSCF9403 1.png"} alt={"SIT Ulil Albab"} className={"fables-testimonial-carousel-img rounded-circle"} />
              </div>
              <div>
                <h3 className={"font-14 semi-font text-white"}>
                  {"NASYID"}
                </h3>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  </div>
  <div className={"container overflow-hidden"}>
    <h2 className={"text-center fables-main-text-color font-36 my-4 my-lg-5"}>
      {" Program Tahunan "}
    </h2>
    <div className={"row"}>
      <div className={"col-12 col-sm-4 mb-4 wow fadeInUpBig"}>
        <div className={"image-container translate-effect-right"}>
          <a href={"#"}>
            <MissingImage alt={""} className={"img-fluid w-100"} />
          </a>
        </div>
        <h2 className={"font-22 mt-3 mb-2 d-block text-center text-md-left"}>
          <a href={"#"} className={"fables-second-text-color fables-main-hover-color"}>
            {" Kunjungan Edukasi"}
          </a>
        </h2>
      </div>
      <div className={"col-12 col-sm-4 mb-4 wow fadeInUpBig"}>
        <div className={"image-container translate-effect-right"}>
          <a href={"#"}>
            <MissingImage alt={""} className={"img-fluid w-100"} />
          </a>
        </div>
        <h2 className={"font-22 mt-3 mb-2 d-block text-center text-md-left"}>
          <a href={"#"} className={"fables-second-text-color fables-main-hover-color"}>
            {" Qur'an Camp"}
          </a>
        </h2>
      </div>
      <div className={"col-12 col-sm-4 mb-4 wow fadeInUpBig"}>
        <div className={"image-container translate-effect-right"}>
          <a href={"#"}>
            <MissingImage alt={""} className={"img-fluid w-100"} />
          </a>
        </div>
        <h2 className={"font-22 mt-3 mb-2 d-block text-center text-md-left"}>
          <a href={"#"} className={"fables-second-text-color fables-main-hover-color"}>
            {" Khotaman & imtihan Al-Quran"}
          </a>
        </h2>
      </div>
    </div>
    <div className={"row"}>
      <div className={"col-12 col-sm-4 mb-4 wow fadeInUpBig"}>
        <div className={"image-container translate-effect-right"}>
          <a href={"#"}>
            <MissingImage alt={""} className={"img-fluid w-100"} />
          </a>
        </div>
        <h2 className={"font-22 mt-3 mb-2 d-block text-center text-md-left"}>
          <a href={"#"} className={"fables-second-text-color fables-main-hover-color"}>
            {" Entrepreneurship Day"}
          </a>
        </h2>
      </div>
      <div className={"col-12 col-sm-4 mb-4 wow fadeInUpBig"}>
        <div className={"image-container translate-effect-right"}>
          <a href={"#"}>
            <MissingImage alt={""} className={"img-fluid w-100"} />
          </a>
        </div>
        <h2 className={"font-22 mt-3 mb-2 d-block text-center text-md-left"}>
          <a href={"#"} className={"fables-second-text-color fables-main-hover-color"}>
            {" Malam Bina Iman & Taqwa"}
          </a>
        </h2>
      </div>
    </div>
  </div>
  <div className={"container"}>
    <div className={"row"}>
      <div className={"col-12"}>
        <h2 className={"font-35 font-weight-bold fables-main-text-color my-3 my-lg-5 my-md-4 text-center"}>
          {"UA News"}
        </h2>
      </div>
      <div className={"col-12 col-md-4 mb-4 mb-lg-5 wow fadeIn"}>
        <div className={"position-relative"}>
          <div className={"image-container translate-effect-right"}>
            <a href={"#"}>
              <img src={"/assets/custom/images/DSCF9274.JPG"} alt={"SIT Ulil Albab"} className={"img-fluid w-100"} />
            </a>
            <span className={"above-date position-absolute text-center fables-second-background-color white-color px-3 py-2"}>
              <span className={"bold-font day"}>
                {"2"}
              </span>
              <span className={"month d-block"}>
                {"Juli"}
              </span>
            </span>
          </div>
          <h2 className={"font-18 my-3"}>
            <a href={"#"} className={"fables-main-text-color fables-second-hover-color"}>
              {"Wisuda SMPIT & SMAIT Ulil albab"}
            </a>
          </h2>
          <p className={"fables-forth-text-color font-14 mb-2"}>
            {" Pada tanggal 2 juni 2024 sit ulilalbab melepaskan sejumlah 43 siswa SMPIT Ulil Albab dan 10 Siswa SMAIT Ulil Albab Di Aula Saung Wulan. "}
          </p>
          <a href={""} className={"btn fables-second-text-color fables-main-hover-color p-0 font-15 border-0"}>
            {"Read More "}
            <i className={"fas fa-long-arrow-alt-right"}>
            </i>
          </a>
        </div>
      </div>
    </div>
  </div>
  </>;
}
