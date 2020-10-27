import React from "react";
import * as Sentry from "@sentry/react";

const ErrorBoundary = ({ children }) => {
  const beforeCapture = (scope) => {
    scope.setTag("testag", "tagvalue");
  };

  return (
    <Sentry.ErrorBoundary beforeCapture={beforeCapture}>
      {children}
    </Sentry.ErrorBoundary>
  );
};

export default ErrorBoundary;
