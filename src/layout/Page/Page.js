import React, { Fragment, Component } from "react";
import "./Page.css";
import { Header, Main, Footer } from "..";
import { Menu, MenuButton } from "./../../components";

class Page extends Component {
  state = {
    activeMenu: false
  };

  toggleMenu = e => {
    this.setState({ activeMenu: !this.state.activeMenu });
  };
  render() {
    const { activeMenu } = this.state;
    const { children } = this.props;
    return (
      <Fragment>
        <Header>
          <MenuButton onClick={this.toggleMenu} isActive={activeMenu} />
          <Menu isActive={activeMenu} />
        </Header>
        <Main>{children}</Main>
        <Footer>
          <p>Goodbye</p>
        </Footer>
      </Fragment>
    );
  }
}

export default Page;
