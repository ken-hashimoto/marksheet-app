import styled from "styled-components";
import { useState } from "react";

const ChoiceButton = (props) => {
  const index = props.index;
  const SChoiceButton = styled.div`
    width: 15px;
    height: 30px;
    border-radius: 50%;
    border: 2px solid;
    box-sizing: border-box;
    line-height: 30px;
    margin: 10px;
    &.is-filled {
      background: black;
    }
  `;
  const [isFilled, setFilled] = useState(false);
  const onClickChoiceButton = () => {
    console.log(isFilled);
    setFilled(!isFilled);
  };
  return (
    <SChoiceButton
      onClick={onClickChoiceButton}
      className={isFilled ? "is-filled" : ""}
    >
      {index}
    </SChoiceButton>
  );
};

export const ChoiceButtons = (props) => {
  const { cnt, format } = props;
  const num_list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const alphabet_list = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
  const choice_list =
    format === "number" ? num_list.slice(0, cnt) : alphabet_list.slice(0, cnt);
  const SChoiceButtonsWrapper = styled.div`
    display: flex;
    border: 2px solid;
    width: fit-content; // 大きさを子要素似合わせる
    margin: 0 auto; // 中央揃え
  `;
  return (
    <SChoiceButtonsWrapper>
      {choice_list.map((val) => (
        <ChoiceButton index={val}></ChoiceButton>
      ))}
    </SChoiceButtonsWrapper>
  );
};

export const ChoiceButtonList = (props) => {
  const { QNum, cnt, format } = props;
  const generateQNumList = (start, stop) =>
    Array.from({ length: stop - start + 1 }, (_, i) => start + i);
  const QNumList = generateQNumList(1, QNum);
  return (
    <>
      {QNumList.map((val) => (
        <ChoiceButtons cnt={cnt} format={format}></ChoiceButtons>
      ))}
    </>
  );
};
