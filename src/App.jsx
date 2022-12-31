import { ChoiceButtons } from "./components/ChoiceButtons";
import styled from "styled-components";
import { Home } from "./routes/Home";
import { Buttons } from "./routes/Buttons";
import { NotFound } from "./routes/NotFound";
import { Routes, Route } from "react-router-dom";
export const App = () => {
  return (
    <>
      <h1>マークシート</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buttons" element={<Buttons />} />
        <Route path="*" element={<NotFound />} />
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
