import { combineReducers } from "redux";
import { countryReducer } from "./countries/country-reducer";
import { themeReducer } from "./themeSwitcher/theme-reducer";
export const rootReducer = combineReducers({
  countryReducer,
  themeReducer,
});
