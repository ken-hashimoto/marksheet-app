import styled from "styled-components";
import { useState } from "react";

const ChoiceButton = (props) => {
  const index = props.index;
  const SChoiceButton = styled.div`
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
    <SChoiceButton
      onClick={onClickChoiceButton}
      className={isFilled ? "is-filled" : ""}
    >
      {index}
    </SChoiceButton>
  );
};

export const ChoiceButtons = (props) => {
  const cnt = props.cnt;
  const range = (start, end) => [...Array(end + 1).keys()].slice(start);
  const num_list = range(1, cnt);
  const SChoiceButtonsWrapper = styled.div`
    display: flex;
    border: 2px solid;
    width: fit-content;
  `;
  return (
    <SChoiceButtonsWrapper>
      {num_list.map((index) => (
        <ChoiceButton index={index}></ChoiceButton>
      ))}
    </SChoiceButtonsWrapper>
  );
};
