'use client';

import React from "react";

const Footer = () => {
  return (
    <footer
      className="bg-[#F5F5F5] text-black py-6"
      style={{
        boxShadow: "0 -4px 6px rgba(0, 0, 0, 0.2)", // Black shadow on top
      }}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-6">
          {/* Left section - Copyright */}
          <div className="w-full sm:w-auto text-center sm:text-left">
            <p className="text-sm sm:text-lg">
              &copy; {new Date().getFullYear()} All Rights Reserved. 🩷
            </p>
          </div>
          
          {/* Center section - Built by Ijini */}
          <div className="w-full sm:w-auto text-center sm:text-left">
            <p className="text-sm sm:text-lg">
              Coded by Ijini 🙋‍♀️
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
