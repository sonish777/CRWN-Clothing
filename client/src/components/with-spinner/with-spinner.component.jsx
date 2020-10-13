import React from "react";

import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.styles";

const withSpinner = (WrappedComponent) => {
  return (props) => {
    return props.isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...props} />
    );
  };
};

export default withSpinner;
