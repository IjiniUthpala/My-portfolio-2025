import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="w-16 h-16 bg-black text-white flex items-center justify-center rounded-full text-2xl font-bold border border-solid border-black dark:border-light"
        whileHover={{
          backgroundColor: [
            "#000000", 
            "rgba(131,58,180,1)", // Purple
            "rgba(253,29,29,1)", // Red
            "rgba(252,176,69,1)", // Orange
            "rgba(131,58,180,1)", // Purple
            "#000000", // Black
          ],
          transition: { duration: 1, repeat: Infinity },
        }}
        style={{ backgroundColor: "#000000" }} // Ensures default black background
      >
        Ijini
      </MotionLink>
    </div>
  );
};

export default Logo;
