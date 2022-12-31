// import styled from "styled-components";
import { useState } from "react";
import { ChoiceButtons } from "../components/ChoiceButtons";
import Select from "react-select";
// 問題数の選択肢のプルダウンを生成
const generateChoiceNumOptions = () => {
  const maxNum = 9;
  const options = [];
  for (let i = 1; i < maxNum + 1; i++) {
    const tmp = { value: i, key: i, label: String(i) };
    options.push(tmp);
  }
  return options;
};

const SelectChoiceFormat = () => {
  const options = [
    { value: "alphabet", label: "アルファベット（A,B,C, ...）" },
    { value: "number", label: "数字（1,2,3, ...）" },
  ];
  return <Select options={options} />;
};
const SelectChoiceNum = ({ value, handler }) => {
  const options = generateChoiceNumOptions();
  const handleChoiceNum = (e) => {
    handler(e.value);
  };
  return <Select options={options} onChange={handleChoiceNum} />;
};
export const Home = () => {
  const [ChoiceNum, setChoiceNum] = useState(5);

  return (
    <>
      <h2>問題番号の形式を選択してください</h2>
      <SelectChoiceFormat></SelectChoiceFormat>
      <h2>選択肢の数(1から9まで)を入力してください</h2>
      <SelectChoiceNum
        value={ChoiceNum}
        handler={setChoiceNum}
      ></SelectChoiceNum>
      <ChoiceButtons cnt={ChoiceNum}></ChoiceButtons>
    </>
  );
};
