import React, { useEffect, useState } from "react";
import "../styles/App.css";
import { motion } from "framer-motion";

const Cursor = (props) => {
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  const [hoverSize, sethoverSize] = useState(false);
  const size = hoverSize ? "200" : "20";
  const { firstText, secondText } = props;

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

  return (
    <>
      <motion.div
        className="box"
        animate={{
          WebkitMaskSize: `${size}px`,
          WebkitMaskPosition: `calc(${left}px - ${
            size / 2
          }px) calc(${top}px - ${size / 2}px)`,
        }}
        transition={{ type: "tween", ease: "backOut" }}
      >
        <p
          onMouseEnter={() => {
            sethoverSize(true);
          }}
          onMouseLeave={() => {
            sethoverSize(false);
          }}
        >
          {firstText}
        </p>
      </motion.div>

      <div className="text">
        <p>{secondText}</p>
      </div>
    </>
  );
};

export default Cursor;
