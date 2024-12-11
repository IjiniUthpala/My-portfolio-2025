'use client';
import Link from 'next/link';
import { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Logo from './Logo';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="relative bg-[#F5F5F5] text-black py-2">
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
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
          onClick={closeMenu} 
        >
          {/* Prevent closing when clicking inside the menu */}
          <div
            className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg text-center"
            onClick={(e) => e.stopPropagation()} // Stop click propagation
          >
            {/* Close Button */}
            <button
              onClick={closeMenu}
              className="absolute top-4 right-4 text-white p-2 bg-gray-800 rounded-full"
            >
              ✖
            </button>

            {/* Centered Links */}
            <ul className="text-black text-lg space-y-4">
              <li>
                <Link href="/" className="hover:underline" onClick={closeMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:underline"
                  onClick={closeMenu}
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  href="/achievements"
                  className="hover:underline"
                  onClick={closeMenu}
                >
                  Achievements
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="hover:underline"
                  onClick={closeMenu}
                >
                  Projects
                </Link>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="mt-6 flex justify-center gap-4">
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
        </div>
      )}

      {/* Desktop Navbar */}
      <div className="hidden lg:flex justify-between items-center px-10 mt-6">
        <div className="flex gap-12">
          <Link href="/" className="text-black hover:underline">
            Home
          </Link>
          <Link href="/about" className="text-black hover:underline">
            Profile
          </Link>
          <Link href="/achievements" className="text-black hover:underline">
            Achievements
          </Link>
          <Link href="/projects" className="text-black hover:underline">
            Projects
          </Link>
        </div>

        {/* Social Icons & Hire Me */}
        <div className="hidden lg:flex items-center gap-4">
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

      {/* Centered Logo */}
      <div className="absolute left-[50%] top-2 transform -translate-x-1/2">
        <Logo />
      </div>
    </nav>
  );
}