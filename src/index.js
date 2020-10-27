import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import * as Sentry from "@sentry/react";
import "./index.css";
import App from "./App";
import store from "./store";
import ErrorBoundary from "./ErrorBoundary";

const { NODE_ENV, REACT_APP_SENTRY_DSN } = process.env;

Sentry.init({
  normalizeDepth: 5,
  environment: NODE_ENV,
  dsn: REACT_APP_SENTRY_DSN,
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
