'use client';
import Link from 'next/link';
import { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Logo from "./Logo";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-[#F5F5F5] text-black py-2 ">
      {/* Mobile Burger Icon */}
      <div className="lg:hidden flex justify-between items-center px-4">
        <button onClick={toggleMenu} className="text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Social Links for Mobile */}
        <div className="lg:hidden flex items-center space-x-4">
          <a
            href="https://github.com/ijini"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-gray-700"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/ijini-lekamge-38233928b/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-gray-700"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Navbar Links */}
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } lg:flex justify-between items-center`}
      >
        {/* Left Links */}
        <div className="flex flex-col lg:flex-row lg:gap-8 mt-6 lg:mt-8 pr-16 lg:pl-20"> {/* Adjusted padding-right */}
          <Link href="/" className="text-black hover:underline block">
            Home
          </Link>
          <Link href="/about" className="text-black hover:underline block">
            Profile
          </Link>
          <Link
            href="/achievements"
            className="text-black hover:underline block"
          >
            Achievements
          </Link>
          <Link href="/projects" className="text-black hover:underline block">
            Projects
          </Link>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-4 pr-6 lg:mt-8 lg:pr-20">
          
          <a
            href="https://github.com/IjiniUthpala"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-gray-700"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/ijini-lekamge-38233928b/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-500"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
        </div>
      </div>
      {/* LOGO */}
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </nav>
  );
}
