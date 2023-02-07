import Select from "react-select";
import { ChoiceButtonList } from "../components/ChoiceButtonList";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { setFormat } from "../redux/FormatSlice";
import { RootState } from "../redux/store";
import { setChoiceNum } from "../redux/ChoiceNumSlice";
import { setQNum } from "../redux/QNumSlice";
import { startloading, finishloading } from "../redux/loadingSlice";
import React from "react";

// 問題数の選択肢のプルダウンを生成
const generateNumSelect = (maxNum: number) => {
  type Selections = {
    value: number;
    label: string;
  };
  const options: Selections[] = [];
  for (let i = 1; i < maxNum + 1; i++) {
    const tmp: Selections = { value: i, label: String(i) };
    options.push(tmp);
  }
  return options;
};

export const SelectChoiceFormat = React.memo(() => {
  SelectChoiceFormat.displayName = "SelectChoiceFormat";
  const selectedFormat = useSelector((state: RootState) => state.format.format);
  const dispatch = useDispatch();
  const options = [
    { value: "number", label: "数字（1,2,3, ...）" },
    {
      value: "alphabet",
      label: "アルファベット（A,B,C, ...）",
    },
  ];
  // TODO: ここのanyをなおす
  const handleChoiceFormat = (e: any) => {
    dispatch(startloading());
    console.log("loading Format");
    dispatch(setFormat(e.value));
  };
  return (
    <Select
      options={options}
      onChange={handleChoiceFormat}
      defaultValue={options.find((item) => item.value === selectedFormat)}
    />
  );
});
export const SelectChoiceNum = React.memo(() => {
  SelectChoiceNum.displayName = "SelectChoiceNum";
  const selectedChoiceNum = useSelector(
    (state: RootState) => state.ChoiceNum.ChoiceNum
  );
  const dispatch = useDispatch();
  const options = generateNumSelect(9);
  // TODO: ここのanyをなおす
  const handleChoiceNum = (e: any) => {
    dispatch(startloading());
    console.log("loading ChoiceNum");
    dispatch(setChoiceNum(e.value));
  };
  return (
    <Select
      options={options}
      onChange={handleChoiceNum}
      defaultValue={options.find((item) => item.value === selectedChoiceNum)}
    />
  );
});

export const SelectQNum = React.memo(() => {
  SelectQNum.displayName = "SelectQNum";
  const selectedQNum = useSelector((state: RootState) => state.QNum.QNum);
  const dispatch = useDispatch();
  const options = generateNumSelect(50);
  // TODO: ここのanyをなおす
  const handleQNum = (e: any) => {
    dispatch(startloading());
    console.log("loading QNum");
    dispatch(setQNum(e.value));
  };
  return (
    <Select
      options={options}
      onChange={handleQNum}
      defaultValue={options.find((item) => item.value === selectedQNum)}
    />
  );
});

const HomeWrapper = styled.div`
  margin: 50px 0;
`;
export const Home = () => {
  return (
    <HomeWrapper>
      <ChoiceButtonList></ChoiceButtonList>
    </HomeWrapper>
  );
};
