import { ChoiceButton } from "./ChoiceButton";
import styled from "styled-components";
export const ChoiceButtons = (props) => {
  const cnt = props.cnt;
  const range = (start, end) => [...Array(end + 1).keys()].slice(start);
  const num_list = range(1, cnt);
  const StyledChoiceButtonsWrapper = styled.div`
    display: flex;
    border: 2px solid;
    width: fit-content;
  `;
  return (
    <StyledChoiceButtonsWrapper>
      {num_list.map((index) => (
        <ChoiceButton index={index}></ChoiceButton>
      ))}
    </StyledChoiceButtonsWrapper>
  );
};
