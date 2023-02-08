import { configureStore } from "@reduxjs/toolkit";
import FormatReducer from "./FormatSlice";
import QNumReducer from "./QNumSlice";
import ChoiceNumReducer from "./ChoiceNumSlice";
import loadingReducer from "./loadingSlice";
import ButtonConditionReducer from "./PushedButtonSlice";

export const store = configureStore({
  reducer: {
    format: FormatReducer,
    QNum: QNumReducer,
    ChoiceNum: ChoiceNumReducer,
    loading: loadingReducer,
    ButtonCondition: ButtonConditionReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
