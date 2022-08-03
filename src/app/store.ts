import { configureStore } from "@reduxjs/toolkit";
import scoreReducer from "../features/score/scoreSlice";

export const store = configureStore({
  reducer: {
    score: scoreReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
