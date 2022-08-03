import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ScoreState {
  value: number;
}

const initialState: ScoreState = {
  value: 0,
};

const ScoreSlice = createSlice({
  name: "score",
  initialState,
  reducers: {
    // increment
    incremented(state) {
      state.value++;
    },
    // reset
    reset(state) {
      state.value = 0;
    },
  },
});

export const { incremented, reset } = ScoreSlice.actions;

export default ScoreSlice.reducer;
