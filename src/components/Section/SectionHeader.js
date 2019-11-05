import React from "react";
import "./Section.css";
import classNames from "classnames";

const SectionHeader = ({ title, isUnderlined }) => {
  const classes = classNames({
    "c-section__header": true,
    "c-section__header--underline": isUnderlined
  });
  return (
    <div className={classes}>
      <h3 className="c-section__title">{title}</h3>
    </div>
  );
};

export default SectionHeader;
