import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  countries: [],
  status: "idle",
  error: null,
};

export const fetchCountries = createAsyncThunk(
  "countries/fetchCountries",
  async () => {
    const response = await axios.get("https://restcountries.com/v3.1/all");
    // console.log(response);
    return response;
  }
);

const apiReducer = createSlice({
  name: "api",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCountries.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.countries.push(action.payload.data);
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      });
  },
});

export const selectAllData = (state) => state.countries.countries;
export const selectStatus = (state) => state.countries.status;
export const selectError = (state) => state.countries.error;

export default apiReducer.reducer;
