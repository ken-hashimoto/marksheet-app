import styled from "styled-components";
import { QNumBox } from "./QNum";
import { ChoiceButtons } from "./ChoiceButtons";
import { useContext } from "react";
import { MarkSheetParamsContext } from "./providers/MarkSheetParamsProvider";

export const ChoiceButtonList = () => {
  const { ChoiceFormat, ChoiceNum, QNum } = useContext(MarkSheetParamsContext);

  const generateQNumList = (start: number, stop: number) =>
    Array.from({ length: stop - start + 1 }, (_, i) => start + i);
  const QNumList: number[] = generateQNumList(1, QNum);
  return (
    <>
      {QNumList.map((val) => (
        <>
          <SChoiceButtonsWrapper
            className={`${val % 2 === 0 ? "is-gray" : ""} ${
              val === 1 ? "is-top" : ""
            } ${val === QNum ? "is-bottom" : ""}`}
          >
            <QNumBox QIndex={val}></QNumBox>
            <ChoiceButtons
              cnt={ChoiceNum}
              format={ChoiceFormat}
            ></ChoiceButtons>
          </SChoiceButtonsWrapper>
        </>
      ))}
    </>
  );
};

const SChoiceButtonsWrapper = styled.div`
  display: flex;
  border-right: 2px solid;
  border-left: 2px solid;
  height: 50px;
  width: fit-content; // 大きさを子要素に合わせる
  margin: 0 auto;
  &.is-gray {
    background-color: #e7e5e5;
  }
  &.is-top {
    border-top: 2px solid;
  }
  &.is-bottom {
    border-bottom: 2px solid;
  }
`;
