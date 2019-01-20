import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Icons } from "./components";
import "./css/Resets.css";
import "./css/Settings.css";
import "./css/Helpers.css";

ReactDOM.render(
  <BrowserRouter>
    <Fragment>
      <Icons />
      <Route path="/" component={App} />
    </Fragment>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
