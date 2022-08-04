import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import quoteData from "../../quotes.json";

interface currentDataState {
  value: string;
  real: boolean;
}

const initialDataArray = quoteData[Math.floor(Math.random() * 2)];
const initialDataBoolean = initialDataArray.real;
const initialDataQuote =
  initialDataArray.data[
    Math.floor(Math.random() * initialDataArray.data.length)
  ];

const initialState: currentDataState = {
  value: initialDataQuote,
  real: initialDataBoolean,
};

const CurrentDataSlice = createSlice({
  name: "currentData",
  initialState,
  reducers: {
    getNewQuote(state, action: PayloadAction<Array<number>>) {
      state.real = quoteData[action.payload[0]].real;
      state.value = quoteData[action.payload[0]].data[action.payload[1]];
    },
  },
});

export const { getNewQuote } = CurrentDataSlice.actions;

export default CurrentDataSlice.reducer;
