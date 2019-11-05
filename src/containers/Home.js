import React, { useState, useEffect } from "react";
import { Page } from "./../layout";
import {
  ImageSection,
  Section,
  SectionHeader,
  SectionContent
} from "./../components";
import settings from "./../css/Settings.css";
import services from "./../services.jpg";

const Home = () => {
  const [activeMenu, setActiveMenu] = useState(false);

  const updateDimensions = () => {
    const pxToEm = window.innerWidth / 16;
    if (pxToEm > settings.breakPoint) {
      setActiveMenu(false);
    }
  };

  const serviceCards = [
    {
      title: "Bricklaying",
      image: "kitchen",
      services: ["Full house builds", "Extensions", "Boundary walls", "Garages"]
    },
    {
      title: "Ground works",
      image: "kitchen",
      services: ["Driveways", "Gardens", "Foundation work"]
    },
    {
      title: "Fittings",
      image: "kitchen",
      services: ["Bathrooms", "Kitchens", "Fireplaces"]
    },
    {
      title: "Finishing",
      image: "kitchen",
      services: [
        "Plastering",
        "Door hanging",
        "Window fitting",
        "Skirting/Architrave",
        "Electrics"
      ]
    }
  ];

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
  }, []);

  return (
    <Page
      activeMenu={activeMenu}
      triggerMenu={() => setActiveMenu(!activeMenu)}
    >
      <ImageSection image="kitchen">
        <div className="c-title-container">
          <h1 className="c-title c-title-company">Winsor Construction</h1>
        </div>
      </ImageSection>
      <Section>
        <SectionContent size="narrow">
          <p className="h-spacing-large">
            At Winsor construction, we strive to deliver high quality finishes
            to make your house, your home.
          </p>
          <p className="h-spacing-large">
            With a over 4 decades of experience within the industry, we have the
            capability to handle all types of residential development, from
            large scale new builds, complex extensions to simply putting the
            finishing touches to your home.
          </p>
          <p>
            Our fully qualified tradesmen ensure that all aspects are covered,
            and every finer detail has been finished to the highest standard.
          </p>
        </SectionContent>
      </Section>

      <Section>
        <SectionHeader isUnderlined={true} title="Our services" />
        <SectionContent>
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
        </SectionContent>
      </Section>
      <Section color="grey">
        <div className="l-grid">
          <div className="l-grid__item l-grid__item--12-col l-grid__item--6-col-from-lap">
            <img
              className="c-testimonial__image"
              alt="bathroom"
              src={services}
            />
          </div>
          <div className="l-grid__item l-grid__item--12-col l-grid__item--6-col-from-lap">
            <div className="c-testimonial">
              <dl className="c-testimonial__list">
                <div>
                  <dt className="c-testimonial__title">Shelley Christie</dt>
                  <dd className="c-testimonial__text">
                    Fantastic work....very well priced and top professional
                    results.
                  </dd>
                </div>
                <div>
                  <dt className="c-testimonial__title">Martyn Sign</dt>
                  <dd className="c-testimonial__text">
                    Great work. Honest and reliable. Couldn’t ask for more.
                    Highly recommended!
                  </dd>
                </div>
                <div>
                  <dt className="c-testimonial__title">Andy Christie</dt>
                  <dd className="c-testimonial__text">
                    Loads of experience... gives good advice
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </Section>
    </Page>
  );
};

export default Home;
