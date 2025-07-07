import { motion } from "framer-motion";
const Hover = () => {
  return (
    <motion.div
      className="box"
      drag
      dragConstraints={{
        top: -50,
        left: -50,
        right: 50,
        bottom: 50,
      }}
      //   whileHover={{ scale: 1.2, rotate: 10 }}
      // whileTap={{scale:0.8,backgroundColor:"crimson"}}
      whileDrag={{ scale: 0.8 }}
      transition={{ type: "spring", stiffness: 300 }}
    />
  );
};

export default Hover;
