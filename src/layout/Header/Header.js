import React from "react";
import "./Header.css";

const Header = ({ children }) => {
  return <header className="l-header">{children}</header>;
};

export default Header;
