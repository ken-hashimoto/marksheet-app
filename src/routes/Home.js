import { useNavigate } from "react-router-dom";
export const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/buttons", { state: { id: 1 } });
  };
  return (
    <>
      <h2>ここはHome</h2>
      <button onClick={handleClick}> buttons </button>
    </>
  );
};
