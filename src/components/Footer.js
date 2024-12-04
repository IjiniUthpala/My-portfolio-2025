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
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left section - Copyright */}
          <div className="text-left w-full md:w-auto">
            <p className="text-lg">
              &copy; {new Date().getFullYear()} All Rights Reserved. 🩷
            </p>
          </div>
          
          {/* Center section - Built by Ijini */}
          <div className="text-center w-full md:w-auto mt-4 md:mt-0">
            <p className="text-lg">
              Coded by Ijini 🙋‍♀️
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
