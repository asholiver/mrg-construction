import React from "react";
import { Page, Section } from "./../layout";

const Home = () => {
  return (
    <Page>
      <Section image="kitchen">
        <div className="c-title-container">
          <h1 className="c-title">MRG Construction</h1>
          <p className="c-tag">Come home to quality</p>
        </div>
      </Section>
      <Section size="narrow">
        <p className="h-spacing-large">
          At MRG, we strive to deliver high quality finishes to make your house,
          your home.
        </p>
        <p className="h-spacing-large">
          With a over a decade of experience within the industry, MRG have the
          capability to handle all types of residential development, from large
          scale new builds, complex extensions to simply putting the finishing
          touches to your home.
        </p>
        <p>
          Our fully qualified tradesmen ensure that all aspects are covered, and
          every finer detail has been finished to the highest standard.
        </p>
      </Section>
    </Page>
  );
};

export default Home;
