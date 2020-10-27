import React from "react";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const handleSetNews = () => {
    dispatch({ type: "SET_NEWS", payload: [{}, {}, {}] });
  };

  return (
    <>
      <button onClick={handleSetNews}>Test reducer</button>
      <button onClick={(t) => t.tudook()}>Break the world</button>
    </>
  );
}

export default App;
