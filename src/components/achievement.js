"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Navbar from "./Navbar";
import AlignTop from "../components/AlignTop";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const AchievementCard = ({ certificate, index }) => {
  return (
    <div
      data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
      data-aos-offset="100"
      className={`border border-black rounded-lg p-4 hover:shadow-xl transition-shadow duration-300 ${
        certificate.title === "Trainee" ? "min-h-[550px]" : "min-h-[450px]"
      }`}
      style={{
        boxShadow:
          "15px 0px 20px -5px rgba(0, 0, 0, 1), 0px 15px 20px -5px rgba(0, 0, 0, 1)",
      }}
    >
      <a href={certificate.image} target="_blank" rel="noopener noreferrer">
        <Image
          src={certificate.image}
          alt={certificate.title}
          layout="responsive"
          width={16}
          height={9}
          className="rounded-md mb-6"
        />
      </a>
      <h2 className="text-xl font-semibold mb-4 text-black">
        {certificate.title}
      </h2>
      <p className="text-gray-700 text-lg">{certificate.organization}</p>
      {certificate.year && (
        <p className="text-gray-500 text-md mb-4">{certificate.year}</p>
      )}
      {certificate.details && (
        <a
          href={certificate.details}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 underline text-sm"
        >
          View Certificate Details
        </a>
      )}
    </div>
  );
};

const Achievements = () => {
  const certificates = [
    {
      title: "Amazon Web Services (AWS) Certificate",
      organization: "Amazon Web Services",
      image: "/images/aws.png",
      details:
        "https://www.credly.com/badges/9b6848d7-d373-4198-8ba4-a89ff91eeaad/linked_in_profile",
      year: "2023",
    },
    {
      title: "Azure Cloud Practitioner",
      organization: "Microsoft",
      image: "/images/azure.png",
      year: "2023",
    },
    {
      title: "Research Assistant",
      organization: "JAMK",
      image: "/images/research_assistant_certificate.jpg",
      year: "2024",
    },
    {
      title: "Trainee",
      organization: "Aika Solutions Oy",
      image: "/images/aika.jpg",
      year: "2024",
    },
  ];

  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-back",
      once: true,
    });
  }, []);

  return (
    <div className="bg-[#F5F5F5]">
      <header>
        <Navbar />
      </header>
      <div className="min-h-screen py-8 px-6 md:px-12 lg:px-24 mt-8 sm:mt-6 lg:mt-4 xl:mt-2">
        <h1 className="text-4xl font-bold text-center text-black mb-12">
          My Achievements
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {certificates.map((certificate, index) => (
            <AchievementCard key={index} certificate={certificate} index={index} />
          ))}
        </div>
      </div>
      <AlignTop />
      <Footer />
    </div>
  );
};

export default Achievements;
