import React from "react";

import "./button.styles.scss";

const Button = ({ ...otherProps }) => {
  return <button {...otherProps}></button>;
};

export default Button;
