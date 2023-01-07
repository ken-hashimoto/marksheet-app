import { SChoiceButtonsContainer } from "./ChoiceButton";
type Props = {
  QIndex: number;
};
export const QNumBox = (props: Props) => {
  // 問題番号の箱
  return (
    <SChoiceButtonsContainer className={"is-QNum"}>
      <div>{props.QIndex}</div>
    </SChoiceButtonsContainer>
  );
};
