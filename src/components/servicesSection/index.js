import React from "react";
import FlipCard from "../flip-card";
import ReactWhatsapp from "react-whatsapp";

import bg1 from "../../assets/bg1.jpg";
import bg2 from "../../assets/bg2.jpg";

import s1 from "../../assets/Sports/1.jpg";
import s3 from "../../assets/Sports/2.jpg";
import s4 from "../../assets/Sports/3.jpg";
import s6 from "../../assets/Sports/5.jpg";
import s7 from "../../assets/Sports/6.jpg";
import s8 from "../../assets/Sports/7.jpg";
import s9 from "../../assets/Sports/8.jpg";
import s10 from "../../assets/Sports/9.jpg";
import s11 from "../../assets/Sports/10.jpg";
import s12 from "../../assets/Sports/11.jpg";
import s13 from "../../assets/Sports/12.jpg";
import s14 from "../../assets/Sports/13.jpg";
import s15 from "../../assets/Sports/14.jpg";
import s16 from "../../assets/Sports/15.jpg";
import s17 from "../../assets/Sports/16.jpg";
import s18 from "../../assets/Sports/17.jpg";
import s19 from "../../assets/Sports/18.jpg";
import s20 from "../../assets/Sports/19.jpg";
import s21 from "../../assets/Sports/20.jpg";
import s22 from "../../assets/Sports/21.jpg";
import s23 from "../../assets/Sports/23.jpg";
import s24 from "../../assets/Sports/24.jpg";
import s25 from "../../assets/Sports/25.jpg";
import s26 from "../../assets/Sports/26.jpg";
import s27 from "../../assets/Sports/27.jpg";
import s28 from "../../assets/Sports/28.jpg";
import s29 from "../../assets/Sports/29.jpg";
import s30 from "../../assets/Sports/30.jpg";

import style from "./service.module.scss";
import Container from "../../components/container";

const ServicesSection = () => {
  return (
    <Container>
      <div className={style.wraper}>
        <a rel="noreferrer" href="https://wa.me/+971528588562" target="_blank">
          <div className={style.bannerSec} id={"sports"}>
            <div className={style.bannver1}>
              <img alt='icon' src={bg1} className={style.binnaryImg} />
            </div>
            <div className={style.bannver1}>
              <img alt='icon' src={bg2} className={style.binnaryImg} />
            </div>
          </div>
        </a>

        <div className={style.cardSec}>
          {sports.map(({ icon, casino }) => {
            return (
              <ReactWhatsapp number=" +971528588562" message="Hello World!!!">
                <FlipCard
                  imgText={"Tab 1"}
                  fimg={icon}
                  width={100}
                  height={100}
                  casino={casino}
                  className={style.card}
                />
              </ReactWhatsapp>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default ServicesSection;

const sports = [
  { icon: s1, casino: "casino" },
  { icon: s3, casino: "casino" },
  { icon: s4, casino: "casino" },
  { icon: s4, casino: "casino" },
  { icon: s6, casino: "casino" },
  { icon: s7, casino: "casino" },
  { icon: s8, casino: "casino" },
  { icon: s9, casino: "casino" },
  { icon: s10, casino: "casino" },
  { icon: s11, casino: "casino" },
  { icon: s12, casino: "casino" },
  { icon: s13, casino: "casino" },
  { icon: s14, casino: "casino" },
  { icon: s15, casino: "casino" },
  { icon: s16, casino: "casino" },
  { icon: s17, casino: "casino" },
  { icon: s18, casino: "casino" },
  { icon: s19, casino: "casino" },
  { icon: s20, casino: "casino" },
  { icon: s21, casino: "casino" },
  { icon: s22, casino: "casino" },
  { icon: s23, casino: "casino" },
  { icon: s24, casino: "casino" },
  { icon: s25, casino: "casino" },
  { icon: s26, casino: "casino" },
  { icon: s27, casino: "casino" },
  { icon: s28, casino: "casino" },
  { icon: s29, casino: "casino" },
  { icon: s30, casino: "casino" },
  { icon: s13, casino: "casino" },
];
