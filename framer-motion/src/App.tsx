
import AnimatedCard from "./components/AnimatedCard";
import Hover from "./components/Hover";
import StaggerAnimation from "./components/StaggerAnimation";

const App = () => {
  return (
    <div>
      {/* <motion.div
        initial={{ x: "100%" }}
        animate={{ x: "calc(100vw - 50%)" }}
        className="box"
      /> */}
      {/* <motion.div className="box" animate={{ rotate: 0, skewY: 30 }} /> */}

      {/* <motion.div
        className="box"
        initial={{ x: 0 }}
        animate={{ x: 200 }}
        // transition={{ delay: 2 }}
        // transition={{delay:1,duration:5}}
        transition={{delay:0.5,duration:3,ease:"easeInOut"}}
      /> */}
      {/* key frames */}
      {/* <motion.div
        className="box"
        animate={{
          // scale:[1,2,3,2,1]
          // rotate:[0,0,45,45,270,270,0],
          borderRadius: ["25%", "50%", "75%", "50%", "25%"],
        }}
        transition={{ duration: 3 }}
      /> */}
      {/* <BounceLoader /> */}
      {/* <Variants /> */}
      {/* <FlippingCard /> */}
      {/* <Hover /> */}
      {/* <AnimatedCard /> */}
      <StaggerAnimation />
    </div>
  );
};

export default App;
