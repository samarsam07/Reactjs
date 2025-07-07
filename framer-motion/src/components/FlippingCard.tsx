import { motion } from "framer-motion";
import { useState } from "react";

const FlippingCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <div
      onClick={() => setIsFlipped((prev) => !prev)}
      className="perspective-1000 w-64 h-40 cursor-pointer"
      style={{ perspective: 1000 }}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full h-full rounded-lg shadow-lg bg-white transform-style-preserve-3d"
        style={{ transformStyle: "preserve-3d" }}
      >
      
        <div
          className="absolute inset-0 flex items-center justify-center text-xl font-bold bg-white text-black"
          style={{ backfaceVisibility: "hidden" }}
        >
          Front Side
        </div>
     
        <div
          className="absolute inset-0 flex items-center justify-center text-xl font-bold bg-blue-500 text-white"
          style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}
        >
          Back Side
        </div>
      </motion.div>
    </div>
  );
};

export default FlippingCard;
