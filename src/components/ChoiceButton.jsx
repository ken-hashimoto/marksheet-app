import { useState } from "react";
import styled from "styled-components";

const StyledChoiceButton = styled.div`
  width: 15px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid;
  box-sizing: border-box;
`;
export const ChoiceButton = () => {
  const [isfilled, setFilled] = useState(false);
  const onClickChoiceButton = () => {
    console.log(isfilled);
    setFilled(!isfilled);
  };
  return (
    <StyledChoiceButton onClick={onClickChoiceButton}></StyledChoiceButton>
  );
};
