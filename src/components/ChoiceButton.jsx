import { useState } from "react";
import styled from "styled-components";

export const ChoiceButton = (props) => {
  const index = props.index;
  const StyledChoiceButton = styled.div`
    width: 15px;
    height: 30px;
    border-radius: 50%;
    border: 2px solid;
    box-sizing: border-box;
    line-height: 30px;
    margin: 10px;
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
    >
      {index}
    </StyledChoiceButton>
  );
};
