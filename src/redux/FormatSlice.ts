import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const FormatSlice = createSlice({
  name: "format",
  initialState: {
    format: "number",
  },
  reducers: {
    setFormat: (state, action: PayloadAction<string>) => {
      state.format = action.payload;
    },
  },
});

export const { setFormat } = FormatSlice.actions;

export default FormatSlice.reducer;
