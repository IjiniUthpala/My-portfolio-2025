'use client';

import React, { useEffect, useRef } from "react";

const HireMe = () => {
  const circleRef = useRef(null);

  useEffect(() => {
    let angle = 0;
    const rotateCircle = () => {
      if (circleRef.current) {
        angle += 1; // Adjust for rotation speed
        circleRef.current.style.transform = `rotate(${angle}deg)`;
      }
      requestAnimationFrame(rotateCircle);
    };
    rotateCircle();
  }, []);

  return (
    <div className="relative items-center justify-center w-48 h-48 mx-auto hidden lg:flex">
      {/* Rotating Text */}
      <div
        ref={circleRef}
        className="absolute inset-0 flex items-center justify-center"
        style={{ transformOrigin: "center" }}
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <path
              id="circlePath"
              d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
            />
          </defs>
          <text fontSize="9" fontWeight="bold" fill="black">
            <textPath href="#circlePath" textLength="440">
              Junior Fullstack Developer • Frontend • Creative Thinker •
            </textPath>
          </text>
        </svg>
      </div>

      <a
        className="z-10 flex items-center justify-center w-16 h-16 bg-black text-white rounded-full text-center text-sm font-bold"
      >
        Hire Me
      </a>
    </div>
  );
};

export default HireMe;
