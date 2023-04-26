import { createAction } from "../../utils/reducer/reducer.utils";
import { RECIPES_ACTION_TYPES } from "./recipes.types";

export const setRecipes = (recipesArray) =>
  createAction(RECIPES_ACTION_TYPES.SET_RECIPES, recipesArray);

export const setFoods = (foodsArray) =>
  createAction(RECIPES_ACTION_TYPES.SET_FOODS, foodsArray);

export const setShow = (showArray) =>
  createAction(RECIPES_ACTION_TYPES.SET_SHOW, showArray);
