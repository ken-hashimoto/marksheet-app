import styled from "styled-components";
import { QNumBox } from "./QNum";
import { ChoiceButtons } from "./ChoiceButtons";
import { useState, useCallback, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { finishloading } from "../redux/loadingSlice";
import { SwapRows, PairOfRows } from "../redux/PushedButtonSlice";

export const ChoiceButtonList = () => {
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
  /*
  loadingの実装
  */
  const dispatch = useDispatch();
  useEffect(() => {
    if (renderFlagRef.current) {
      dispatch(finishloading());
    } else {
      renderFlagRef.current = true;
    }
  });
  /*
  dragEventの実装
  */
  const [dragIndex, setDragIndex] = useState<number>(-1);
  const dragStart = (index: number) => {
    setDragIndex(index);
  };
  const dragEnter = (index: number) => {
    if (index === dragIndex) return;
    const swappedRows: PairOfRows = { QNum1: index, QNum2: dragIndex };
    dispatch(SwapRows(swappedRows));
    setDragIndex(index);
  };
  const dragEnd = () => {
    setDragIndex(-1);
  };
  const isPushed = useSelector(
    (state: RootState) => state.ButtonCondition.PushedButtonCondition
  );
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
            <ChoiceButtonsContainer
              draggable={true}
              onDragStart={() => dragStart(val)}
              onDragEnter={() => dragEnter(val)}
              onDragOver={(event) => event.preventDefault()}
              onDragEnd={dragEnd}
              className={val === dragIndex ? "dragging" : ""}
            >
              <ChoiceButtons
                QNum={val}
                cnt={ChoicedNum}
                format={ChoicedFormat}
                isPushed={isPushed}
              ></ChoiceButtons>
            </ChoiceButtonsContainer>
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

const ChoiceButtonsContainer = styled.div`
  width: fit-content; // 大きさを子要素に合わせる
  display: flex;
  &.dragging {
    background-color: gray;
  }
`;
