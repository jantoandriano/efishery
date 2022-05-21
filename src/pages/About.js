import React from "react";
import LogoEfishery from "../assets/images/logo-green-2.png";

function About() {
  return (
    <>
      <div className="about-container">
        <div className="about-wrapper">
          <img className="about-logo" src={LogoEfishery} alt="Logo Efishery" />

          <div className="about-heading">eFishery Technoplex</div>
          <div className="about-heading-2">
            PT Multidaya Teknologi Nusantara
          </div>
          <div className="about-address">
            Jl. Bukit Pakar Timur IV Kav. B1, Ciburial, Kecamatan Cimenyan,
            Bandung, Jawa Barat, 40198
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
