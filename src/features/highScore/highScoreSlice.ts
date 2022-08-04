import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface highScoreState {
  value: number;
}

const initialState: highScoreState = {
  value: 0,
};

const HighScoreSlice = createSlice({
  name: "highScore",
  initialState,
  reducers: {
    // new highScore
    newHighScore(state, action: PayloadAction<number>) {
      if (action.payload > state.value) state.value = action.payload;
    },
  },
});

export const { newHighScore } = HighScoreSlice.actions;

export default HighScoreSlice.reducer;
