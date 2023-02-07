import { createSlice } from "@reduxjs/toolkit";

export const QNumSlice = createSlice({
  name: "QNum",
  initialState: {
    QNum: 5,
  },
  reducers: {
    setQNum: (state, action) => {
      state.QNum = action.payload;
    },
  },
});
export const { setQNum } = QNumSlice.actions;
export default QNumSlice.reducer;
