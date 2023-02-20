import React from "react";

import whatsappIcon from "../../assets/whatsapp3.png";
import sport from "../../assets/sports11.png";
import style from "./flip-card..module.scss";

const FlipCard = ({
  className,
  fimg,
  empty,
  casino,
}) => {
  return (
    <>
      <div className={`${style.flipcard}  ${className} `} tabIndex="0">
        <div className={style.flipcardinner}>
          <div className={style.flipcardfront}>
            <img
              alt="icon"
              src={fimg ? fimg : sport}
              // width={width}
              // height={height}
              style={{
                width: "100%",
                height: "100%",
                // width: empty ? "70px" : "100%",
                // height: empty ? "70px" : "100%",
              }}
            />
            {empty && <h3>Get ID</h3>}{" "}
          </div>
          <div className={style.flipcardback}>
            <h3>GET ID</h3>
            {casino ? (
              <img src={whatsappIcon} alt='icon' />
            ) : (
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span>username:Demo4</span>
                <span>password:demo@134</span>
                <a href="www.demo.net" rel="noreferrer">
                  <span>URl:www.demo.net</span>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default FlipCard;
