import { RECIPES_ACTION_TYPES } from "./recipes.types";

const RECIPES_INITIAL_STATE = {
  foods: [],
  recipes: [],
  show: [],
};

export const recipesReducer = (state = RECIPES_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case RECIPES_ACTION_TYPES.SET_SHOW:
      return {
        ...state,
        show: payload,
      };
    case RECIPES_ACTION_TYPES.SET_FOODS:
      return {
        ...state,
        foods: payload,
      };
    case RECIPES_ACTION_TYPES.SET_RECIPES:
      return {
        ...state,
        recipes: payload,
      };
    case RECIPES_ACTION_TYPES.SET_ALL_RECIPES:
      return {
        ...state,
        recipes: payload,
      };
    default:
      return state;
  }
};
