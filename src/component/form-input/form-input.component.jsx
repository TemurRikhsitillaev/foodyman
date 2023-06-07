import React, { Fragment } from "react";

import customStyle from "./form-input.module.css";

export const InputDefault = ({ label, ...otherprops }) => {
  return (
    <Fragment>
      <label className={customStyle.label}>{label}</label>
      <input {...otherprops} className={customStyle} />
    </Fragment>
  );
};

export const InputSelect = ({ label, options, ...otherprops }) => {
  return (
    <Fragment>
      <label className={customStyle.label}>{label}</label>
      <select {...otherprops} className={customStyle}>
        {options.map(({ id, value, ...otherpropsoption }) => {
          return (
            <option
              key={id}
              value={value}
              {...otherpropsoption}
              className={customStyle}
            >
              {value}
            </option>
          );
        })}
      </select>
    </Fragment>
  );
};

export const InputCheckbox = ({ ...otherprops }) => {
  return <input {...otherprops} className={customStyle} />;
};
