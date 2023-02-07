import { SChoiceButtonsContainer } from "./ChoiceButton";
import React from "react";
type Props = {
  QIndex: number;
};
export const QNumBox = React.memo((props: Props) => {
  // 問題番号の箱
  return (
    <SChoiceButtonsContainer className={"is-QNum"}>
      <div>{props.QIndex}</div>
    </SChoiceButtonsContainer>
  );
});
