import React, { useEffect, useState } from "react";
import "../styles/App.css";
import { motion } from "framer-motion";

const Cursor = () => {
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const moveCursor = (e) => {
      setTop(e.clientY);
      setLeft(e.clientX);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  //main animation
  const variants = {
    default: {
      x: left - 10,
      y: top - 10,
      scale: 1,
    },

    entered: {
      height: 150,
      width: 150,
      x: left - 75,
      y: top - 75,
      mixBlendMode: "difference",
    },
  };

  const textEnter = () => setCursorVariant("entered");
  const textLeave = () => setCursorVariant("default");

  return (
    <>
      <div
        className="box"
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
      ></div>
      <motion.div
        className="circle-cur"
        variants={variants}
        animate={cursorVariant}
      ></motion.div>
    </>
  );
};

export default Cursor;
