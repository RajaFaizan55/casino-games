import React from "react";

import goldenWhatsapp from "../../../assets/sports-icons/Social/whatsapp.png";
import style from "./work.module.scss";

const HowItWorks = () => {
  return (
    <div className={style.wraper} id={"work"}>
      <h1>HOW IT WORKS</h1>
      <div className={style.cardDiv}>
        {cardData.map(({ name, number, desc }) => {
          return (
            <div className="d-flex justify-content-center align-items-center flex-column">
              <span style={{ color: "orange" }} className={style.nameSec}>
                {name}
              </span>
              <div className={style.circle}>
                <h2>{number}</h2>
              </div>
              <span>{desc}</span>
            </div>
          );
        })}
      </div>
      <div style={{ margin: "20px 0px" }} className={style.lowerText}>
        <p>
          CRICADDA IS THE BIGGEST PLATFORM FOR PROVIDING ONLINE SPORTS BETTING
          ID'S. GET YOUR BETTING ID NOW. CONTACT US ON WHATSAPP.
        </p>
        <p>
          FOR ANY QUERIES, EMERGENCIES, FEEDBACKS OR COMPLAINTS. WE ARE HERE TO
          HELP YOU 24/7 WITH OUR ONLINE SERVICES
        </p>
      </div>
      <div
        className="d-flex justify-content-center"
        style={{ marginTop: "50px" }}
      >
        <a href="https://wa.me/+919913044444" target="_blank" rel="noreferrer">
          <div className={style.num}>
            <span>+91 9913044444</span>
            <img
              src={goldenWhatsapp}
              width={40}
              style={{ marginLeft: "10px" }}
              alt="icon"
            />
          </div>
        </a>
        <a href="https://wa.me/+919913044444" target="_blank" rel="noreferrer">
          <div className={style.num}>
            <span>+91 9913044444</span>
            <img
              src={goldenWhatsapp}
              width={40}
              style={{ marginLeft: "10px" }}
              alt='icon'
            />
          </div>
        </a>
      </div>
    </div>
  );
};

export default HowItWorks;

const cardData = [
  { name: "STEP", number: 1, desc: "MESSAGE US ON OUR WHATSAPP NUMBER " },
  {
    name: "STEP",
    number: 2,
    desc: "CUSTOMER SATISFY GUARANTEED WITH ALL INFORMATION ",
  },
  { name: "STEP", number: 3, desc: "START DEPOSITING & WITHDRAWAL INSTANTLY " },
  { name: "STEP", number: 4, desc: "EARN FROM YOUR SKILLS " },
];
