import React from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';


const WelcomeBanner = () => {
  return (
    <div
      className="h-screen w-full bg-cover bg-center "
      style={{ backgroundImage: `url(/bg-black.jpg)` }}
    >
      <div className="h-full flex flex-col justify-center items-center gap-4">
        <motion.div
          initial={{ opacity: 0, x: "-100%", delay: 0.5, }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 50,
          }}
        >
          <img src="/logo.png" alt="logo" className="w-[200]" />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: -20, delay: 1 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xl"
        >
          Welcome to  Rick and Mortys App
        </motion.h1>
        <Link to={'/home'}>
        <motion.button
          whileHover={{ scale: 1.2}}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, delay: 1.5  }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="bg-sky-300 text-white px-4 py-2 rounded-md"
        >
          Home
        </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default WelcomeBanner;
