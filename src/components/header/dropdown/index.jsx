import React, { useState } from "react";

const DropDownComp = (props) => {
  const { text, Children, toogle, style, menuStyle } = props;

  return (
    <>
      <div className="dropdown">
        <button
          className={`custom-btn-style text-light-gray rounded font-weight-600 font-12 position-relative ${style} ${
            toogle ? "custom-dropdown-toggle" : ""
          } `}
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {text}
        </button>
        <div
          className={`dropdown-menu custom-drop-menu ${menuStyle}`}
          aria-labelledby="dropdownMenuButton"
        >
          <a className="dropdown-item" href="#">
            {Children}
          </a>
        </div>
      </div>
    </>
  );
};
export default DropDownComp;
