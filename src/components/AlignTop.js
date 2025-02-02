"use client";
import React, { useState, useEffect } from "react";
import VerticalAlignTopIcon from "@mui/icons-material/VerticalAlignTop";

const AlignTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const onTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to top
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100); // Show button after scrolling 100px
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      className={`fixed bottom-10 right-10 z-50 bg-light hover:bg-primary dark:bg-dark dark:hover:bg-primaryDark text-black px-3 py-2 rounded-full opacity-0 transition-all duration-300 ${
        isVisible ? "opacity-100" : ""
      }`}
      onClick={onTop}
    >
      <VerticalAlignTopIcon />
    </button>
  );
};

export default AlignTop;
