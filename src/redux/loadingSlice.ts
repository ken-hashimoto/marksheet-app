import { createSlice } from "@reduxjs/toolkit";

export const loadingSlice = createSlice({
  name: "loading",
  initialState: {
    isloading: false,
  },
  reducers: {
    startloading: (state) => {
      state.isloading = true;
    },
    finishloading: (state) => {
      state.isloading = false;
    },
  },
});

export const { startloading, finishloading } = loadingSlice.actions;

export default loadingSlice.reducer;
