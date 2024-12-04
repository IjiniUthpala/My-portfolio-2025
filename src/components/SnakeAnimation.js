"use client";

import React, { useEffect, useState, useRef } from "react";

const SnakeAnimation = () => {
  const [snake, setSnake] = useState([]); // State for the moving snake
  const [activeBlocks, setActiveBlocks] = useState([]); // State for randomly highlighted blocks
  const snakeRef = useRef([]);
  const totalBlocks = 276; // Total number of blocks in the animation grid

  useEffect(() => {
    // Snake movement logic
    const snakeInterval = setInterval(() => {
      snakeRef.current = [...snakeRef.current, snakeRef.current.length];
      if (snakeRef.current.length > totalBlocks) snakeRef.current.shift(); // Keeps the snake length consistent
      setSnake([...snakeRef.current]); // Update the snake state
    }, 200); // Speed of animation (200ms per block)

    return () => clearInterval(snakeInterval);
  }, []);

  useEffect(() => {
    // Random green block updates (like GitHub contributions)
    const blockInterval = setInterval(() => {
      const randomBlock = Math.floor(Math.random() * totalBlocks); // Pick a random block
      if (!activeBlocks.includes(randomBlock) && !snake.includes(randomBlock)) {
        setActiveBlocks((prev) => [...prev, randomBlock]);
      }
    }, 500); // Update interval for green blocks (500ms)

    return () => clearInterval(blockInterval);
  }, [activeBlocks, snake]);

  return (
    <div className="hidden sm:flex w-full h-32 bg-[#F5F5F5] flex-wrap items-center justify-center relative">
      {/* Snake Grid */}
      <div className="flex flex-wrap w-4/5 gap-1">
        {Array.from({ length: totalBlocks }, (_, i) => (
          <div
            key={i}
            className={`w-5 h-5 ${
              snake.includes(i)
                ? "bg-green-800" // Snake's color
                : activeBlocks.includes(i)
                ? "bg-green-500" // Random green blocks (contributions style)
                : "bg-gray-700" // Default block color
            }`}
          ></div>
        ))}
      </div>
      {/* Animated Text */}
      <p className="absolute bottom-2 text-white text-2xl font-bold animate-pulse">
        To be continued... To be continued... To be continued...
      </p>
    </div>
  );
};

export default SnakeAnimation;
