//import styled from "styled-components";
import { Home } from "./routes/Home";
import { NotFound } from "./routes/NotFound";
import { Routes, Route } from "react-router-dom";
export const App = () => {
  return (
    <>
      <h1>マークシート</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
