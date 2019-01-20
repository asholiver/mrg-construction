import React, { Fragment } from "react";
import "./Page.css";
import { Header, Main, Footer } from "..";

const Page = ({ children }) => {
  return (
    <Fragment>
      <Header>
        <p>Hello world</p>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <p>Goodbye</p>
      </Footer>
    </Fragment>
  );
};

export default Page;
