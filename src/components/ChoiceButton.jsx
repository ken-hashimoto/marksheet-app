import { useState } from "react";
import styled from "styled-components";

export const ChoiceButton = () => {
  const StyledChoiceButton = styled.div`
    width: 15px;
    height: 30px;
    border-radius: 50%;
    border: 2px solid;
    box-sizing: border-box;
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
    <StyledChoiceButton
      onClick={onClickChoiceButton}
      className={isFilled ? "is-filled" : ""}
    ></StyledChoiceButton>
  );
};
