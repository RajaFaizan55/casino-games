import React, { useState } from "react";
import FilterSection from "../components/filter-section";
import Footer from "../components/footer";
import Header from "../components/header";
import MoveText from "../components/move-text";
import PortFolioSection from "../components/portfolioSection";
import ServicesSection from "../components/servicesSection";

import whatsapp from "../assets/whatsapp3.png";
import style from "./home.module.scss";
import PaymentMethod from "../components/payment-method";
import CasinoSection from "../components/casinoSection";
import Modal from "../components/modal";

import banner from "../assets/whatsapp3.png";
import background from "../assets/Layer2.png";

const Home = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
      }}
    >
      <div>
        <a href="https://wa.me/+971528588562" target="_blank" rel="noreferrer">
          <img alt="icon" src={whatsapp} width={100} className={style.btn} />
        </a>
        <a href="https://wa.me/+971528588562" target="_blank" rel="noreferrer">
          <img alt="icon" src={whatsapp} width={100} className={style.btn1} />
        </a>
        <div>
          <Header />
          <MoveText text={"TRUST Of INDIA 24/7 WITHDRAWAL SERVICE"} />
          <FilterSection />
          <MoveText text={"WHAT OUR VIP/CELEBRITIES SAY!!!"} />
          <PortFolioSection />
          <MoveText text={"JOIN NOW GET BONUS 5% ON ALL SPORTS"} />
          <ServicesSection />
          <MoveText text={"JOIN NOW GET BONUS 5% ON ALL SPORTS"} />
          <CasinoSection />
        </div>
        <PaymentMethod />
        <Footer />
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
            href="https://wa.me/+971528588562"
            target="_blank"
            rel="noreferrer"
          >
            <img src={banner} alt='icon' />
          </a>
        </div>
        <button onClick={() => setToggle(false)} style={{ marginTop: "20px" }}>
          cancel
        </button>
      </Modal>
    </div>
  );
};

export default Home;
