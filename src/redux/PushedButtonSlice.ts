import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { QNumLimit, ChoiceLimit } from "../params/ChoiceButtonParams";
const initialarrays = new Array(QNumLimit);
for (let i = 0; i < QNumLimit; i++) {
  initialarrays[i] = Array.from({ length: ChoiceLimit }, () => false);
}

const generateInitialArray = () => {
  const initialarrays = new Array(QNumLimit);
  for (let i = 0; i < QNumLimit; i++) {
    initialarrays[i] = Array.from({ length: ChoiceLimit }, () => false);
  }
  return initialarrays;
};
export type QPlace = {
  QNum: number;
  index: number;
};
export type PairOfRows = {
  QNum1: number;
  QNum2: number;
};

export const PushedButtonSlice = createSlice({
  name: "PushedButton",
  initialState: {
    PushedButtonCondition: initialarrays as Array<Array<boolean>>,
  },
  reducers: {
    Push: (state, action: PayloadAction<QPlace>) => {
      // 0-indexedに合わせるために-1をしている
      state.PushedButtonCondition[action.payload.QNum - 1][
        action.payload.index - 1
      ] =
        !state.PushedButtonCondition[action.payload.QNum - 1][
          action.payload.index - 1
        ];
    },
    SwapRows: (state, action: PayloadAction<PairOfRows>) => {
      let tmp1 = state.PushedButtonCondition[action.payload.QNum1 - 1];
      let tmp2 = state.PushedButtonCondition[action.payload.QNum2 - 1];
      state.PushedButtonCondition[action.payload.QNum1 - 1] = tmp2;
      state.PushedButtonCondition[action.payload.QNum2 - 1] = tmp1;
    },
    Reset: (state) => {
      state.PushedButtonCondition = generateInitialArray();
    },
  },
});
export const { Push, SwapRows,Reset } = PushedButtonSlice.actions;
export default PushedButtonSlice.reducer;
