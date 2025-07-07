import { motion } from "framer-motion";

import { useState } from "react";
const variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.5 },
};

const Variants = () => {
    const [isVisible,setIsVisible]=useState(true)
  return (
    <div>
      <motion.div className="box"
      variants={variants}
      initial="hidden"
      animate={isVisible?"visible":"hidden"}
      exit="exit"
      transition={{duration:1}}
      onClick={()=>setIsVisible(!isVisible)}
      />
    </div>
  );
};

export default Variants;
