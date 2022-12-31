import { ChoiceButtons } from "./components/ChoiceButtons";
import styled from "styled-components";
import { Home } from "./route/Home";
import { Buttons } from "./route/Buttons";
import { Routes, Route } from "react-router-dom";
export const App = () => {
  return (
    <>
      <h1>Hello React Router v6</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buttons" element={<Buttons />} />
      </Routes>
    </>
  );
};
// export const App = () => {
//   const STitle = styled.h1`
//     text-align: center;
//   `;
//   const SButtonsContainer = styled.div``;
//   return (
//     <>
//       <STitle>マークシート</STitle>
//       <SButtonsContainer>
//         <ChoiceButtons cnt={5} />
//       </SButtonsContainer>
//     </>
//   );
// };
