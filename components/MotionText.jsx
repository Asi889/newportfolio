import React, { useContext, useState } from 'react';
import { motion, useAnimation, useAnimationControls } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { Context } from '../pages/_app';
import { useRouter } from 'next/router'

function MotionText(props,{children}) {
  const router = useRouter();
  console.log(router);
  // console.log(router);
  const theme = useContext(Context)
  const {index, firstIndex} = props;

    const controls= useAnimationControls();
  const [isPlaying, setIsPlaying] = useState(false);
  const string = "Hi, I'm Asaf Marom (AKA  Asi)".split('');
  const ctrls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  

  
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
        className="h-full"
        animate={controls}
        onHoverStart={()=>{
          if(!isPlaying){
            rubberBand()
        }
          
        }}
        onAnimationComplete={()=>setIsPlaying(false)}
        >
            <span className={`hover:text-[#47ebde] ${router.pathname.includes("about") ? "about-framer-span" : ""} z-[999999999999999999999999] h-full grid items-center ${theme.darkTheme ? "text-white" :"text-black"}  `}>
          {props.children}
            </span>
        </motion.span>
        </>
    );
}

export default MotionText;