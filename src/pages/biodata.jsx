import React from 'react';
import MissingImage from '../components/MissingImage.jsx';

export default function Page() {
  return <>
  <div className={"card"}>
    <div className={"profile-img-container"}>
      <img src={"/assets/custom/images/Picsart_22-09-01_11-59-41-227.jpg"} alt={"Profile Image"} className={"profile-img"} />
    </div>
    <h1>
      {"MUHAMMAD RIZQI MAULANA"}
    </h1>
    <p className={"info-section"}>
      {"312210360 | Teknik Informatika"}
    </p>
    <p className={"info-section"}>
      {"Universitas Pelita Bangsa"}
    </p>
    <div className={"contact-info"}>
      <div>
        <i className={"fas fa-map-marker-alt"}>
        </i>
        {" Taman Wanasari Indah, Blok C4 No.8, Bekasi"}
      </div>
      <div>
        <i className={"fas fa-phone"}>
        </i>
        {" +62 881 759 7553"}
      </div>
      <div>
        <i className={"fas fa-envelope"}>
        </i>
        {" mrizqim01@gmail.com"}
      </div>
    </div>
    <div className={"motivation"}>
      {"\"Berusaha tanpa batas untuk mencapai tujuan tertinggi.\""}
    </div>
    <div className={"signature"}>
      <MissingImage alt={"Tanda Tangan"} />
      <div className={"signature-name"}>
        {"[MUHAMMAD RIZQI MAULANA]"}
      </div>
    </div>
  </div>
  </>;
}
