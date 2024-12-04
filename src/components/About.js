'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Navbar from './Navbar';
import Timeline from './about/experience';
import Education from './about/education';
import AlignTop from '../components/AlignTop';
import Skills from './skills';
import Footer from '../components/Footer';

const TypewriterText = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      }, 150); // Adjust typing speed here

      return () => clearTimeout(timer);
    }
  }, [index, text]);

  return <span>{displayedText}</span>;
};

export default function About() {
  const [projectsCount, setProjectsCount] = useState(0);
  const [experienceCount, setExperienceCount] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const projectsInterval = setInterval(() => {
      setProjectsCount((prev) => {
        if (prev >= 4) {
          clearInterval(projectsInterval);
          return 4;
        }
        return prev + 1;
      });
    }, 100);

    const experienceInterval = setInterval(() => {
      setExperienceCount((prev) => {
        if (prev >= 1) {
          clearInterval(experienceInterval);
          return 1;
        }
        return prev + 1;
      });
    }, 100);

    return () => {
      clearInterval(projectsInterval);
      clearInterval(experienceInterval);
    };
  }, []);

  if (!isMounted) return null;

  return (
    <div className="bg-[#F5F5F5]">
      <header>
        <Navbar />
      </header>

      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 px-8 py-12 min-h-screen">
        {/* Image Section */}
        <div
          className="lg:w-1/3 w-full border-4 border-black p-2 rounded-lg shadow-[rgba(0,0,0,0.5)_-10px_0px_15px_0px]"
        >
          <div className="border-4 border-black rounded-lg h-[600px] overflow-hidden">
            <Image
              className="rounded-lg object-cover w-full h-full"
              src="/images/image.jpg"
              alt="Portrait of Ijini Lekamge, highlighting her professional profile"
              width={500}
              height={600}
            />
          </div>
        </div>

        {/* About Section */}
        <div className="lg:w-2/3 w-full space-y-8">
          <h2 className="text-6xl font-bold text-center text-black mb-8 relative">
            <TypewriterText text="Hi, I&apos;m Ijini Lekamge" />
          </h2>
          <p className="text-lg leading-relaxed text-black">
            Thank you for visiting my portfolio! ✨<br />
            <br /> Technology has always been more than just a tool for me—it&apos;s a way to create and bring ideas to life 💡.
            I love blending design and development to build digital experiences that not only work but also stand out 🚀.
            My journey started with a curiosity for how things work, which grew into a passion for building meaningful projects 💻.
            <br />
            <br /> From creating smooth user interfaces to building powerful backends, every project is a chance to learn 📚 and solve problems.
            With JAMK University of Applied Sciences 🎓, a love for learning, and a drive to take on challenges, I&apos;m here to turn ideas into simple, functional, and creative solutions.
            <br />
            <br /> Scroll down to see my work 👇, or let&apos;s connect and make something great together! 🤝
          </p>

          {/* Stats Section */}
          <div className="flex justify-start items-center space-x-8 mt-12">
            <div className="text-left">
              <h3 className="text-6xl font-bold text-black">{projectsCount}+</h3>
              <p className="mt-2 text-lg">Completed Projects</p>
            </div>
            <div className="text-left">
              <h3 className="text-6xl font-bold text-black">{experienceCount}+</h3>
              <p className="mt-2 text-lg">Years of Experience</p>
            </div>
          </div>
        </div>
      </div>

      <Skills />
      <Timeline />
      <Education />
      <AlignTop />
      <Footer />
    </div>
  );
}
