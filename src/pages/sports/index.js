import React from "react";
import FilterSection from "../../components/sports-page-components";
import Header from "../../components/sports-page-components/header";
import VideoSection from "../../components/sports-page-components/video-section";
import MoveText from "./../../components/move-text/index";
import whatsapp from "../../assets/sports-icons/Social/whatsapp.png";
import icon from "../../assets/24hour.png";

import style from "./sports.module.scss";
import Modal from "../../components/modal";
import { useState } from "react";

const Sports = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <div style={{ background: "black" }}>
        <a href="https://wa.me/+919913044444" target="_blank" rel="noreferrer">
          <img alt="icon" src={whatsapp} width={175} className={style.btn} />
        </a>
        <a href="https://wa.me/+919913044444" target="_blank" rel="noreferrer">
          <img alt="icon" src={icon} width={175} className={style.btn2} />
        </a>
        <a href="https://wa.me/+919913044444" target="_blank" rel="noreferrer">
          <img alt="icon" src={whatsapp} width={175} className={style.btn1} />
        </a>

        <Header />
        <FilterSection />
        <MoveText text={"CELEBS LOVE US!!!  WATCH OUR CELEBS SAY ABOUT US"} />
        <VideoSection />
      </div>
      <Modal open={toggle} handleClose={() => setToggle(false)}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <a
            href="https://wa.me/+919913044444"
            target="_blank"
            rel="noreferrer"
          >
            <img alt='icon' src={whatsapp} width={60} />
          </a>
        </div>
        <button onClick={() => setToggle(false)} style={{ marginTop: "20px" }}>
          cancel
        </button>
      </Modal>
    </>
  );
};

export default Sports;
