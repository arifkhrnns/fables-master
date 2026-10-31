import React from 'react';


export default function Page() {
  return <>
  <div className={"fables-header fables-after-overlay"}>
    <div className={"container"}>
      <h2 className={"fables-page-title fables-second-border-color"}>
        {"404"}
      </h2>
    </div>
  </div>
  <div className={"container"}>
    <div className={"row"}>
      <div className={"col-12 col-lg-6 offset-lg-3"}>
        <div className={"text-center my-4 my-lg-5 py-4 py-lg-5"}>
          <h1 className={"fables-second-text-color font-250 font-weight-bold"}>
            {" 404 "}
          </h1>
          <h3 className={"font-30 font-weight-bold fables-second-text-color"}>
            {"Halaman Ini Sedang Dalam Perbaikan"}
          </h3>
          <p className={"font-20 fables-fifth-text-color my-2"}>
            {"Maaf, Untuk Saat Ini Halaman Ini Belum Tersedia"}
          </p>
          <a href={"/index.html"} className={"btn fables-second-border-color fables-btn-rounded fables-background-link font-20  px-5 py-2 mt-4"}>
            {"Kembali Ke Beranda"}
          </a>
        </div>
      </div>
    </div>
  </div>
  </>;
}
