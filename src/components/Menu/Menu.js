import React from "react";
import { NavLink } from "react-router-dom";
import "./Menu.css";
import classNames from "classnames";

const MenuButton = ({ isActive }) => {
  const classes = classNames({
    "c-menu-container": true,
    "is-active": isActive
  });
  return (
    <nav className={classes}>
      <ul className="c-menu">
        <li className="c-menu-item ">
          <NavLink
            className="c-menu-item__link"
            activeClassName="is-active"
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className="c-menu-item ">
          <NavLink
            className="c-menu-item__link"
            activeClassName="is-active"
            to="/services"
          >
            Services
          </NavLink>
        </li>
        <li className="c-menu-item ">
          <NavLink
            className="c-menu-item__link"
            activeClassName="is-active"
            to="/projects"
          >
            Projects
          </NavLink>
        </li>
        <li className="c-menu-item ">
          <NavLink
            className="c-menu-item__link"
            activeClassName="is-active"
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MenuButton;
