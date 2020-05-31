import React from "react";

import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.styles";

const withSpinner = (WrappedComponent, isLoading) => {
  return (props) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...props} />
    );
  };
};

export default withSpinner;
