import { RECIPES_ACTION_TYPES } from "./recipes.types";

const RECIPES_INITIAL_STATE = {
  recipes: [],
};

export const recipesReducer = (state = RECIPES_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case RECIPES_ACTION_TYPES.SET_RECIPES:
      return {
        ...state,
        recipes: payload,
      };
    default:
      return state;
  }
};
