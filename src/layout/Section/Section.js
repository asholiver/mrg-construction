import React from "react";
import "./Section.css";
import classNames from "classnames";

const Section = ({ image, children }) => {
  const classes = classNames({
    "c-section": true,
    [`c-section--${image}`]: image == null ? false : true
  });
  return (
    <section className={classes}>
      {image != null ? <div className="c-section--overlay" /> : null}
      {children}
    </section>
  );
};

export default Section;
