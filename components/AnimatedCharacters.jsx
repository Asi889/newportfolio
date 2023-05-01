import { motion } from "framer-motion";
import MotionText from "./MotionText";

// Word wrapper
const Wrapper = (props) => {
  // We'll do this to prevent wrapping of words using CSS
  return <span className="word-wrapper ">{props.children}</span>;
};

// Map API "type" vaules to JSX tag names
const tagMap = {
  paragraph: "p",
  heading1: "h1",
  heading2: "h2"
};

// AnimatedCharacters
// Handles the deconstruction of each word and character to setup for the
// individual character animations
const AnimatedCharacters = (props) => {
  // Framer Motion variant object, for controlling animation
  const item = {
    hidden: {
      y: "450%",
      color: "#000000",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 }
    },
    visible: {
      y: 0,
      color: "#ffff",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 }
    }
  };

  //  Split each word of props.text into an array
  const splitWords = props.text?.split(" ");

  // Create storage array
  const words = [];

  // Push each word into words array
  if(splitWords){

    for (const [, item] of splitWords.entries()) {
     words.push(item.split(""));
   }
  }

  // Add a space ("\u00A0") to the end of each word
  words?.map((word) => {
    return word.push("\u00A0");
  });


  // Get the tag name from tagMap
  const Tag = tagMap[props.type];

  function checkArrayEquality(index) {
    // let worda = ""
    // arr.forEach((string)=> worda += string)
    if(index == 7 || index == 6 || index == 5 || index == 8 ){
      return true
    }
   
  }
  function asiCheck(index){
    if(index === 7){
      return true
    }

  }

  return (
    <Tag className={`${Tag ===""} z-50 `}>
      {words?.map((word, firstIndex) => {
        return (
          // Wrap each word in the Wrapper component
          <Wrapper key={firstIndex}>
            {words[firstIndex]?.flat().map((element, index) => {
              return (
                <span
                
                  className={`text-red-400 overflow-hidden inline-block lg:h-[92px] h-auto`}
                  key={index}
                  
                >
                  <motion.span
                    style={{ display: "inline-block" }}
                    variants={item}
                    className={`text-lg h-full text-red-400 z-[999999999999999999999999] ${checkArrayEquality(firstIndex) ? "smaller-title " : " "} ${asiCheck(firstIndex) ? "asi-text" : ""}`}
                  >
                    <MotionText index={index} firstIndex={firstIndex} >
                      {element}
                    </MotionText>
                  </motion.span>
                </span>
              );
            })}
          </Wrapper>
        );
      })}
      {/* {} */}
    </Tag>
  );
};

export default AnimatedCharacters;
