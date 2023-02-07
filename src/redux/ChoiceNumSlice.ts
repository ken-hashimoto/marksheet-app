import { createSlice } from "@reduxjs/toolkit";

export const ChoiceNumSlice = createSlice({
  name: "ChoiceNum",
  initialState: {
    ChoiceNum: 5,
  },
  reducers: {
    setChoiceNum: (state, action) => {
      state.ChoiceNum = action.payload;
    },
  },
});
export const { setChoiceNum } = ChoiceNumSlice.actions;
export default ChoiceNumSlice.reducer;
