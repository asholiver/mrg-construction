import React from "react";
import "./MenuButton.css";
import classNames from "classnames";

const MenuButton = ({ onClick, isActive }) => {
  const classes = classNames({
    "c-button-icon-only": true,
    "c-main-nav-trigger": true,
    "h-hide-from-lap": true,
    "is-active": isActive
  });
  return (
    <button type="button" onClick={onClick} className={classes}>
      <svg
        className="c-icon c-icon--hamburger"
        aria-hidden="true"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 100 100"
      >
        <g>
          <path
            className="c-hamburger-menu__line c-hamburger-menu__line-1"
            d="M5 13h90v14H5z"
          />
          <path
            className="c-hamburger-menu__line c-hamburger-menu__line-2"
            d="M5 43h90v14H5z"
          />
          <path
            className="c-hamburger-menu__line c-hamburger-menu__line-3"
            d="M5 73h90v14H5z"
          />
        </g>
      </svg>
    </button>
  );
};

export default MenuButton;
