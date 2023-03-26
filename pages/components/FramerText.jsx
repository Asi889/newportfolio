import React, { useState } from "react";
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";

const FramerText = (props) => {


  const [replay, setReplay] = useState(true);

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025
      }
    }
  };

  const handleReplay = () => {
    setReplay(!replay);
    setTimeout(() => {
      setReplay(true);
    }, 600);
  };

  return (
    <>
      {
        props?.hiText ?
          <motion.div

            className="motin-text text-blue-200 galindo"
            initial="hidden"
            // animate="visible"
            animate={replay ? "visible" : "hidden"}
            variants={container}
          >
            <div className="">
              {props?.hiText?.map((item, index) => {
                return <AnimatedText {...item} key={index} />;
              })}

            </div>

          </motion.div>
          : ""
      }

      <motion.div

        className="motin-text welcome-page-title"
        initial="hidden"
        animate={replay ? "visible" : "hidden"}
        variants={container}
      >
        <div className="">
          {props.animateText.map((item, index) => {
            return <AnimatedText {...item} key={index} />;
          })}
        </div>

      </motion.div>
    </>
  );
}

export default FramerText;