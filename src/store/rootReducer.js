import { combineReducers } from "redux";

import { recipesReducer } from "./recipes/recipes.reducer";

export const rootReducer = combineReducers({
  recipes: recipesReducer,
});
