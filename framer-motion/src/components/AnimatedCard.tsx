import { motion } from "framer-motion";

const AnimatedCard = () => {
  return (
    <motion.div
      initial={{ scale: 1, rotate: 0 }}
      whileHover={{ scale: 1.05, rotate: 2 }}
      whileTap={{ scale: 0.95 }}
      drag
      dragConstraints={{ right: 50, left: -50, top: -50, bottom: 50 }}
      dragElastic={0.2}
      transition={{ type: "spring", stiffness: 300 }}
      className="max-w-sm mx-auto bg-gradient-to-br from-teal-100 to-blue-100 rounded-2xl shadow-2xl overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-teal-300/40 border border-teal-200">
      <img
        className="w-full h-48 object-cover object-center border-b border-teal-200"
        src="https://images.unsplash.com/photo-1750969315593-36b04578208c?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="card image"
      />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2 text-teal-700 tracking-wide drop-shadow">
          Card Title
        </h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          This is a simple card with{" "}
          <span className="text-teal-500 font-semibold">Framer Motion</span>{" "}
          animation and{" "}
          <span className="text-blue-500 font-semibold">Tailwind CSS</span> for
          styling.
        </p>
        <button className="px-6 py-2 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-full shadow hover:from-teal-400 hover:to-blue-400 hover:shadow-lg transition-all duration-200 font-semibold uppercase tracking-wider">
          Learn More
        </button>
      </div>
    </motion.div>
  );
};

export default AnimatedCard;
