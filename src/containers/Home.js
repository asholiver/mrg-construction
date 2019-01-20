import React, { Component, Fragment } from "react";
import { Footer, Header, Main } from "./../layout";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Header>
          <p>Foo bar</p>
        </Header>
        <Main>
          <p>hello world</p>
        </Main>
        <Footer>
          <p>Goodbye</p>
        </Footer>
      </Fragment>
    );
  }
}

export default Home;
