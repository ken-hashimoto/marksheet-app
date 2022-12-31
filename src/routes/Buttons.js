import { useNavigate } from "react-router-dom";
export const Buttons = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    // homeへ戻る
    navigate("/", { state: { id: 1 } });
  };
  return (
    <>
      <h2>ここはButtons</h2>
      <button onClick={handleClick}>Homeへ戻る</button>
    </>
  );
};
