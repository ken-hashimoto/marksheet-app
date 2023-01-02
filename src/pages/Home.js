// import styled from "styled-components";
import { useState } from "react";
import { ChoiceButtonList } from "../components/ChoiceButtons";
import Select from "react-select";
// 問題数の選択肢のプルダウンを生成
const generateNumSelect = (maxNum) => {
  const options = [];
  for (let i = 1; i < maxNum + 1; i++) {
    const tmp = { value: i, key: i, label: String(i) };
    options.push(tmp);
  }
  return options;
};

const SelectChoiceFormat = ({ value, handler }) => {
  const options = [
    { value: "number", label: "数字（1,2,3, ...）" },
    { value: "alphabet", label: "アルファベット（A,B,C, ...）" },
  ];
  const handleChoiceFormat = (e) => {
    handler((value) => (value = e.value));
  };
  return (
    <Select
      options={options}
      onChange={handleChoiceFormat}
      defaultValue={options[0]}
    />
  );
};
const SelectChoiceNum = ({ value, handler }) => {
  const options = generateNumSelect(9);
  const handleChoiceNum = (e) => {
    handler((value) => (value = e.value));
  };
  return (
    <Select
      options={options}
      onChange={handleChoiceNum}
      defaultValue={options[5 - 1]}
    />
  );
};

const SelectQNum = ({ value, handler }) => {
  const options = generateNumSelect(200);
  const handleQNum = (e) => {
    handler((value) => (value = e.value));
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
  const initialQNum = 5;
  const [ChoiceNum, setChoiceNum] = useState(initialQNum);
  const [ChoiceFormat, setChoiceFormat] = useState("number");
  const [QNum, setQNum] = useState(5);
  return (
    <>
      <h2>問題番号の形式を選択してください</h2>
      <SelectChoiceFormat
        value={ChoiceFormat}
        handler={setChoiceFormat}
      ></SelectChoiceFormat>
      <h2>選択肢の数(1から9まで)を入力してください</h2>
      <SelectChoiceNum
        value={ChoiceNum}
        handler={setChoiceNum}
      ></SelectChoiceNum>
      <h2>問題数を入力してください</h2>
      <SelectQNum value={QNum} handler={setQNum}></SelectQNum>
      <ChoiceButtonList
        cnt={ChoiceNum}
        format={ChoiceFormat}
        QNum={QNum}
      ></ChoiceButtonList>
    </>
  );
};
