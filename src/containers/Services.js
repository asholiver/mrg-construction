import React from "react";
import { Page, Section } from "../layout";

const Services = () => {
  return (
    <Page>
      <Section image="kitchen" hasShadow={true}>
        <div className="c-title-container">
          <h1 className="c-title">MRG Construction</h1>
          <p className="c-tag">Come home to quality</p>
        </div>
      </Section>

      <Section color="white">
        <div className="l-grid">
          <div className="l-grid__item l-grid__item--12-col l-grid__item--6-col-from-lap l-grid__item--3-col-from-desk">
            <div className="c-card">
              <div className="c-card__header">
                <h2 className="c-card__title">Bricklaying</h2>
              </div>
              <div className="c-card__content">
                <ul className="c-list">
                  <li className="c-list__item">Full house builds</li>
                  <li className="c-list__item">Extensions</li>
                  <li className="c-list__item">Boundary walls</li>
                  <li className="c-list__item">Garages</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="l-grid__item l-grid__item--12-col l-grid__item--6-col-from-lap l-grid__item--3-col-from-desk">
            <div className="c-card">
              <div className="c-card__header">
                <h2 className="c-card__title">Ground works</h2>
              </div>
              <div className="c-card__content">
                <ul className="c-list">
                  <li className="c-list__item">Driveways</li>
                  <li className="c-list__item">Gardens</li>
                  <li className="c-list__item">Foundation work</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="l-grid__item l-grid__item--12-col l-grid__item--6-col-from-lap l-grid__item--3-col-from-desk">
            <div className="c-card">
              <div className="c-card__header">
                <h2 className="c-card__title">Fittings</h2>
              </div>
              <div className="c-card__content">
                <ul className="c-list">
                  <li className="c-list__item">Bathrooms</li>
                  <li className="c-list__item">Kitchens</li>
                  <li className="c-list__item">Fireplaces</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="l-grid__item l-grid__item--12-col l-grid__item--6-col-from-lap l-grid__item--3-col-from-desk">
            <div className="c-card">
              <div className="c-card__header">
                <h2 className="c-card__title">Finishing</h2>
              </div>
              <div className="c-card__content">
                <ul className="c-list">
                  <li className="c-list__item">Plastering</li>
                  <li className="c-list__item">Door Hanging</li>
                  <li className="c-list__item">Window Fitting</li>
                  <li className="c-list__item">Skirting/Architrave</li>
                  <li className="c-list__item">Electrics</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Page>
  );
};

export default Services;
