import React from "react";
import "./ImageSection.css";
import classNames from "classnames";

const ImageSection = ({ image, hasShadow, children }) => {
  const classes = classNames({
    "c-image-section": true,
    [`c-image-section--${image}`]: image == null ? false : true
  });
  return (
    <section className={classes}>
      {hasShadow ? <div className="c-image-section--overlay" /> : null}
      {children}
    </section>
  );
};

export default ImageSection;
