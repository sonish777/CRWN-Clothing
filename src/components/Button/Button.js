import React from "react";

import "./Button.scss";

const button = ({ children, isGoogleSignin, inverted, ...otheProps }) => {
  return (
    <button
      className={`${inverted ? "inverted" : ""}  ${
        isGoogleSignin ? "google-sign-in" : ""
      } custom-button`}
      {...otheProps}
    >
      {children}
    </button>
  );
};

export default button;
