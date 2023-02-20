import React from "react";
import { useState } from "react";

import list from "../../../../assets/list.svg";
import logo from "../../../../assets/sports-icons/logo.png";
import style from "./mobile.module.scss";

const MobileView = () => {
  const [dropDown, setDropDown] = useState(false);
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className={style.wraper}>
        <div>
          <img alt='icon' src={logo} width={100} />
        </div>
        <div>
          <img alt='icon' src={list} width={50} onClick={() => setToggle(!toggle)} />
        </div>
      </div>

      {toggle && (
        <div className={style.menu}>
          <a rel="noreferrer" href="#about">
            <p>ABOUT US</p>
          </a>
          <a rel="noreferrer" href={"#whycric"}>
            <p>WHY CRICADDA</p>
          </a>
          <a rel="noreferrer" href={"#work"}>
            <p>HOW IT WORKS</p>
          </a>
          <div style={{ position: "relative" }}>
            <p onClick={() => setDropDown(!dropDown)}>PREMIUM SITES</p>
            {dropDown && (
              <div className={style.dropDown}>
                <p onClick={() => setDropDown(false)}>CRIC ADDA</p>
                <p onClick={() => setDropDown(false)}>CRIC ADDA</p>
                <p onClick={() => setDropDown(false)}>CRIC ADDA</p>
              </div>
            )}
          </div>
          <a href={"#vid"}>
            <p>CELEBS LOVE US</p>
          </a>
          <p>CONTACT</p>
        </div>
      )}
    </>
  );
};

export default MobileView;
