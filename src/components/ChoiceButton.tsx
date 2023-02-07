import styled from "styled-components";
import React, { useState } from "react";
import { useCallback } from "react";

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
};
export const ChoiceButton = React.memo((props: Props) => {
  const index = props.index;
  const SChoiceButton = styled.div`
    width: 15px;
    height: 30px;
    border-radius: 50%;
    border: 2px solid;
    box-sizing: border-box;
    line-height: 30px;
    font: 1em sans-serif;
    &.is-filled {
      background: black;
    }
  `;
  const [isFilled, setFilled] = useState<boolean>(false);
  const onClickChoiceButton = useCallback(() => {
    setFilled(!isFilled);
  }, [isFilled]);
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
});
