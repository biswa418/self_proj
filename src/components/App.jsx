import { useState } from "react";
import "../styles/App.css";
import { Cursor } from "./index";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="box"></div>
      <Cursor />
    </>
  );
}

export default App;
