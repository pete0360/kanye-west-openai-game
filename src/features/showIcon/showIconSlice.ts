import { createSlice } from "@reduxjs/toolkit";

interface showIconState {
  checkIcon: boolean;
  xIcon: boolean;
}

const initialState: showIconState = {
  checkIcon: false,
  xIcon: false,
};

const ShowIconSlice = createSlice({
  name: "showIcons",
  initialState,
  reducers: {
    toggleCheckIcon(state) {
      state.checkIcon = !state.checkIcon;
    },
    toggleXIcon(state) {
      state.xIcon = !state.xIcon;
    },
  },
});

export const { toggleCheckIcon, toggleXIcon } = ShowIconSlice.actions;

export default ShowIconSlice.reducer;
