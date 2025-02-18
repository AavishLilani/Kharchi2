import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import FallingImages from "../components/FallingImages";

export const Landing = () => {
  console.log("Landing");

  return (
    <div className="relative w-full h-screen bg-black flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Falling Images in Background */}
      <FallingImages />

      {/* Page Falling Animation */}
      <motion.div
        initial={{ y: "-100vh", opacity: 0 }} // Starts above screen
        animate={{ y: "0", opacity: 1 }} // Falls into place
        transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
        className="z-10 text-white"
      >
        <h1 className="inline text-5xl font-extrabold mb-4 flex items-center"> Welcome to <img src="assets/prototype2.png" className="w-72 relative bottom-3 inline"/> </h1>
        <p className="flex justify-center items-center text-lg text-gray-300 max-w-xl">
          Track your expenses effortlessly with Kharchi and manage your finances like a pro!
        </p>

        <div className="flex justify-center space-x-4 mt-6 ">
          <Link className="px-6 py-3 bg-gray-800 rounded-lg text-white hover:bg-orange-600 transition" to="/signin">
            Login
          </Link>
          <Link className="px-6 py-3 bg-gray-800 rounded-lg text-white hover:bg-orange-600 transition" to="/signup">
            Signup
          </Link>
        </div>
      </motion.div>
    </div>
  );
};
