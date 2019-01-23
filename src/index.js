import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import { Icons } from "./components";
import { Home } from "./containers";
import "./css/Settings.css";
import "./css/Resets.css";
import "./css/Shame.css";
import "./css/Helpers.css";

ReactDOM.render(
  <BrowserRouter>
    <Fragment>
      <Icons />
      <Route path="/" component={Home} />
    </Fragment>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
