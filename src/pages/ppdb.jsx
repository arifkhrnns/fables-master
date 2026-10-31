import React from 'react';
import {site} from '../data/site.js';

export default function Page() {
  return <>
  <div className={"ppdb-header-section"} style={{"backgroundImage":"url(\"/assets/custom/images/UPACARA (1).jpg\")"}}>
    <div className={"ppdb-header-overlay"}>
    </div>
    <div className={"ppdb-header-container"}>
      <div className={"ppdb-header-content"}>
        <h1 className={"ppdb-header-title text-center"}>
          Portal PPDB {site.ppdbYear}
          <br />
          <span className={"ppdb-highlight-text"}>
            {"SIT Ulil Albab"}
          </span>
        </h1>
        <p className={"ppdb-header-description text-center"}>
          {" TKIT | SDIT | SMPIT | SMAIT "}
        </p>
        <div className={"text-center"}>
          <a href={"/form-ppdb.html"} className={"btn ppdb-primary-btn"}>
            Daftar {site.ppdbYear}
          </a>
        </div>
      </div>
    </div>
  </div>
  <section className={"ppdb-banner"}>
    <div className={"container"}>
      <h2 className={"fables-main-text-color font-35 font-weight-bold text-center mt-4 mt-lg-5"}>
        <span className={"fables-second-text-color"}>
          {"Penerimaan Peserta Didik baru "}
        </span>
      </h2>
      <p className={"font-20 text-center mb-4 mb-lg-5"}>
        Selamat datang di PPDB SIT Ulil Albab Tahun Ajaran {site.ppdbYear}
      </p>
    </div>
    <svg xmlns={"http://www.w3.org/2000/svg"} style={{"marginBottom":"-12px"}} viewBox={"0 0 1440 320"}>
      <path fill={"#f3f4f5"} fillOpacity={"1"} d={"M0,256L26.7,250.7C53.3,245,107,235,160,234.7C213.3,235,267,245,320,245.3C373.3,245,427,235,480,218.7C533.3,203,587,181,640,165.3C693.3,149,747,139,800,160C853.3,181,907,235,960,256C1013.3,277,1067,267,1120,240C1173.3,213,1227,171,1280,154.7C1333.3,139,1387,149,1413,154.7L1440,160L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"}>
      </path>
    </svg>
  </section>
  <section className={"ppdb-info"}>
    <div className={"container"}>
      <h2 className={"ppdb-section-title"}>
        {"Kenapa Memilih SIT Ulil Albab?"}
      </h2>
      <div className={"ppdb-info-grid"}>
        <div className={"ppdb-info-item"}>
          <h3>
            {"Lingkungan Islami"}
          </h3>
          <p>
            {"Kami menyediakan lingkungan yang islami, kondusif, dan nyaman untuk perkembangan peserta didik."}
          </p>
        </div>
        <div className={"ppdb-info-item"}>
          <h3>
            {"Program Unggulan"}
          </h3>
          <p>
            {"Beragam program unggulan seperti Tahfidz, Qur'an Camp, dan Edukasi berbasis IT yang mendukung pembelajaran."}
          </p>
        </div>
        <div className={"ppdb-info-item"}>
          <h3>
            {"Fasilitas Lengkap"}
          </h3>
          <p>
            {"Fasilitas belajar modern dan lengkap untuk menunjang kegiatan belajar dan mengajar."}
          </p>
        </div>
      </div>
    </div>
  </section>
  <section className={"ppdb-steps"}>
    <div className={"container"}>
      <h2 className={"ppdb-section-title"}>
        {"Langkah-langkah Pendaftaran"}
      </h2>
      <div className={"ppdb-step-grid"}>
        <div className={"ppdb-step-item"}>
          <span className={"step-number"}>
            {"1"}
          </span>
          <h3>
            {"Isi Formulir Pendaftaran"}
          </h3>
          <p>
            {"Isi data diri dan informasi lengkap pada formulir pendaftaran online."}
          </p>
        </div>
        <div className={"ppdb-step-item"}>
          <span className={"step-number"}>
            {"2"}
          </span>
          <h3>
            {"Verifikasi Berkas"}
          </h3>
          <p>
            {"Verifikasi berkas administrasi secara online melalui akun yang telah didaftarkan."}
          </p>
        </div>
        <div className={"ppdb-step-item"}>
          <span className={"step-number"}>
            {"3"}
          </span>
          <h3>
            {"Pengumuman Hasil"}
          </h3>
          <p>
            {"Pengumuman hasil seleksi akan diinformasikan melalui email dan website resmi."}
          </p>
        </div>
      </div>
    </div>
  </section>
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
    <div className={"institusi-cards"}>
      <div className={"institusi-card"}>
        <div className={"institusi-image"}>
          <img src={"/assets/custom/images/logo_tk.jpg"} alt={"TKIT Image"} />
        </div>
        <div className={"institusi-content"}>
          <h3>
            {"TKIT"}
          </h3>
          <p>
            {"Ulil Albab"}
          </p>
          <div className={"visi-misi"}>
            <h4>
              {"Visi Misi"}
            </h4>
            <button type="button" className={"btn brosur-btn"} disabled>
              {"Brosur belum tersedia"}
            </button>
          </div>
        </div>
      </div>
      <div className={"institusi-card"}>
        <div className={"institusi-image"}>
          <img src={"/assets/custom/images/logo_sd.png"} alt={"SDIT Image"} />
        </div>
        <div className={"institusi-content"}>
          <h3>
            {"SDIT"}
          </h3>
          <p>
            {"Ulil Albab"}
          </p>
          <div className={"visi-misi"}>
            <h4>
              {"Visi Misi"}
            </h4>
            <button type="button" className={"btn brosur-btn"} disabled>
              {"Brosur belum tersedia"}
            </button>
          </div>
        </div>
      </div>
      <div className={"institusi-card"}>
        <div className={"institusi-image"}>
          <img src={"/assets/custom/images/logo_smp.png"} alt={"SMPIT Image"} />
        </div>
        <div className={"institusi-content"}>
          <h3>
            {"SMPIT"}
          </h3>
          <p>
            {"Ulil Albab"}
          </p>
          <div className={"visi-misi"}>
            <h4>
              {"Visi Misi"}
            </h4>
            <button type="button" className={"btn brosur-btn"} disabled>
              {"Brosur belum tersedia"}
            </button>
          </div>
        </div>
      </div>
      <div className={"institusi-card"}>
        <div className={"institusi-image"}>
          <img src={"/assets/custom/images/logo_sma.png"} alt={"SMAIT Image"} />
        </div>
        <div className={"institusi-content"}>
          <h3>
            {"SMAIT"}
          </h3>
          <p>
            {"Ulil Albab"}
          </p>
          <div className={"visi-misi"}>
            <h4>
              {"Visi Misi"}
            </h4>
            <button type="button" className={"btn brosur-btn"} disabled>
              {"Brosur belum tersedia"}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section className={"ppdb-contact"}>
    <div className={"container"}>
      <h2 className={"ppdb-section-title"}>
        {"Hubungi Kami"}
      </h2>
      <p className={"ppdb-contact-text"}>
        {"Jika Anda membutuhkan informasi lebih lanjut, jangan ragu untuk menghubungi kami melalui:"}
      </p>
      <a href={"https://api.whatsapp.com/send?phone=+6282122037474&text=Assalamu'alaikum, saya mau bertanya tentang PPDB SIT Ulil Albab"} className={"ppdb-whatsapp-btn"} target={"_blank"} rel={"noopener noreferrer"}>
        {"Hubungi via WhatsApp"}
      </a>
    </div>
  </section>
  </>;
}
