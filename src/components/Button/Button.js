import React from "react";

import { CustomButtonContainer } from "./button.styles";

const button = ({ children, ...props }) => {
  return <CustomButtonContainer {...props}>{children}</CustomButtonContainer>;
};

export default button;
