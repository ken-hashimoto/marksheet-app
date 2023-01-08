import { useState, useContext } from "react";
import Select from "react-select";
import { ChoiceButtonList } from "../components/ChoiceButtonList";
import { MarkSheetParamsContext } from "../components/providers/MarkSheetParamsProvider";
// 問題数の選択肢のプルダウンを生成
const generateNumSelect = (maxNum: number) => {
  type Selections = {
    value: number;
    key: number;
    label: string;
  };
  const options: Selections[] = [];
  for (let i = 1; i < maxNum + 1; i++) {
    const tmp: Selections = { value: i, key: i, label: String(i) };
    options.push(tmp);
  }
  return options;
};
type Props = {
  value: number | string;
  handler:
    | React.Dispatch<React.SetStateAction<number>>
    | React.Dispatch<React.SetStateAction<string>>;
};
export const SelectChoiceFormat = (props: Props) => {
  const { value, handler } = props;
  const { ChoiceFormat } = useContext(MarkSheetParamsContext);
  const options = [
    { value: "number", label: "数字（1,2,3, ...）" },
    {
      value: "alphabet",
      label: "アルファベット（A,B,C, ...）",
    },
  ];
  // TODO: ここのanyをなおす
  const handleChoiceFormat = (e: any) => {
    handler((value: any) => (value = e.value));
  };
  return (
    <Select
      options={options}
      onChange={handleChoiceFormat}
      defaultValue={options.find((item) => item.value === ChoiceFormat)}
    />
  );
};
export const SelectChoiceNum = (props: Props) => {
  const { value, handler } = props;
  const { ChoiceNum } = useContext(MarkSheetParamsContext);
  const options = generateNumSelect(9);
  // TODO: ここのanyをなおす
  const handleChoiceNum = (e: any) => {
    handler((value: any) => (value = e.value));
  };
  return (
    <Select
      options={options}
      onChange={handleChoiceNum}
      defaultValue={options.find((item) => item.value === ChoiceNum)}
    />
  );
};

export const SelectQNum = (props: Props) => {
  const { value, handler } = props;
  const { QNum } = useContext(MarkSheetParamsContext);
  const options = generateNumSelect(200);
  // TODO: ここのanyをなおす
  const handleQNum = (e: any) => {
    handler((value: any) => (value = e.value));
  };
  return (
    <Select
      options={options}
      onChange={handleQNum}
      defaultValue={options.find((item) => item.value === QNum)}
    />
  );
};
export const Home = () => {
  return <ChoiceButtonList></ChoiceButtonList>;
};
