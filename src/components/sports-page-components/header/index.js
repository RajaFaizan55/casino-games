import React from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

// import pic1 from "../../../assets/sports-icons/header.jpg";
import pic2 from "../../../assets/sports-icons/banners/2.jpg";
import pic3 from "../../../assets/sports-icons/banners/3.jpg";
import pic1 from "../../../assets/sports-icons/banners/5.jpg";
import logo from "../../../assets/sports-icons/logo.png";

import fb from "../../../assets/sports-icons/Social/fb.png";
import youtube from "../../../assets/sports-icons/Social/youtube.png";
import insta from "../../../assets/sports-icons/Social/instagram.png";
import telegram from "../../../assets/sports-icons/Social/telegram.png";
import twiter from "../../../assets/sports-icons/Social/twitter.png";

import style from "./head.module.scss";
import MobileView from "./mobile-view";
import MoveText from "../../move-text";
import { useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className={style.wraper} id={"top"}>
        <a rel="noreferrer" href="#about">
          <p>ABOUT US</p>
        </a>
        <a rel="noreferrer" href={"#whycric"}>
          <p>WHY CRICADDA</p>
        </a>
        <a rel="noreferrer" href={"#work"}>
          <p>HOW IT WORKS</p>
        </a>
        <div>
          <img src={logo} width={300} alt='icon' />
        </div>
        <div style={{ position: "relative" }}>
          <p onClick={() => setToggle(!toggle)}>PREMIUM SITES</p>
          {toggle && (
            <div className={style.dropDown}>
              <a rel="noreferrer" href="https://wa.me/+971528588562" target="_blank">
                <p onClick={() => setToggle(false)}>CRIC ADDA</p>
              </a>
              <p onClick={() => setToggle(false)}>CRIC ADDA</p>
              <p onClick={() => setToggle(false)}>CRIC ADDA</p>
              <p onClick={() => setToggle(false)}>CRIC ADDA</p>
              <p onClick={() => setToggle(false)}>CRIC ADDA</p>
              <p onClick={() => setToggle(false)}>CRIC ADDA</p>
              <p onClick={() => setToggle(false)}>CRIC ADDA</p>
              <p onClick={() => setToggle(false)}>CRIC ADDA</p>
              <p onClick={() => setToggle(false)}>CRIC ADDA</p>
            </div>
          )}
        </div>
        <a rel="noreferrer" href={"#vid"}>
          <p>CELEBS LOVE US</p>
        </a>
        <a rel="noreferrer" href="#contact">
          <p>CONTACT</p>
        </a>
      </div>
      {/* ////////social ////////////////////// */}
      <div className={style.social}>
        <a rel="noreferrer" href="https://www.facebook.com/login/" target="_blank">
          <img
          alt='icon'
            src={fb}
            width={20}
            style={{ marginRight: "10px" }}
            className={style.neonimg}
          />
        </a>
        <a rel="noreferrer" href="https://www.youtube.com/" target="_blank">
          <img
            src={youtube}
            style={{ marginRight: "10px", width: "50px !important" }}
            className={style.neonimg}
            alt='ison'
          />
        </a>
        <a rel="noreferrer" href="https://www.instagram.com/accounts/login/" target="_blank">
          <img
            src={insta}
            width={20}
            style={{ marginRight: "10px" }}
            className={style.neonimg}
            alt='ison'
          />
        </a>
        <a rel="noreferrer" href="https://telegr.am/user_mgt/login" target="_blank">
          <img
            src={telegram}
            width={20}
            style={{ marginRight: "10px" }}
            className={style.neonimg}
            alt='icon'
          />
        </a>
        <a rel="noreferrer" href="https://twitter.com/login" target="_blank">
          <img src={twiter} width={20} className={style.neonimg} alt='icon' />
        </a>
      </div>

      <MobileView />

      <MoveText
        text={
          " INSTANT 24/7 WITHDRAWAL  |  PREMIUM SITES  |  24/7 CUSTOMER SPORT"
        }
      />

      <div>
        <MDBCarousel showControls showIndicators>
          <MDBCarouselItem
            className="w-100 d-block"
            itemId={1}
            src={pic1}
            alt="..."
          />
          <MDBCarouselItem
            className="w-100 d-block"
            itemId={2}
            src={pic2}
            alt="..."
          />
          <MDBCarouselItem
            className="w-100 d-block"
            itemId={3}
            src={pic3}
            alt="..."
          />
        </MDBCarousel>
      </div>
    </>
  );
};

export default Header;
