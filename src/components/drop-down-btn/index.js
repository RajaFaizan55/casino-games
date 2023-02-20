import React from "react";

import "./dropdown.css";

const DropDownBtn = () => {
  return (
    <div class="dropdown">
      <button class="dropbtn">Sites</button>
      <div class="dropdown-content">
        <a rel="noreferrer" href="#">Link 1</a>
        <a rel="noreferrer" href="#">Link 2</a>
        <a rel="noreferrer" href="#">Link 3</a>
      </div>
    </div>
  );
};

export default DropDownBtn;
