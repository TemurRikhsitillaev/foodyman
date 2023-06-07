import React from "react";

import customStyle from "./button.module.css";
import deleteIconPath from "../../assets/delete-icon.svg";

export const ButtonUpdateNavTop = ({ currentFormField, ...otherProps }) => {
  return (
    <button
      {...otherProps}
      className={
        currentFormField
          ? customStyle.currentButtonActive
          : customStyle.currentButton
      }
    ></button>
  );
};

export const ButtonUpdateNavBottom = ({ currentFormField, ...otherProps }) => {
  return (
    <button
      {...otherProps}
      className={
        currentFormField ? customStyle.button : customStyle.displayNone
      }
    ></button>
  );
};

export const ButtonAdd = ({ ...otherProps }) => {
  return <button {...otherProps} className={customStyle.addButton}></button>;
};

export const ButtonDelete = ({ ...otherProps }) => {
  return <button {...otherProps} className={customStyle.deleteButton}></button>;
};

export const ButtonSelectedProductDelete = ({ ...otherProps }) => {
  return (
    <button {...otherProps} className={customStyle.functionButton}></button>
  );
};

export const ButtonProductDelete = ({ ...otherProps }) => {
  return (
    <button {...otherProps} className={customStyle.tableFunctionButtonDelete}>
      <img src={deleteIconPath} alt="delete" className={customStyle.image} />
    </button>
  );
};

export const ButtonDeleteVerifyYes = ({ ...otherProps }) => {
  return (
    <button {...otherProps} className={customStyle.deleteVerifyYes}></button>
  );
};
export const ButtonDeleteVerifyNo = ({ ...otherProps }) => {
  return (
    <button {...otherProps} className={customStyle.deleteVerifyNo}></button>
  );
};
