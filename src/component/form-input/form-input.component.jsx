import React, { Fragment } from "react";

import "./form-input.styles.scss";

const FormInput = ({
  myType = "input",
  label,
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
                <option
                  key={id}
                  value={value}
                  {...otherpropsoption}
                >
                  {value}
                </option>
              );
            })}
          </select>
        </Fragment>
      );

    default:
      return null;
  }
};

export default FormInput;
