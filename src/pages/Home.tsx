import { useContext } from "react";
import Select from "react-select";
import { ChoiceButtonList } from "../components/ChoiceButtonList";
import { MarkSheetParamsContext } from "../components/providers/MarkSheetParamsProvider";
import styled from "styled-components";

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

export const SelectChoiceFormat = () => {
  const { ChoiceFormat, setChoiceFormat } = useContext(MarkSheetParamsContext);
  const options = [
    { value: "number", label: "数字（1,2,3, ...）" },
    {
      value: "alphabet",
      label: "アルファベット（A,B,C, ...）",
    },
  ];
  // TODO: ここのanyをなおす
  const handleChoiceFormat = (e: any) => {
    setChoiceFormat((value: any) => (value = e.value));
  };
  return (
    <Select
      options={options}
      onChange={handleChoiceFormat}
      defaultValue={options.find((item) => item.value === ChoiceFormat)}
    />
  );
};
export const SelectChoiceNum = () => {
  const { ChoiceNum, setChoiceNum } = useContext(MarkSheetParamsContext);
  const options = generateNumSelect(9);
  // TODO: ここのanyをなおす
  const handleChoiceNum = (e: any) => {
    setChoiceNum((value: any) => (value = e.value));
  };
  return (
    <Select
      options={options}
      onChange={handleChoiceNum}
      defaultValue={options.find((item) => item.value === ChoiceNum)}
    />
  );
};

export const SelectQNum = () => {
  const { QNum, setQNum } = useContext(MarkSheetParamsContext);
  const options = generateNumSelect(50);
  // TODO: ここのanyをなおす
  const handleQNum = (e: any) => {
    setQNum((value: any) => (value = e.value));
  };
  return (
    <Select
      options={options}
      onChange={handleQNum}
      defaultValue={options.find((item) => item.value === QNum)}
    />
  );
};

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
