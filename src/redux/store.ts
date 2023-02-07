import { configureStore } from "@reduxjs/toolkit";
import FormatReducer from "./FormatSlice";
import QNumReducer from "./QNumSlice";
import ChoiceNumReducer from "./ChoiceNumSlice";

export const store = configureStore({
  reducer: {
    format: FormatReducer,
    QNum: QNumReducer,
    ChoiceNum: ChoiceNumReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
