import React from "react";
import { Page } from "../layout";
import { Section } from "../components";
import services from "./../services.jpg";

const Contact = () => {
  return (
    <Page>
      <Section>
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

export default Contact;
