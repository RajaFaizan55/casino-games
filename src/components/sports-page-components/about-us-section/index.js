import React from "react";

import whatsapp from "../../../assets/sports-icons/Social/whatsapp.png";
import style from "./about.module.scss";

const AboutUs = () => {
  return (
    <div className={style.wraper} id={"about"}>
      <h1 id={"about"}>About Us</h1>
      <span style={{ color: "orange" }} className={style.WeAre}>
        WE ARE
      </span>{" "}
      <span className={style.WeAre}>CRICADDA</span>
      <p>THE BIGGEST PLATFORM FOR</p>
      <p style={{ marginBottom: "25px" }}>
        PROVIDING ONLINE SPORTS BETTING ID'S
      </p>
      <div className={style.desc}>
        <span
          style={{
            color: "orange",
            fontFamily: "fantasy",
            fontSize: "14px",
            margin: "15px 0px",
          }}
        >
          Welcome to Cricadda,We are India's No 1 Exchange and the First That
          Provide 24*7 Withdrawal Facility.We offer you a genuinely unique
          sports betting experience.Besides,We also offer global liquidity ,
          best industry pricing with a single click.
        </span>
      </div>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ marginTop: "50px" }}
      >
        <a rel="noreferrer" href="https://wa.me/+919913044444" target="_blank">
          <div className={style.num}>
            <span>+91 9913044444</span>
            <img alt='icon' src={whatsapp} style={{ marginLeft: "10px" }} />
          </div>
        </a>
        <a rel="noreferrer" href="https://wa.me/+919913044444" target="_blank">
          <div className={style.num}>
            <span>+91 9913044444</span>
            <img alt='icon' src={whatsapp} width={30} style={{ marginLeft: "10px" }} />
          </div>
        </a>
      </div>
    </div>
  );
};

export default AboutUs;
