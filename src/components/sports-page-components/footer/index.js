import React from "react";

import expLogo from "../../../assets/sports-icons/explogo.png";
import logo from "../../../assets/sports-icons/logo.png";

import facebook from "../../../assets/sports-icons/Social/fb.png";
import youtube from "../../../assets/sports-icons/Social/youtube.png";
import insta from "../../../assets/sports-icons/Social/instagram.png";
import telegram from "../../../assets/sports-icons/Social/telegram.png";
import twiter from "../../../assets/sports-icons/Social/twitter.png";

import style from "./footer.module.scss";

const Footer = () => {
  return (
    <>
      <div className={style.wraper}>
        <div>
          <img alt='icon' src={expLogo} className={style.logo} />
        </div>
        <div>
          <a rel="noreferrer" href={"#top"}>
            <img alt='icon' src={logo} className={style.logo} />
          </a>
        </div>
        <div className={style.social}>
          <a rel="noreferrer" href="https://www.facebook.com/login/" target="_blank">
            <img
              alt='icon' src={facebook}
              width={20}
              style={{ marginRight: "10px" }}
              className={style.neonimg}
            />
          </a>
          <a rel="noreferrer" href="https://www.youtube.com/" target="_blank">
            <img
              alt='icon' src={youtube}
              style={{ marginRight: "10px", width: "50px !important" }}
              className={style.neonimg}
            />
          </a>
          <a rel="noreferrer" href="https://www.instagram.com/accounts/login/" target="_blank">
            <img
              alt='icon' src={insta}
              width={20}
              style={{ marginRight: "10px" }}
              className={style.neonimg}
            />
          </a>
          <a rel="noreferrer" href="https://telegr.am/user_mgt/login" target="_blank">
            <img
              alt='icon' src={telegram}
              width={20}
              style={{ marginRight: "10px" }}
              className={style.neonimg}
            />
          </a>
          <a rel="noreferrer" href="https://twitter.com/login" target="_blank">
            <img alt='icon' src={twiter} width={20} className={style.neonimg} />
          </a>
        </div>
      </div>

      <div className={style.rights}>
        <p>
          <span style={{ color: "orange" }}> 2022 </span> CRICADDA ALL RIGHTS
          RESERVED
        </p>
      </div>
    </>
  );
};

export default Footer;
