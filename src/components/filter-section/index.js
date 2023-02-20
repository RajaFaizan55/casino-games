import React, { useState } from "react";
import FlipCard from "../flip-card";
import ReactWhatsapp from "react-whatsapp";

import whatsappIcon from "../../assets/whatsapp3.png";
import bg from "../../assets/bgstadium.png";

import p1 from "../../assets/PaymentIcons/visa-icon.svg";
import p2 from "../../assets/PaymentIcons/p10.svg";
import p3 from "../../assets/PaymentIcons/p9.svg";
import p5 from "../../assets/PaymentIcons/p6.svg";
import bank from "../../assets/bank.png";
import paytm from "../../assets/paytm.png";
import phonepe from "../../assets/phonepe.png";

import id1 from "../../assets/Ids/image1.jpg";
import id2 from "../../assets/Ids/image2.jpg";
import id3 from "../../assets/Ids/image3.jpg";
import id4 from "../../assets/Ids/image4.jpg";
import id5 from "../../assets/Ids/image5.jpg";
import id6 from "../../assets/Ids/image6.jpg";
import id7 from "../../assets/Ids/image7.jpg";
import id8 from "../../assets/Ids/image8.jpg";
import id9 from "../../assets/Ids/image10.jpg";

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

import style from "./filter.module.scss";
import Container from "../../components/container/index";

const FilterSection = () => {
  const [active, setActive] = useState(0);
  return (
    <Container>
      <div
        style={{ backgroundImage: `url(${bg})`, backgroundSize: "100% 100%" }}
        id={"home"}
      >
        <div className={style.filter}>
          {pageData.map(({ name }, index) => {
            return (
              <div
                onClick={() => setActive(index)}
                style={{
                  backgroundColor: "#212529",
                  borderRadius: "8px",
                  margin: "10px",
                  color: "#fff",
                  padding: "0px 50px",
                  marginRight: "10px",
                  cursor: "pointer",
                }}
                className={style.btn}
              >
                {name}
              </div>
            );
          })}
        </div>
        <div className={style.wraper}>
          <div className={style.sec1}>
            <div className={style.menu}>
              <a rel="noreferrer" href={"#home"}>
                <p>ID</p>
              </a>
              <a rel="noreferrer" href={"#sports"}>
                <p>SPORTS</p>
              </a>
              <a rel="noreferrer" href={"#casino"}>
                <p>CASINO</p>
              </a>
            </div>
            <div className={style.paymentMethod}>
              <div>
                <h2>Payment Method</h2>
              </div>
              <div className={style.btnDiv}>
                <a rel="noreferrer" href="https://wa.me/+971528588562" target="_blank">
                  <img alt='icon' src={p1} className={style.paymentButtons} />
                </a>
                <a rel="noreferrer" href="https://wa.me/+971528588562" target="_blank">
                  <img alt='icon' src={p2} className={style.paymentButtons} />
                </a>
                <a rel="noreferrer" href="https://wa.me/+971528588562" target="_blank">
                  <img alt='icon' src={p3} className={style.paymentButtons} />
                </a>
                <a rel="noreferrer" href="https://wa.me/+971528588562" target="_blank">
                  <img alt='icon' src={p5} className={style.paymentButtons} />
                </a>
                <a rel="noreferrer" href="https://wa.me/+971528588562" target="_blank">
                  <img alt='icon' src={p5} className={style.paymentButtons} />
                </a>
                <a rel="noreferrer" href="https://wa.me/+971528588562" target="_blank">
                  <img alt='icon' src={p1} className={style.paymentButtons} />
                </a>
                <a rel="noreferrer" href="https://wa.me/+971528588562" target="_blank">
                  <img alt='icon' src={p1} className={style.paymentButtons} />
                </a>
                <a rel="noreferrer" href="https://wa.me/+971528588562" target="_blank">
                  <img alt='icon' src={bank} className={style.paymentButtons} />
                </a>
                <a rel="noreferrer" href="https://wa.me/+971528588562" target="_blank">
                  <img alt='icon' src={paytm} className={style.paymentButtons} />
                </a>
                <a rel="noreferrer" href="https://wa.me/+971528588562" target="_blank">
                  <img alt='icon' src={phonepe} className={style.paymentButtons} />
                </a>
              </div>
            </div>
          </div>
          <div className={style.sec2}>
            {active === 0 && (
              <div className={style.cardDiv}>
                {casino.map(({ icon, empty }) => {
                  return (
                    <ReactWhatsapp
                      number=" +971528588562"
                      message="Hello World!!!"
                    >
                      <FlipCard
                        imgText={"Tab 1"}
                        fimg={icon}
                        width={100}
                        height={100}
                        empty={empty}
                        className={style.card}
                      />
                    </ReactWhatsapp>
                  );
                })}
              </div>
            )}
            {active === 1 && (
              <div className={style.cardDiv}>
                {ids.map(({ icon, empty }) => {
                  return (
                    <ReactWhatsapp
                      number=" +971528588562"
                      message="Hello World!!!"
                    >
                      <FlipCard
                        imgText={"Tab 1"}
                        fimg={icon}
                        width={100}
                        height={100}
                        empty={empty}
                        className={style.card}
                      />
                    </ReactWhatsapp>
                  );
                })}
              </div>
            )}
            {active === 2 && (
              <div className={style.cardDiv}>
                {sports.map(({ icon, empty }) => {
                  return (
                    <ReactWhatsapp
                      number=" +971528588562"
                      message="Hello World!!!"
                    >
                      <FlipCard
                        imgText={"Tab 1"}
                        fimg={icon}
                        width={100}
                        height={100}
                        empty={empty}
                        casino={casino}
                        className={style.card}
                      />
                    </ReactWhatsapp>
                  );
                })}
              </div>
            )}
            {active === 3 && (
              <div className={style.cardDiv}>
                {casino.map(({ icon, empty, casino }) => {
                  return (
                    <ReactWhatsapp
                      number=" +971528588562"
                      message="Hello World!!!"
                    >
                      <FlipCard
                        imgText={"Tab 1"}
                        fimg={icon}
                        width={100}
                        height={100}
                        empty={empty}
                        casino={casino}
                        className={style.card}
                      />
                    </ReactWhatsapp>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FilterSection;

const pageData = [
  { name: "All" },
  { name: "IDS" },
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
  { icon: whatsappIcon, empty: true },
  { icon: whatsappIcon, empty: true },
  { icon: whatsappIcon, empty: true },
  { icon: whatsappIcon, empty: true },
  { icon: whatsappIcon, empty: true },
  { icon: whatsappIcon, empty: true },
  { icon: whatsappIcon, empty: true },
  { icon: whatsappIcon, empty: true },
  { icon: whatsappIcon, empty: true },
  { icon: whatsappIcon, empty: true },
  { icon: whatsappIcon, empty: true },
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
  { icon: whatsappIcon, empty: true },
];
