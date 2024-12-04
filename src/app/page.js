'use client';

import { useEffect } from "react";
import Navbar from "../components/Navbar";
import HireMe from "../components/HireMe";
import Footer from "../components/Footer";

export default function Home() {
  useEffect(() => {
    const words = ["Crafting Code, Building Futures"];
    let i = 0;
    let j = 0;
    let currentWord = "";
    let isDeleting = false;
    let typingTimeout;

    function type() {
      const typewriterElement = document.getElementById("typewriter");
      if (!typewriterElement) return;

      currentWord = words[i];
      if (isDeleting) {
        typewriterElement.textContent = currentWord.substring(0, j - 1);
        j--;
        if (j === 0) {
          isDeleting = false;
          i++;
          if (i === words.length) {
            i = 0;
          }
        }
      } else {
        typewriterElement.textContent = currentWord.substring(0, j + 1);
        j++;
        if (j === currentWord.length) {
          isDeleting = true;
        }
      }

      typingTimeout = setTimeout(type, 100); // Schedule the next frame
    }

    const typingTimeoutInitial = setTimeout(type, 100);

    return () => clearTimeout(typingTimeoutInitial);
  }, []);

  return (
    <div className="bg-[#F5F5F5]">
      <header>
        <Navbar />
      </header>

      <main>
        <section className="flex justify-around items-center h-screen px-8">
          <div className="max-w-md">
            <h1 id="typewriter" className="text-5xl text-black font-bold"></h1>
            <p className="mt-4 text-black text-lg">
              A passionate full-stack developer blending creativity with cutting-edge technology...
            </p>
            <div className="mt-6 space-x-4">
              <button className="px-4 py-2 bg-black border text-white border-black rounded">
                Resume
              </button>
              <a
                href="/contact" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-black text-white border border-black rounded inline-block text-center"
              >
                Contact
              </a>

            </div>
          </div>
          <div className="max-w-md">
            <HireMe />
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
}
