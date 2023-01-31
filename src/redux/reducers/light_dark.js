import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle: localStorage.getItem("theme") === "DARK" ? "light" : "dark",
};

const lightDarkReducer = createSlice({
  name: "light_dark",
  initialState,
  reducers: {
    toggleLightDark: (state, action) => {
      localStorage.setItem(
        "theme",
        action.payload === "light" ? "DARK" : "LIGHT"
      );
      state.toggle = action.payload;
    },
  },
});

export const toggling = (state) => state.toggleLightDark.toggle;

export const { toggleLightDark } = lightDarkReducer.actions;

export default lightDarkReducer.reducer;
