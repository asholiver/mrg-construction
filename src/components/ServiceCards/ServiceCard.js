import React from "react";
import "./ServiceCards.css";
import Images from "./../../Images";

const ServiceCard = ({ title, image, services }) => {
  return (
    <div className="l-grid__item l-grid__item--12-col l-grid__item--6-col-from-lap l-grid__item--3-col-from-desk">
      <div className="c-card">
        <img className="c-card__image" alt={image} src={Images[image]} />
        <div className="c-card__header">
          <h2 className="c-card__title">{title}</h2>
        </div>
        <div className="c-card__content">
          <ul className="c-list">
            {services &&
              services.map((service, index) => (
                <li key={index} className="c-list__item">
                  {service}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
