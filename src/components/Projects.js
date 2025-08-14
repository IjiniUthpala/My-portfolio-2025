'use client';
import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "../components/Footer";
import AlignTop from '../components/AlignTop';

const Projects = () => {
  const projects = [
    {
      title: "Movies App",
      description:
        "This movie application showcases how to fetch and display movie data from The Movie Database (TMDb) using React. It employs Axios for data fetching, React hooks for state management, and Material-UI for styling. The app features a dynamic movie list, detailed movie information, including posters, genres, and trailers, and responsive design for seamless user experience across devices",
      video: "/movies-app.mp4",
      demo: "https://my-movies-application.netlify.app/",
      source: "https://github.com/IjiniUthpala/Movies-App"
    },
    {
      title: "Weather App",
      description:
        "This application loads JSON data and displays it in a React application. The weather forecast is fetched using Axios from OpenWeather. The user interface is built with Material-UI components.",
      video: "/Weather-app.mp4",
      demo: "https://delicate-malasada-9bfc26.netlify.app/",
      source: "https://github.com/IjiniUthpala/Weather-App"
    },
    {
      title: "Redux Fake Store",
      description:
        "This application simulates an online store by utilizing the REST API of a mock store to retrieve products and categories. Users can add and remove products from the cart, with Redux managing the state throughout the app.",
      video: "/redux_shopping.mp4",
      demo: "https://redux-shopping-application.netlify.app/",
      source: "https://github.com/IjiniUthpala/Redux-Shopping-App"
    },
    {
      title: "React Router",
      description:
        "React Router is a versatile routing library for React, enabling seamless navigation on web, server (Node.js), and React Native platforms.",
      video: "/project4.mp4",
      source: "https://github.com/IjiniUthpala/React-Router"
    },
    {
      title: "Flutter Movies App",
      description:
        "A Movie App built with Flutter that allows users to browse, search, and view details of movies, including ratings and descriptions, featuring a sleek, responsive interface and smooth cross-platform performance.",
      images: [
        "images/flutter-movies-1.png",
        "images/flutter-movies-2.png",
        "images/flutter-movies-3.png"
      ],
      source: "https://github.com/IjiniUthpala/Flutter-movies-app"
    },
  
    {
      title: "Standalone App",
      description:
        "A Standalone To-Do App that lets users add, edit, and delete tasks without requiring internet access, featuring a simple, intuitive interface and local storage for persistent task management.",
      images: [
        "images/Standalone-img-1.jpg",
        
      ],
      source: "https://github.com/IjiniUthpala/React-Native-standalone-app"
    },
    {
      title: "Shopping list",
      description:
        "A Shopping List App built with React Native that allows users to create and manage shopping items, with a secure login system to save and sync lists across devices, featuring a simple and user-friendly interface.",
      images: [
        "images/shopping-list-1.png",
        "images/shopping-list-2.png",
        "images/shopping-list-3.png",
        "images/shopping-list-4.png"
      ],
      source: "https://github.com/IjiniUthpala/react-native-Shopping-list-app"
    },
    {
      title: "Weather App",
      description:
        "A Weather App developed with React Native that lets users check current weather conditions, forecasts, and temperature updates for any location, featuring a clean, responsive interface with real-time data.",
      images: [
        "images/weather-1.png",
        "images/weather-2.png",
        "images/weather-3.png",
        "images/weather-4.png"
      ],
      source: "https://github.com/IjiniUthpala/React-native--weather-app"
    },
    {
      title: "Map App",
      description:
        "A Map App built with React Native that displays interactive maps, allows users to view locations, add markers, and get real-time navigation, providing a smooth and responsive experience on both Android and iOS devices.",
      images: [
        "images/map-1.png",
        "images/map-2.png",
        "images/map-3.png"
       
      ],
      source: "https://github.com/IjiniUthpala/react-native-map"
    },
    {
      title: "Flutter ToDo",
      description:
        "A simple To-Do App built with Flutter that lets users add, edit, and delete tasks, mark them as complete, and view them offline with a clean, intuitive interface.",
      images: [
        "images/todo1.png",
        "images/todo2.png",
        "images/todo3.png"
      ],
      source: "https://github.com/IjiniUthpala/Flutter--Todo-app-"
    },
    
  ];

  const [currentImage, setCurrentImage] = useState({}); // Track current image per project

  const handleNextImage = (idx) => {
    setCurrentImage((prev) => {
      const nextIndex = prev[idx] !== undefined ? (prev[idx] + 1) % projects[idx].images.length : 1;
      return { ...prev, [idx]: nextIndex };
    });
  };

  const handlePrevImage = (idx) => {
    setCurrentImage((prev) => {
      const prevIndex = prev[idx] !== undefined ? (prev[idx] - 1 + projects[idx].images.length) % projects[idx].images.length : 0;
      return { ...prev, [idx]: prevIndex };
    });
  };

  return (
    <div className="bg-[#F5F5F5]">
      <header>
        <Navbar />
      </header>

      <section id="projects" className="min-h-screen py-8 px-6 md:px-12 lg:px-24 mt-8 sm:mt-6 lg:mt-4">
        <h1 className="text-4xl font-bold text-center text-black mb-12">Projects</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="rounded-lg overflow-hidden bg-white shadow-[rgba(0,0,0,0.5)_-10px_0px_15px_0px] transform transition-all duration-300 ease-in-out hover:scale-105 border-4 border-black"
            >
              <div className="p-2 sm:p-4">
                {/* Render video if exists, else render images */}
                {project.video ? (
                  <video
                    className="w-full h-36 sm:h-48 object-cover rounded-md border-4 border-black"
                    src={project.video}
                    alt={project.title}
                    muted
                    loop
                    autoPlay
                    playsInline
                  />
                ) : project.images ? (
                  <div className="w-full h-60 sm:h-72 relative">
                    <img
                      src={project.images[currentImage[idx] || 0]}
                      alt={`${project.title} screenshot`}
                      className="w-full h-full object-contain rounded-md border-2 border-black"
                    />
                    {/* Navigation buttons */}
                    <button
                      onClick={() => handlePrevImage(idx)}
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-2 py-1 rounded"
                    >
                      ‹
                    </button>
                    <button
                      onClick={() => handleNextImage(idx)}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-2 py-1 rounded"
                    >
                      ›
                    </button>
                  </div>
                ) : null}
              </div>

              <div className="p-2 sm:p-4">
                <h3 className="text-lg sm:text-xl font-bold text-black">{project.title}</h3>
                <p className="text-gray-600 text-sm sm:text-lg">{project.description}</p>
                <div className="mt-4 space-x-2 sm:space-x-4">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 sm:px-4 sm:py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm sm:text-base"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.source && (
                    <a
                      href={project.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 sm:px-4 sm:py-2 bg-gray-800 text-white rounded hover:bg-gray-900 text-sm sm:text-base"
                    >
                      View Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <AlignTop />
      <Footer />
    </div>
  );
};

export default Projects;
