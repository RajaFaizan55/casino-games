import React from "react";

import pic1 from "../../../assets/sports-icons/whyCric/ic1.png";
import pic2 from "../../../assets/sports-icons/whyCric/ic2.png";
import pic3 from "../../../assets/sports-icons/whyCric/ic3.png";
import pic4 from "../../../assets/sports-icons/whyCric/ic4.png";
import pic5 from "../../../assets/sports-icons/whyCric/ic5.png";
import pic6 from "../../../assets/sports-icons/whyCric/ic6.png";
import style from "./cric.module.scss";

const WhyCricAdda = () => {
  return (
    <div className={style.wraper} id={"whycric"}>
      <h1>WHY CRICADDA ?</h1>
      <div className={style.cardContainer}>
        {cardData.map(({ heading, img, desc }) => {
          return (
            <div className={style.card}>
              <span
                style={{
                  fontFamily: "sans-serif",
                  fontWeight: "800",
                  fontStyle: "italic",
                  textAlign: "center",
                  width: "max-content",
                }}
                className={style.headingSec}
              >
                {heading}
              </span>
              <div className="d-flex align-items-center mt-4">
                <div style={{ height: "100%" }} className={style.hoverBtn}>
                  <img src={img}  alt='icon' />
                </div>
                <div className={style.desc}>
                  <span>{desc}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={style.premium}>
        <p>LIVE SPORT GET INSTANT ID LIVE CUSTOMER SUPPORT</p>
        <h2>Premium Sites</h2>
        <h2>LIVE CASINO GAMES</h2>
      </div>
    </div>
  );
};

export default WhyCricAdda;

const cardData = [
  {
    heading: "ONLINE ID",
    img: pic1,
    desc: " Get your online Cricket/sports id with Us and instantly start Playing. Message us To get your ID now.",
  },
  {
    heading: "INSTANT WITHDRAWAL & REFILL",
    img: pic2,
    desc: "CricAdda provides Instant service of id Withdrawal & refilling With min to max amount",
  },
  {
    heading: "24 SUPPORT",
    img: pic3,
    desc: "We have a team of Experts who available 24x7 to guide you Through our WhatsApp Chats.",
  },
  {
    heading: "AVAILABLE PAYMENT METHODS",
    img: pic4,
    desc: "Multiple methods are Available for Payments.Customer can pay via Not Banking, Bank Transfer, Paytm,Google pay, IMPS,Phonepe etc.",
  },
  {
    heading: "100% TRUSTED SERVICE",
    img: pic5,
    desc: " Transparency and accuracy is he most important for us and For our customer. We deal in The most transparent way.",
  },
  {
    heading: "HIGH SECURITY",
    img: pic6,
    desc: " Security is our Top priority And hence your data and Information is safe and is not Shared at any Point!",
  },
];
