import React from "react";
import Navbar from "./Navbar";
import Footer from "../components/Footer";
import SnakeAnimation from "../components/SnakeAnimation";
import AlignTop from '../components/AlignTop';

const Projects = () => {
  const projects = [
    { 
      title: "Movies App", 
      description: "This movie application showcases how to fetch and display movie data from The Movie Database (TMDb) using React. It employs Axios for data fetching, React hooks for state management, and Material-UI for styling. The app features a dynamic movie list, detailed movie information, including posters, genres, and trailers, and responsive design for seamless user experience across devices", 
      video: "/movies-app.mp4" ,
      demo: "https://my-movies-application.netlify.app/", 
      source: "https://github.com/IjiniUthpala/Movies-App"
    },
    { 
      title: "Weather App", 
      description: "This application loads JSON data and displays it in a React application. The weather forecast is fetched using Axios from OpenWeather. The user interface is built with Material-UI components.", 
      video: "/Weather-app.mp4",
      demo: "https://delicate-malasada-9bfc26.netlify.app/", 
      source: "https://github.com/IjiniUthpala/Weather-App"
    },
    { 
      title: "Redux Fake Store", 
      description: "This application simulates an online store by utilizing the REST API of a mock store to retrieve products and categories. Users can add and remove products from the cart, with Redux managing the state throughout the app.", 
      video: "/redux_shopping.mp4", 
      demo: "https://redux-shopping-application.netlify.app/", 
      source: "https://github.com/IjiniUthpala/Redux-Shopping-App"
    },
    { 
      title: "React Router", 
      description: "React Router is a versatile routing library for React, enabling seamless navigation on web, server (Node.js), and React Native platforms.", 
      video: "/project4.mp4", 
      source: "https://github.com/IjiniUthpala/React-Router"
    },
  ];

  return (
    <div className="bg-[#F5F5F5]">
      <header>
        <Navbar />
      </header>
      <section id="projects" className="min-h-screen py-8 px-6 md:px-12 lg:px-24 mt-8 sm:mt-6 lg:mt-4 xl:mt-">
        <h1 className="text-4xl font-bold text-center text-black mb-12">Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              className="rounded-lg overflow-hidden bg-white shadow-[rgba(0,0,0,0.5)_-10px_0px_15px_0px] transform transition-all duration-300 ease-in-out hover:scale-105 border-4 border-black"
            >
              {/* Padding inside the video container */}
              <div className="p-2 sm:p-4">
                <video 
                  className="w-full h-36 sm:h-48 object-cover rounded-md border-4 border-black" 
                  src={project.video} 
                  alt={project.title} 
                  muted 
                  loop 
                  autoPlay
                  playsInline
                />
              </div>
              <div className="p-2 sm:p-4">
                <h3 className="text-lg sm:text-xl font-bold text-black">{project.title}</h3>
                <p className="text-gray-600 text-sm sm:text-lg">{project.description}</p>
                <div className="mt-4 space-x-2 sm:space-x-4">
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-3 py-1 sm:px-4 sm:py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm sm:text-base"
                  >
                    View Demo
                  </a>
                  <a 
                    href={project.source} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-3 py-1 sm:px-4 sm:py-2 bg-gray-800 text-white rounded hover:bg-gray-900 text-sm sm:text-base"
                  >
                    View Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <SnakeAnimation />
      <AlignTop />
      <Footer />
    </div>
  );
};

export default Projects;
