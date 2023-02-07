import styled from "styled-components";
import { QNumBox } from "./QNum";
import { ChoiceButtons } from "./ChoiceButtons";
import { useCallback, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { finishloading } from "../redux/loadingSlice";

export const ChoiceButtonList = () => {
  console.log("レンダリング");
  const renderFlagRef = useRef(false);
  const ChoicedNum = useSelector(
    (state: RootState) => state.ChoiceNum.ChoiceNum
  );
  const QNum = useSelector((state: RootState) => state.QNum.QNum);
  const ChoicedFormat = useSelector((state: RootState) => state.format.format);
  const generateQNumList = useCallback(
    (start: number, stop: number) =>
      Array.from({ length: stop - start + 1 }, (_, i) => start + i),
    []
  );
  const QNumList: number[] = generateQNumList(1, QNum);
  const dispatch = useDispatch();
  const isloading = useSelector((state: RootState) => state.loading.isloading);
  useEffect(() => {
    if (renderFlagRef.current) {
      console.log("finish");
      dispatch(finishloading());
      console.log(isloading);
    } else {
      renderFlagRef.current = true;
    }
  });
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
              cnt={ChoicedNum}
              format={ChoicedFormat}
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
