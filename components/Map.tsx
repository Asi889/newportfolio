import React from "react";
import { motion } from "framer-motion";

const Map = () => {
  
 

  return (
    <motion.div
      className="border-[#3bc7bb] border-[6px] rounded-xl w-full  "
      // className="2xl:w-[600px] 2xl:h-[600px] md:h-[400px] md:w-[400px] h-[300px] w-[300px] border-[#3bc7bb] border-[6px] rounded-xl "
      initial={{ y: "-350vw" }}
      animate={{ y: 0, boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)", }}
      transition={{ type: "spring", delay: 1.5, duration: 1 }}
    >
      <iframe
        className="  rounded-lg  w-screen lg:max-w-[500px] lg:max-h-[500px] sm:max-w-[300px] sm:max-h-[300px] max-w-[200px] max-h-[200px]"
        src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJH3w7GaZMHRURkD-WwKJy-8E&key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`}
        height="600"
        // width="600"
        loading="lazy"
      ></iframe>
    </motion.div>
  );
};

export default Map;
