import { createSlice } from "@reduxjs/toolkit";

interface dropDownState {
  isDropDown: boolean;
}

const initialState: dropDownState = {
  isDropDown: true,
};

const DropDownSlice = createSlice({
  name: "isDropDown",
  initialState,
  reducers: {
    toggleDropDown(state) {
      state.isDropDown = !state.isDropDown;
    },
  },
});

export const { toggleDropDown } = DropDownSlice.actions;

export default DropDownSlice.reducer;
