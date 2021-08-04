import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import store from "./redux/store";
import { Provider } from "react-redux";

import "./i18n";

ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback='Loading...'>
      <App />
    </Suspense>
  </Provider>,
  document.getElementById("root")
);
