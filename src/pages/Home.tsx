import { useState } from "react";
import Select from "react-select";
import { ChoiceButtonList } from "../components/ChoiceButtonList";
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
  const options = [
    { value: "number", label: "数字（1,2,3, ...）" },
    { value: "alphabet", label: "アルファベット（A,B,C, ...）" },
  ];
  // TODO: ここのanyをなおす
  const handleChoiceFormat = (e: any) => {
    handler((value: any) => (value = e.value));
  };
  return (
    <Select
      options={options}
      onChange={handleChoiceFormat}
      defaultValue={options[0]}
    />
  );
};
export const SelectChoiceNum = (props: Props) => {
  const { value, handler } = props;
  const options = generateNumSelect(9);
  // TODO: ここのanyをなおす
  const handleChoiceNum = (e: any) => {
    handler((value: any) => (value = e.value));
  };
  return (
    <Select
      options={options}
      onChange={handleChoiceNum}
      defaultValue={options[5 - 1]}
    />
  );
};

export const SelectQNum = (props: Props) => {
  const { value, handler } = props;
  const options = generateNumSelect(200);
  // TODO: ここのanyをなおす
  const handleQNum = (e: any) => {
    handler((value: any) => (value = e.value));
  };
  return (
    <Select
      options={options}
      onChange={handleQNum}
      defaultValue={options[5 - 1]}
    />
  );
};
export const Home = () => {
  const initialQNum: number = 5;
  const initialChoiceNum: number = 5;
  const [ChoiceNum, setChoiceNum] = useState<number>(initialChoiceNum);
  const [QNum, setQNum] = useState<number>(initialQNum);
  return (
    <>
      <h2>選択肢の数(1から9まで)を入力してください</h2>
      <SelectChoiceNum
        value={ChoiceNum}
        handler={setChoiceNum}
      ></SelectChoiceNum>
      <h2>問題数を入力してください</h2>
      <SelectQNum value={QNum} handler={setQNum}></SelectQNum>
      <ChoiceButtonList cnt={ChoiceNum} QNum={QNum}></ChoiceButtonList>
    </>
  );
};
