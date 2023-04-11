import { RECIPES_ACTION_TYPES } from "./recipes.types";

const RECIPES_INITIAL_STATE = {
  recipes: [],
  checkboxDelete: [],
};

export const recipesReducer = (state = RECIPES_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case RECIPES_ACTION_TYPES.SET_RECIPES:
      return {
        ...state,
        recipes: payload,
      };
    case RECIPES_ACTION_TYPES.SET_RECIPES_CHECKBOX_DELETE:
      return {
        ...state,
        checkboxDelete: payload,
      };
    default:
      return state;
  }
};
