"use client"; // Enable client-side rendering

import dynamic from "next/dynamic";

// Dynamically import EarthCanvas from the correct path
const EarthCanvas = dynamic(() => import("./canvas/earth"), {
  ssr: false, // Disable server-side rendering
});

const HomeClient = () => {
  return (
    <div>
      {/*<EarthCanvas />*/}
    </div>
  );
};

export default HomeClient;
