import styled from "styled-components";
import React from "react";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Push, QPlace } from "../redux/PushedButtonSlice";

// ChoiceButtonとQNumを格納するcontainer
export const SChoiceButtonsContainer = styled.div`
  width: 30px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  &.is-QNum {
    border-right: 2px solid;
  }
`;
type Props = {
  //選択肢の形式はalphabetか数字
  index: number | string;
  QNum: number;
  isPushed: boolean;
};
const SChoiceButton = styled.div`
  width: 15px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid;
  box-sizing: border-box;
  line-height: 30px;
  text-align: center;
  padding: 2px 0;
  font: 1em sans-serif;
  &.is-filled {
    background: black;
  }
`;
const ConvertToNumber: { [key: string]: number } = {
  A: 1,
  B: 2,
  C: 3,
  D: 4,
  E: 5,
  F: 6,
  G: 7,
  H: 8,
  I: 9,
};
export const ChoiceButton = React.memo((props: Props) => {
  ChoiceButton.displayName = "ChoiceButton";
  const { index, QNum, isPushed } = props;
  const dispatch = useDispatch();
  let NumIndex: number = 0;

  if (typeof index === "string") {
    NumIndex = ConvertToNumber[index];
  } else {
    NumIndex = index;
  }
  const onClickChoiceButton = useCallback(() => {
    const place: QPlace = { QNum: QNum, index: NumIndex };
    dispatch(Push(place));
  }, []);
  return (
    <SChoiceButtonsContainer>
      <SChoiceButton
        onClick={onClickChoiceButton}
        className={isPushed ? "is-filled" : ""}
      >
        {index}
      </SChoiceButton>
    </SChoiceButtonsContainer>
  );
});
