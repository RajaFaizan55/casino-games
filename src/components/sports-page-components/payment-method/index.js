import React from "react";

import image5 from "../../../assets/sports-icons/paym/5.png";
import image7 from "../../../assets/sports-icons/paym/7.png";
import image9 from "../../../assets/sports-icons/paym/9.png";
import image13 from "../../../assets/sports-icons/paym/13.png";
import image14 from "../../../assets/sports-icons/paym/14.png";

import style from "./payment.module.scss";

const PaymentMethod = () => {
  return (
    <div className={style.wraper}>
      <h1>Payment Method</h1>
      <div className={style.imgSec}>
        <a rel="noreferrer" href="https://wa.me/+919913044444" target="_blank">
          <img alt='icon' src={image5} />
        </a>
        <a rel="noreferrer" href="https://wa.me/+919913044444" target="_blank">
          <img alt='icon' src={image7} />
        </a>
        <a rel="noreferrer" href="https://wa.me/+919913044444" target="_blank">
          <img alt='icon' src={image9} />
        </a>
        <a rel="noreferrer" href="https://wa.me/+919913044444" target="_blank">
          <img alt='icon' src={image13} />
        </a>
        <a rel="noreferrer" href="https://wa.me/+919913044444" target="_blank">
          <img alt='icon' src={image14} />
        </a>
      </div>
      <div className={style.borderDiv}></div>
    </div>
  );
};

export default PaymentMethod;
