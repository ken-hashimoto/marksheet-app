import { ChoiceButton } from "./ChoiceButton";
import React, { useMemo } from "react";
type Props = {
  cnt: number;
  format: string;
};
export const ChoiceButtons = React.memo((props: Props) => {
  ChoiceButtons.displayName = "ChoiceButtons"
  const { cnt, format } = props;
  const num_list: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const alphabet_list: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
  const choice_list: number[] | string[] = useMemo(
    () =>
      format === "number"
        ? num_list.slice(0, cnt)
        : alphabet_list.slice(0, cnt),
    [format, cnt]
  );
  return (
    <>
      {choice_list.map((val) => (
        <ChoiceButton index={val}></ChoiceButton>
      ))}
    </>
  );
});
