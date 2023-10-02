import { useState } from "react";
import "../styles/App.css";
import { Cursor } from "./index";

function App() {
  return (
    <>
      <Cursor firstText={"Here is There."} secondText={"There is here."} />
    </>
  );
}

export default App;
