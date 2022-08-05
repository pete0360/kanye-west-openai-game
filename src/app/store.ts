import { configureStore } from "@reduxjs/toolkit";
import scoreReducer from "../features/score/scoreSlice";
import highScoreReducer from "../features/highScore/highScoreSlice";
import quoteDataReducer from "../features/quoteData/quoteDataSlice";
import currentDataSlice from "../features/currentData/currentDataSlice";
import isGameOverSlice from "../features/isGameOver/isGameOverSlice";
import isDropDownSlice from "../features/isDropDown/isDropDownSlice";
import showIconSlice from "../features/showIcon/showIconSlice";

export const store = configureStore({
  reducer: {
    score: scoreReducer,
    highScore: highScoreReducer,
    quoteData: quoteDataReducer,
    currentData: currentDataSlice,
    gameOver: isGameOverSlice,
    dropDown: isDropDownSlice,
    icons: showIconSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
