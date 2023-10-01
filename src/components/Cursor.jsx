import React, { useEffect, useState } from "react";
import "../styles/App.css";

const Cursor = () => {
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);

  const moveCursor = (e) => {
    setTop(e.clientY - 5);
    setLeft(e.clientX - 5);
  };

  useEffect(() => {
    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return <div className="circle-cur" style={{ left, top }}></div>;
};

export default Cursor;
