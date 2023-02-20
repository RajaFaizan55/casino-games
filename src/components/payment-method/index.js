import React from "react";

import p1 from "../../assets/PaymentIcons/visa-icon.svg";
import p2 from "../../assets/PaymentIcons/p10.svg";
import p3 from "../../assets/PaymentIcons/p9.svg";
import p6 from "../../assets/PaymentIcons/p6.svg";
import bank from "../../assets/bank.png";
import paytm from "../../assets/paytm.png";
import phonepe from "../../assets/phonepe.png";
import Container from "../../components/container";
import style from "./payment.module.scss";

const PaymentMethod = () => {
  return (
    <Container>
      <div className={style.wraper}>
        <div style={{ width: "100%", textAlign: "center" }}>
          <h1>Payment Method</h1>
          <div className={style.paymentDiv}>
            <a rel="noreferrer" href="https://wa.me/+971528588562" target="_blank">
              <img alt='icon' src={bank} style={{ margin: "10px" }} />
            </a>
            <a rel="noreferrer" href="https://wa.me/+971528588562" target="_blank">
              <img alt='icon' src={paytm} width={100} style={{ margin: "10px" }} />
            </a>
            <a rel="noreferrer" href="https://wa.me/+971528588562" target="_blank">
              <img alt='icon' src={phonepe} width={100} style={{ margin: "10px" }} />
            </a>
            <a rel="noreferrer" href="https://wa.me/+971528588562" target="_blank">
              <img alt='icon' src={p1} width={65} style={{ margin: "10px" }} />
            </a>
            <a rel="noreferrer" href="https://wa.me/+971528588562" target="_blank">
              <img alt='icon' src={p2} width={65} style={{ margin: "10px" }} />
            </a>
            <a rel="noreferrer" href="https://wa.me/+971528588562" target="_blank">
              <img alt='icon' src={p3} width={65} style={{ margin: "10px" }} />
            </a>
            <a rel="noreferrer" href="https://wa.me/+971528588562" target="_blank">
              <img alt='icon' src={p6} width={65} style={{ margin: "10px" }} />
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default PaymentMethod;
