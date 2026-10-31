import React from 'react';


export default function Page() {
  return <>
  <div className={"fables-page-content fables-light-gary-background py-1"} id={"visi-misi"}>
    <div className={"container"}>
      <h1 className={"fables-main-text-color font-35 font-weight-bold text-center mt-4 mt-lg-5"}>
        <span className={"fables-second-text-color"}>
          {"VISI "}
        </span>
        {"&"}
        <span className={"fables-second-text-color"}>
          {" MISI"}
        </span>
      </h1>
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
  </>;
}
