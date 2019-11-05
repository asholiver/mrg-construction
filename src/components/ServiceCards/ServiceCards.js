import React from "react";
import "./ServiceCards.css";
import "./../../css/Grid.css";
import { ServiceCard } from "./../ServiceCards";

const ServiceCards = ({ services }) => {
  return (
    <div className="l-grid">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          title={service.title}
          services={service.services}
        />
      ))}
    </div>
  );
};

export default ServiceCards;
