import { configureStore } from "@reduxjs/toolkit";
import scoreReducer from "../features/score/scoreSlice";
import highScoreReducer from "../features/highScore/highScoreSlice";
import quoteDataReducer from "../features/quoteData/quoteDataSlice";
import currentDataSlice from "../features/currentData/currentDataSlice";
import isGameOverSlice from "../features/isGameOver/isGameOverSlice";

export const store = configureStore({
  reducer: {
    score: scoreReducer,
    highScore: highScoreReducer,
    quoteData: quoteDataReducer,
    currentData: currentDataSlice,
    gameOver: isGameOverSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
