import React from "react";
import Navbar from "./Navbar";
import AlignTop from '../components/AlignTop';
import Footer from "../components/Footer";

const Achievements = () => {
  const certificates = [
    {
      title: "Amazon Web Services (AWS) Certificate",
      organization: "Amazon Web Services",
      image: "images/aws.png",
      details: "https://www.credly.com/badges/9b6848d7-d373-4198-8ba4-a89ff91eeaad/linked_in_profile",
      year: "2023",
    },
    {
      title: "Azure Cloud Practitioner",
      organization: "Microsoft",
      image: "images/azure.png",
      year: "2023",
    },
    {
      title: "Research Assistant",
      organization: "JAMK",
      image: "certificates/python.jpg",
      year: "2024",
    },
    {
      title: "Trainee",
      organization: "Aika Solutions Oy",
      image: "images/aika.JPG",
      year: "2024",
    },
  ];

  return (
    <div className="bg-[#F5F5F5]">
      <header>
        <Navbar />
      </header>
      <div className="min-h-screen py-12 px-16 md:px-24 lg:px-32">
        <h1 className="text-4xl font-bold text-center text-black mb-12">
          My Achievements
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {certificates.map((certificate, index) => (
            <div
              key={index}
              className={`border border-black rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 ${
                certificate.title === "Trainee" ? "min-h-[750px]" : "min-h-[650px]"
              }`}
              style={{
                boxShadow:
                  "15px 0px 20px -5px rgba(0, 0, 0, 1), 0px 15px 20px -5px rgba(0, 0, 0, 1)", // Darker shadow on both left and bottom
              }}
            >
              <a
                href={certificate.image} // Image opens in a new tab
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-[500px] object-cover rounded-md mb-6" // Increased height
                />
              </a>
              <h2 className="text-2xl font-semibold mb-4">
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
          ))}
        </div>
      </div>
      <AlignTop/>
      <Footer/>
    </div>
  );
};

export default Achievements;
