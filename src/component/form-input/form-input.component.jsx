import React, { Fragment } from "react";

import "./form-input.styles.scss";

const FormInput = ({
  myType = "input",
  label = null,
  options = null,
  ...otherprops
}) => {
  switch (myType) {
    case "input":
      return (
        <Fragment>
          <label className="label">{label}</label>
          <input {...otherprops} />
        </Fragment>
      );

    case "select":
      return (
        <Fragment>
          <label className="label">{label}</label>
          <select {...otherprops}>
            {options.map(({ id, value, ...otherpropsoption }) => {
              return (
                <option key={id} value={value} {...otherpropsoption}>
                  {value}
                </option>
              );
            })}
          </select>
        </Fragment>
      );

    case "checkbox":
      return <input {...otherprops} />;

    default:
      return null;
  }
};

export default FormInput;
