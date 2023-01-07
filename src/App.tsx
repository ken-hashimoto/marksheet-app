import { Home } from "./routes/Home";
import { NotFound } from "./routes/NotFound";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/header";
export const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
