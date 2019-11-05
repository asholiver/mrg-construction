import React, { useState, useEffect } from "react";
import { Page } from "./../layout";
import {
  ImageSection,
  Section,
  SectionHeader,
  SectionContent,
  ServiceCards
} from "./../components";
import settings from "./../css/Settings.css";
import "./../css/Grid.css";
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
      image: "services",
      services: ["Full house builds", "Extensions", "Boundary walls", "Garages"]
    },
    {
      title: "Ground works",
      image: "services",
      services: ["Driveways", "Gardens", "Foundation work"]
    },
    {
      title: "Fittings",
      image: "kitchen2",
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
          <ServiceCards services={serviceCards} />
        </SectionContent>
      </Section>
      <Section color="grey">
        <SectionHeader isUnderlined={true} title="Testimonials" />
        <SectionContent>
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
        </SectionContent>
      </Section>
    </Page>
  );
};

export default Home;
