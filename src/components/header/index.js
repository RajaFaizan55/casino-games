import React, { useState } from "react";

import MobileMenu from "./mobileMenu";

import facebook from "../../assets/social/facebook.svg";
import youtube from "../../assets/social/yicon.png";
import insta from "../../assets/social/insta.svg";
import telegram from "../../assets/social/telegram.svg";
import twiter from "../../assets/social/twiter.svg";
import logo from "../../assets/header/logo.png";
import bg from "../../assets/header/headerbg.jpg";
import bg2 from "../../assets/header/bg2.jpg";
import list from "../../assets/list.svg";
import style from "./header.module.scss";
import Container from "../../components/container";
import { Link } from "react-router-dom";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [dropDown, setDropDown] = useState(false);

  return (
    <Container>
      <>
        <div className={style.wraper} id={"top"}>
          <div className={style.logo}>
            <img alt="icon" src={logo} atl="logo" />
          </div>
          <div className={style.menu}>
            <div className={style.firstImg}>
              <img
                alt="icon"
                src={bg}
                width={100}
                height={200}
                style={{ width: "100%" }}
              />
              <img
                alt="icon"
                src={bg2}
                height={200}
                style={{ width: "100%" }}
              />
              <div className={style.menuSection}>
                <Link to={"/"}>
                  <p>Home</p>
                </Link>
                <Link to={"/sports"}>
                  <p>Sports</p>
                </Link>
                <p>VIP</p>
                <div style={{ position: "relative" }}>
                  <p onClick={() => setDropDown(!dropDown)}>Sites</p>
                  {dropDown && (
                    <div
                      style={{
                        background: "black",
                        color: "#fff",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <span onClick={() => setDropDown(false)}>option 1</span>
                      <span onClick={() => setDropDown(false)}>option 1</span>
                    </div>
                  )}
                </div>
                {/* <DropDownBtn /> */}
              </div>
              <div
                style={{ position: "absolute", right: "10px", bottom: "20px" }}
              >
                <a rel="noreferrer" href="https://www.facebook.com/login/" target="_blank">
                  <img
                    alt="icon"
                    src={facebook}
                    width={20}
                    style={{ marginRight: "10px" }}
                    className={style.neonimg}
                  />
                </a>
                <a rel="noreferrer" href="https://www.youtube.com/" target="_blank">
                  <img
                    alt="icon"
                    src={youtube}
                    style={{ marginRight: "10px", width: "50px !important" }}
                    className={style.neonimg}
                  />
                </a>
                <a
                  rel="noreferrer" href="https://www.instagram.com/accounts/login/"
                  target="_blank"
                >
                  <img
                    src={insta}
                    alt="icon"
                    width={20}
                    style={{ marginRight: "10px" }}
                    className={style.neonimg}
                  />
                </a>
                <a rel="noreferrer" href="https://telegr.am/user_mgt/login" target="_blank">
                  <img
                    alt="icon"
                    src={telegram}
                    width={20}
                    style={{ marginRight: "10px" }}
                    className={style.neonimg}
                  />
                </a>
                <a rel="noreferrer" href="https://twitter.com/login" target="_blank">
                  <img
                    alt="icon"
                    src={twiter}
                    width={20}
                    className={style.neonimg}
                  />
                </a>
              </div>
            </div>
          </div>
          <img
            className={style.menuIcon}
            src={list}
            alt="icon"
            onClick={() => setToggle(!toggle)}
          />
        </div>

        {toggle && <MobileMenu setToggle={setToggle} />}
      </>
    </Container>
  );
};

export default Header;
