import React, { useState } from "react";
import FlipCard from "../flip-card";

import whatsappIcon from "../../assets/whatsapp3.png";
import bg from "../../assets/bgstadium.png";


import id1 from "../../assets/Ids/image1.jpg";
import id2 from "../../assets/Ids/image2.jpg";
import id3 from "../../assets/Ids/image3.jpg";
import id4 from "../../assets/Ids/image4.jpg";
import id5 from "../../assets/Ids/image5.jpg";
import id6 from "../../assets/Ids/image6.jpg";
import id7 from "../../assets/Ids/image7.jpg";
import id8 from "../../assets/Ids/image8.jpg";
import id9 from "../../assets/Ids/image10.jpg";
import id10 from "../../assets/Ids/11.jpg";
import id11 from "../../assets/Ids/12.jpg";
import id12 from "../../assets/Ids/13.jpg";

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
import c21 from "../../assets/casinoIcon/21.jpg";
import c22 from "../../assets/casinoIcon/22.jpg";
import c23 from "../../assets/casinoIcon/23.jpg";
import c24 from "../../assets/casinoIcon/24.jpg";
import c25 from "../../assets/casinoIcon/25.jpg";
import c26 from "../../assets/casinoIcon/26.jpg";
import c27 from "../../assets/casinoIcon/27.jpg";
import c28 from "../../assets/casinoIcon/28.jpg";
import c29 from "../../assets/casinoIcon/29.jpg";
import c30 from "../../assets/casinoIcon/30.jpg";
import c31 from "../../assets/casinoIcon/31.jpg";
import c32 from "../../assets/casinoIcon/32.jpg";
import c33 from "../../assets/casinoIcon/33.jpg";
import c34 from "../../assets/casinoIcon/34.jpg";
import c35 from "../../assets/casinoIcon/35.jpg";
import c36 from "../../assets/casinoIcon/36.jpg";
import c37 from "../../assets/casinoIcon/37.jpg";

import style from "./filter.module.scss";

const FilterSection = () => {
  const [active, setActive] = useState(0);
  return (
    <div
      style={{ backgroundImage: `url(${bg})`, backgroundSize: "100% 100%" }}
      id={"home"}
    >
      <div className={style.filter}>
        {pageData.map(({ name }, index) => {
          return (
            <div onClick={() => setActive(index)} className={style.btn}>
              {name}
            </div>
          );
        })}
      </div>
      <div className={style.wraper}>
        <div className={style.sec2}>
          {active === 0 && (
            <div className={style.cardDiv}>
              {ids.map(({ icon, empty }) => {
                return (
                  <div>
                    <a
                      href="https://wa.me/+919913044444"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FlipCard
                        imgText={"Tab 1"}
                        fimg={icon}
                        // width={100}
                        // height={100}
                        empty={empty}
                        className={style.card}
                      />
                    </a>
                  </div>
                );
              })}
            </div>
          )}
          {active === 1 && (
            <div className={style.cardDiv}>
              {sports.map(({ icon, empty, casino }) => {
                return (
                  <a
                    href="https://wa.me/+919913044444"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FlipCard
                      imgText={"Tab 1"}
                      fimg={icon}
                      // width={100}
                      // height={100}
                      empty={empty}
                      casino={casino}
                      className={style.card}
                    />
                  </a>
                );
              })}
            </div>
          )}
          {active === 2 && (
            <div className={style.cardDiv}>
              {casino.map(({ icon, empty }) => {
                return (
                  <a
                    href="https://wa.me/+919913044444"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FlipCard
                      imgText={"Tab 1"}
                      fimg={icon}
                      // width={100}
                      // height={100}
                      empty={empty}
                      casino={casino}
                      className={style.card}
                    />
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterSection;

const pageData = [
  { name: "PERMINUM SITES" },
  { name: "SPORTS" },
  { name: "CASINO" },
];

const ids = [
  { icon: id1 },
  { icon: id2 },
  { icon: id3 },
  { icon: id4 },
  { icon: id5 },
  { icon: id6 },
  { icon: id7 },
  { icon: id8 },
  { icon: id9 },
  { icon: id10 },
  { icon: id11 },
  { icon: id12 },
];

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
  { icon: whatsappIcon, empty: true },
];

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
  { icon: c21, casino: "casino" },
  { icon: c22, casino: "casino" },
  { icon: c23, casino: "casino" },
  { icon: c24, casino: "casino" },
  { icon: c25, casino: "casino" },
  { icon: c26, casino: "casino" },
  { icon: c27, casino: "casino" },
  { icon: c28, casino: "casino" },
  { icon: c29, casino: "casino" },
  { icon: c30, casino: "casino" },
  { icon: c31, casino: "casino" },
  { icon: c32, casino: "casino" },
  { icon: c33, casino: "casino" },
  { icon: c34, casino: "casino" },
  { icon: c35, casino: "casino" },
  { icon: c36, casino: "casino" },
  { icon: c37, casino: "casino" },
];
