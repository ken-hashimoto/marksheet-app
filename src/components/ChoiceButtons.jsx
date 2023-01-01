import styled from "styled-components";
import { useState } from "react";

const SChoiceButtonsWrapper = styled.div`
  display: flex;
  border: 2px solid;
  height: 50px;
  width: fit-content; // 大きさを子要素似合わせる
  margin: auto; // 選択肢群の中央揃え
`;

// ChoiceButtonとQNumを格納するcontainer
const SChoiceButtonsContainer = styled.div`
  width: 30px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  &.is-QNum {
    border-right: 2px solid;
  }
`;
const ChoiceButton = (props) => {
  const index = props.index;
  const SChoiceButton = styled.div`
    width: 15px;
    height: 30px;
    border-radius: 50%;
    border: 2px solid;
    box-sizing: border-box;
    line-height: 30px;
    &.is-filled {
      background: black;
    }
  `;
  const [isFilled, setFilled] = useState(false);
  const onClickChoiceButton = () => {
    setFilled(!isFilled);
  };
  return (
    <SChoiceButtonsContainer>
      <SChoiceButton
        onClick={onClickChoiceButton}
        className={isFilled ? "is-filled" : ""}
      >
        {index}
      </SChoiceButton>
    </SChoiceButtonsContainer>
  );
};

const QNumBox = ({ QNumIndex }) => {
  return (
    <SChoiceButtonsContainer className={"is-QNum"}>
      <div>{QNumIndex}</div>
    </SChoiceButtonsContainer>
  );
};

export const ChoiceButtons = (props) => {
  const { cnt, format } = props;
  const num_list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const alphabet_list = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
  const choice_list =
    format === "number" ? num_list.slice(0, cnt) : alphabet_list.slice(0, cnt);
  return (
    <>
      {choice_list.map((val) => (
        <ChoiceButton index={val}></ChoiceButton>
      ))}
    </>
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
        <>
          <SChoiceButtonsWrapper>
            <QNumBox QNumIndex={val}></QNumBox>
            <ChoiceButtons cnt={cnt} format={format}></ChoiceButtons>
          </SChoiceButtonsWrapper>
        </>
      ))}
    </>
  );
};
