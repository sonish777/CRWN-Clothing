import React from "react";

import {
  FormGroupContainer,
  FormInputContainer,
  LabelContainer,
} from "./form-input.styles";

const formInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <FormGroupContainer>
      <FormInputContainer onChange={handleChange} {...otherProps} />
      {label ? (
        <LabelContainer
          className={`${otherProps.value.length ? "shrink" : ""} `}
        >
          {label}
        </LabelContainer>
      ) : null}
    </FormGroupContainer>
  );
};

export default formInput;
