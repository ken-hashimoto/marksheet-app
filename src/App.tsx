import { Home } from "./routes/Home";
import { NotFound } from "./routes/NotFound";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/header";
import { ChoiceFormatProvider } from "./components/providers/marksheetParamsProvider";
export const App: React.FC = () => {
  return (
    <>
      <ChoiceFormatProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ChoiceFormatProvider>
    </>
  );
};
