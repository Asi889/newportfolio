import React, { useEffect, useRef, useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { Context } from "../pages/_app";


function Cursor({ cursorVariant }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const theme = useContext(Context);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 100,
      width: 100,
      x: mousePosition.x - 45,
      y: mousePosition.y - 45,
      backgroundColor: theme.darkTheme ? "white" : "gray",
      // backgroundColor: "white",
      mixBlendMode: "difference"
    }
  }

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });



    }
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);



  return (
    <motion.div
      className={`fixed z-10 w-10 h-10 rounded-full top-0 left-0 ${theme.darkTheme ? "bg-[#222121]" : "bg-gray-400"} `}
      variants={variants} animate={cursorVariant} transition={{
        type: "spring",
        damping: 10,
        stiffness: 80,
        restDelta: 0.001
      }}
    />
  )
}



export default Cursor;