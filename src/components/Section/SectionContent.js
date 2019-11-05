import React from "react";
import "./Section.css";
import classNames from "classnames";

const SectionContent = ({ size, color, children }) => {
  const classes = classNames({
    "c-section": true,
    [`c-section--${size}`]: size == null ? false : true,
    [`c-section--${color}`]: color == null ? false : true
  });
  return <section className={classes}>{children}</section>;
};

export default SectionContent;
