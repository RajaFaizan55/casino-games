import React from "react";
import ReactWhatsapp from "react-whatsapp";

import whatsapp from "../../assets/whatsapp.svg";
import Container from "../../components/container";
import style from "./move-text.module.scss";

const MoveText = ({ text }) => {
  return (
    <Container>
      <div className={style.wraper}>
        <p className={style.target}>
          <div className={style.moveDiv}>
            <ReactWhatsapp
              number="+91 9913044444"
              message="Hello Cricadda I want ID"
            >
              <h1>{text}</h1>
            </ReactWhatsapp>
            <ReactWhatsapp
              number="+91 9913044444"
              message="Hello Cricadda I want ID"
            >
              <img
                src={whatsapp}
                alt={"icon"}
                width={40}
                className={style.imgClass}
              />
            </ReactWhatsapp>
          </div>
        </p>
      </div>
    </Container>
  );
};

export default MoveText;
