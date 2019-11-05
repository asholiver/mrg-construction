import React, { Fragment } from "react";
import "./Page.css";
import { Header, Main, Footer } from "..";
import { Menu, MenuButton, Icon } from "./../../components";

const Page = ({ children, activeMenu, triggerMenu }) => {
  const setMenu = () => {
    triggerMenu();
  };

  return (
    <Fragment>
      <Header>
        <Fragment>
          <Icon icon="home" classes="c-logo-icon" size="large" />
          <h1 className="c-company-title">Winsor Construction</h1>
        </Fragment>

        <MenuButton onClick={() => setMenu()} isActive={activeMenu} />
        <Menu isActive={activeMenu} />
      </Header>
      <Main>{children}</Main>
      <Footer>
        <p>Goodbye</p>
      </Footer>
    </Fragment>
  );
};

export default Page;
