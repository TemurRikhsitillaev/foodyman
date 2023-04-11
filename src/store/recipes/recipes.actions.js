import { createAction } from "../../utils/reducer/reducer.utils";
import { RECIPES_ACTION_TYPES } from "./recipes.types";

export const setRecipes = (recipesArray) =>
  createAction(RECIPES_ACTION_TYPES.SET_RECIPES, recipesArray);

export const setCheckboxDelete = (checkboxDeleteArray) =>
  createAction(
    RECIPES_ACTION_TYPES.SET_RECIPES_CHECKBOX_DELETE,
    checkboxDeleteArray
  );
