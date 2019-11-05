import React from "react";
import "./Section.css";
import classNames from "classnames";

const SectionContent = ({ size, color, children }) => {
  const classes = classNames({
    "c-section__content": true,
    [`c-section__content--${size}`]: size == null ? false : true
  });
  return <section className={classes}>{children}</section>;
};

export default SectionContent;
