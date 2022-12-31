import { ChoiceButtons } from "./components/ChoiceButtons";
import styled from "styled-components";
export const App = () => {
  const STitle = styled.h1`
    text-align: center;
  `;
  const SButtonsContainer = styled.div``;
  return (
    <>
      <STitle>マークシート</STitle>
      <SButtonsContainer>
      <ChoiceButtons cnt={5} />
      </SButtonsContainer>
    </>
  );
};
