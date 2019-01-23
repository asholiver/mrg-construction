import React from "react";
import "./Section.css";
import classNames from "classnames";

const Section = ({ image, hasShadow, size, color, children }) => {
  const classes = classNames({
    "c-section": true,
    [`c-section--${image}`]: image == null ? false : true,
    [`c-section--${size}`]: size == null ? false : true,
    [`c-section--${color}`]: color == null ? false : true
  });
  return (
    <section className={classes}>
      {hasShadow ? <div className="c-section--overlay" /> : null}
      {children}
    </section>
  );
};

export default Section;
