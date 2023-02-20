import React, { useState } from "react";

import style from "./mobileMenu.module.scss";

const MobileMenu = ({ setToggle }) => {
  const [dropDown, setDropDown] = useState(false);
  return (
    <div className={style.wraper}>
      <p onClick={() => setToggle(false)}>Home</p>
      <p onClick={() => setToggle(false)}>Sports</p>
      <p onClick={() => setToggle(false)}>VIP</p>
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
        {/* <DropDownBtn /> */}
      </div>
    </div>
  );
};

export default MobileMenu;
