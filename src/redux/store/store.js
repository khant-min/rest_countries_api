import { configureStore } from "@reduxjs/toolkit";
import lightDarkReducer from "../reducers/light_dark";
import apiReducer from "../reducers/api";

export const store = configureStore({
  reducer: {
    toggleLightDark: lightDarkReducer,
    countries: apiReducer,
  },
});
