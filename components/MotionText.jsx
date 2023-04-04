import React, { useContext, useState } from 'react';
import { motion, useAnimation, useAnimationControls } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { Context } from '../pages/_app';

function MotionText(props,{children}) {
  const theme = useContext(Context)
  const {index} = props;
  // console.log(children)
  // console.log("index")
    const controls= useAnimationControls();
  const [isPlaying, setIsPlaying] = useState(false);
  const string = "Hi, I'm Asaf Marom (AKA  Asi)".split('');
  const ctrls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  // console.log(props);
  // console.log("props9999999");

  
  const rubberBand = () => {
    controls.start({
            transform: [
              "scale3d(1, 1, 1)",
              "scale3d(1.4, .55, 1)",
              "scale3d(.75, 1.25, 1)",
              "scale3d(1.25, .85, 1)",
              "scale3d(0.9, 1.05, 1)",
              "scale3d(1, 1, 1)",
            ]
    })
    setIsPlaying(true)
    
  }

    return (
        <>
        {props.children === "." ? <br/> : " "}
        <motion.span
        animate={controls}
        onHoverStart={()=>{
          if(!isPlaying){
            console.log("boom");
            rubberBand()
        }
          
        }}
        onAnimationComplete={()=>setIsPlaying(false)}
        >
            <span className={`hover:text-[#47ebde] ${theme.darkTheme ? "text-white" :"text-black"} `}>
            {/* <span className={`hover:text-[#47ebde] ${props.children === "Asaf"     ? " text-[#47ebde]" : "" }`}> */}
          {props.children}
            </span>
        </motion.span>
        </>
    );
}

export default MotionText;