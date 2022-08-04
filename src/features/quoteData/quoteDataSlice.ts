import { createSlice } from "@reduxjs/toolkit";

import quoteData from "../../quotes.json";

interface dataState {
  value: Array<object>;
}

const initialState: dataState = {
  value: quoteData,
};

const quoteDataSlice = createSlice({
  name: "quoteData",
  initialState,
  reducers: {
    getData(state) {
      state.value = quoteData;
    },
  },
});

export const { getData } = quoteDataSlice.actions;

export default quoteDataSlice.reducer;
