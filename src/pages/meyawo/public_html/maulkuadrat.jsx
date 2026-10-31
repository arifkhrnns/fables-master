import React from 'react';
import CurrentYear from '../../../components/CurrentYear.jsx';


export default function Page({year}) {
  return <>
  <nav className={"custom-navbar"} data-spy={"affix"} data-offset-top={"20"}>
    <div className={"container"}>
      <a className={"logo"} href={"/404.html"}>
        <img src={"/meyawo/public_html/assets/imgs/logo-upb.png"} alt={"Logo UPB"} />
      </a>
      <a className={"logo-right"} href={"/404.html"}>
        <img src={"/meyawo/public_html/assets/imgs/A4_logo.png"} alt={"Logo Right"} />
      </a>
    </div>
  </nav>
  <header id={"home"} className={"header"}>
    <div className={"overlay"}>
    </div>
    <div className={"header-content container"}>
      <div className={"profile-photo"}>
        <img src={"/meyawo/public_html/assets/imgs/maul.png"} alt={"Muhammad Rizqi Maulana"} />
      </div>
      <h1 className={"header-title"}>
        <span className={"down"}>
          {"Muhammad Rizqi Maulana"}
        </span>
      </h1>
      <p className={"header-subtitle"}>
        {"312210360"}
      </p>
      <div className={"contact-info"}>
        <div className={"info-item"}>
          <i className={"fas fa-phone-alt"}>
          </i>
          <span>
            {"08817597553"}
          </span>
        </div>
        <div className={"info-item"}>
          <i className={"fas fa-envelope"}>
          </i>
          <span>
            {"mrizqim01@gmail.com"}
          </span>
        </div>
        <div className={"info-item"}>
          <i className={"fas fa-map-marker-alt"}>
          </i>
          <span className={"location-text"}>
            {"Lokasi"}
          </span>
        </div>
      </div>
      <div className={"map-container"}>
        <iframe src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.111586953486!2d106.98860791526998!3d-6.234892695639629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6992f37a8cd705%3A0xa2fddfc74ff55eab!2sTaman%20Wanasari%20Indah%20Blok%20C4%20No.8%2C%20Bekasi!5e0!3m2!1sen!2sid!4v1635419717995!5m2!1sen!2sid"} width={"100%"} height={"100"} style={{"border":"0"}} allowFullScreen={true} loading={"lazy"} title={"Peta lokasi"}>
        </iframe>
      </div>
    </div>
  </header>
  <div className={"container"}>
    <footer className={"footer"}>
      <p className={"mb-0"}>
        {"Copyright "}
        <CurrentYear initialYear={year} />
        {" © "}
        <a href={"#"}>
          {"maulkuadrat"}
        </a>
      </p>
      <div className={"social-links text-right m-auto ml-sm-auto"}>
        <span className={"link"} aria-label="Facebook: tautan belum tersedia">
          <i className={"ti-facebook"}>
          </i>
        </span>
        <span className={"link"} aria-label="Google: tautan belum tersedia">
          <i className={"ti-google"}>
          </i>
        </span>
        <span className={"link"} aria-label="Instagram: tautan belum tersedia">
          <i className={"ti-instagram"}>
          </i>
        </span>
      </div>
    </footer>
  </div>
  </>;
}
