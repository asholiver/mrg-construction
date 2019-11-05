import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import { Icons } from "./components";
import { Contact, Gallery, Home, Services } from "./containers";
import "./css/Settings.css";
import "./css/Resets.css";
import "./css/Shame.css";
import "./css/Helpers.css";

ReactDOM.render(
  <BrowserRouter>
    <Fragment>
      <Icons />
      <Route exact path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/contact" component={Contact} />
      <Route path="/gallery" component={Gallery} />
    </Fragment>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
