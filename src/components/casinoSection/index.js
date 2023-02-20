import React from "react";
import FlipCard from "../flip-card";
import ReactWhatsapp from "react-whatsapp";

import c1 from "../../assets/casinoIcon/1.jpg";
import c2 from "../../assets/casinoIcon/2.jpg";
import c3 from "../../assets/casinoIcon/3.jpg";
import c4 from "../../assets/casinoIcon/4.jpg";
import c5 from "../../assets/casinoIcon/5.jpg";
import c7 from "../../assets/casinoIcon/7.jpg";
import c8 from "../../assets/casinoIcon/8.jpg";
import c9 from "../../assets/casinoIcon/9.jpg";
import c10 from "../../assets/casinoIcon/10.jpg";
import c11 from "../../assets/casinoIcon/11.jpg";
import c12 from "../../assets/casinoIcon/12.jpg";
import c13 from "../../assets/casinoIcon/13.jpg";
import c14 from "../../assets/casinoIcon/14.jpg";
import c15 from "../../assets/casinoIcon/15.jpg";
import c16 from "../../assets/casinoIcon/16.jpg";
import c17 from "../../assets/casinoIcon/17.jpg";
import c18 from "../../assets/casinoIcon/18.jpg";
import c19 from "../../assets/casinoIcon/19.jpg";
import c20 from "../../assets/casinoIcon/20.jpg";

import part1 from "../../assets/part1.jpg";
import part2 from "../../assets/part2.jpg";
import part3 from "../../assets/part3.jpg";
import style from "./casino.module.scss";
import Container from "../../components/container";

const CasinoSection = () => {
  return (
    <Container>
      <div className={style.wraper}>
        <a rel="noreferrer" href="https://wa.me/+971528588562" target="_blank">
          <div className={style.bannerSec} id={"casino"}>
            <div className={style.bannver1}>
              <img alt='icon' src={part1} className={style.binnaryImg} />
            </div>
            <div className={style.bannver1}>
              <img alt='icon' src={part2} className={style.binnaryImg} />
            </div>
            <div className={style.bannver1}>
              <img alt='icon' src={part3} className={style.binnaryImg} />
            </div>
          </div>
        </a>

        <div className={style.cardSec}>
          {casino.map(({ icon, casino }) => {
            return (
              <ReactWhatsapp number="1-212-736-5000" message="Hello World!!!">
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

export default CasinoSection;

const casino = [
  { icon: c1, casino: "casino" },
  { icon: c2, casino: "casino" },
  { icon: c3, casino: "casino" },
  { icon: c4, casino: "casino" },
  { icon: c5, casino: "casino" },
  { icon: c7, casino: "casino" },
  { icon: c8, casino: "casino" },
  { icon: c9, casino: "casino" },
  { icon: c10, casino: "casino" },
  { icon: c11, casino: "casino" },
  { icon: c12, casino: "casino" },
  { icon: c13, casino: "casino" },
  { icon: c14, casino: "casino" },
  { icon: c15, casino: "casino" },
  { icon: c16, casino: "casino" },
  { icon: c17, casino: "casino" },
  { icon: c18, casino: "casino" },
  { icon: c19, casino: "casino" },
  { icon: c20, casino: "casino" },
  { icon: c5, casino: "casino" },
];
