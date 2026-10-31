import React from 'react';


export default function Page() {
  return <>
  <div className={"container my-5"}>
    <h1 className={"fables-main-text-color font-35 font-weight-bold text-center mt-4 mt-lg-5 mb-4"}>
      {" Yayasan SIT Ulil Albab "}
    </h1>
    <div className={"text-center"}>
      <img src={"/assets/custom/images/bg-yys.png"} alt={"Foto Yayasan SIT Ulil Albab"} className={"img-fluid"} style={{"maxWidth":"100%","height":"auto","borderRadius":"10px"}} />
    </div>
  </div>
  <div className={"fables-page-content py-1"} id={"sejarah-singkat"}>
    <div className={"container"}>
      <h2 className={"fables-main-text-color font-35 font-weight-bold text-center mt-4 mt-lg-5"}>
        {" Sejarah Singkat "}
      </h2>
      <p className={"font-25 text-center mb-4"}>
        {"SIT Ulil Albab"}
      </p>
      <div className={"text-center my-4 my-md-5"}>
        <div className={"col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2"}>
          <p className={"fables-forth-text-color font-italic font-20 text-justify"}>
            {" SIT Ulil Albab didirikan dengan visi untuk menjadi lembaga pendidikan unggul yang berlandaskan nilai-nilai Islami. Bermula dari sebuah kelompok kecil yang berkomitmen dalam pengajaran Al-Qur'an dan pendidikan karakter, SIT Ulil Albab tumbuh pesat dan kini memiliki empat unit pendidikan: TK, SD, SMP, dan SMA. Setiap unit berfokus pada pembentukan generasi yang cerdas, berakhlak, dan mampu menghadapi tantangan global tanpa melupakan nilai-nilai keislaman. "}
          </p>
          <p className={"fables-forth-text-color font-italic font-20 text-justify"}>
            {" Sejak didirikan, SIT Ulil Albab telah mencetak alumni berprestasi dalam berbagai bidang dan terus berkembang untuk memberikan pendidikan berkualitas yang relevan dengan perkembangan zaman, namun tetap berpegang pada prinsip-prinsip Islam. "}
          </p>
        </div>
      </div>
    </div>
  </div>
  </>;
}
