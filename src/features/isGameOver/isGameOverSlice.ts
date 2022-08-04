import { createSlice } from "@reduxjs/toolkit";

interface isGameOverState {
  isGameOver: boolean;
}

const initialState: isGameOverState = {
  isGameOver: false,
};

const isGameOver = createSlice({
  name: "isGameOver",
  initialState,
  reducers: {
    toggleGameOver(state) {
      state.isGameOver = !state.isGameOver;
    },
  },
});

export const { toggleGameOver } = isGameOver.actions;

export default isGameOver.reducer;
