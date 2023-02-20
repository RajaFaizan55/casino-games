import React from "react";

import facebook from "../../assets/social/facebook.svg";
import insta from "../../assets/social/insta.svg";
import telegram from "../../assets/social/telegram.svg";
import twiter from "../../assets/social/twiter.svg";
import logo from "../../assets/header/logo.png";
import style from "./footer.module.scss";
import Container from "../../components/container";

const Footer = () => {
  return (
    <Container>
      <div className={style.wraper}>
        <div className={style.logoSec}>
          <input placeholder="Enter Your Email" />
          <button>SUBSCRIBE US</button>
          <h1>Social</h1>
          <div className={style.borderDiv}>
            <img alt='icon' src={facebook} width={20} style={{ marginRight: "10px" }} />
            <img alt='icon' src={insta} width={20} style={{ marginRight: "10px" }} />
            <img alt='icon' src={telegram} width={20} style={{ marginRight: "10px" }} />
            <img alt='icon' src={twiter} width={20} />
          </div>
        </div>
        <div className={style.paymentMethod}>
          <a href="#top" rel="noreferrer">
            <img alt='icon' src={logo} style={{ marginRight: "30px" }} />
          </a>
          <span>@2022 CRIC ADDA, ALL RIGHTS RESERVED</span>
        </div>
        <div className={style.logoSec}>
          <h1>Contact Us</h1>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span>+971 528288562</span>
            <span>+971 528288562</span>
          </div>
          <h3>Get It Now</h3>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
