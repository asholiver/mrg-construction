import React, { Fragment, Component } from "react";
import "./Page.css";
import settings from "./../../css/Settings.css";
import { Header, Main, Footer } from "..";
import { Menu, MenuButton } from "./../../components";

class Page extends Component {
  updateDimensions = this.updateDimensions.bind(this);
  state = {
    activeMenu: false
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }

  updateDimensions() {
    const pxToEm = window.innerWidth / 16;
    if (pxToEm > settings.breakPoint) {
      console.log("updating");
      this.setState({ activeMenu: false });
    }
  }

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
