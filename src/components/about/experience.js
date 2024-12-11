import React, { useState, useEffect } from 'react';
import { FaBriefcase } from 'react-icons/fa';
import { HiLightBulb } from "react-icons/hi2";
import { CloseSharp } from '@mui/icons-material';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Don't forget to import the AOS CSS

const timelineData = [
  { 
    id: 1, 
    date: '2020', 
    title: (
        <>
          Fullstack Intern @ Unfair Advantage Oy <br /> Helsinki, Finland<br />
          July 2024 - November 2024
        </>
      ), 
    icon: FaBriefcase, 
    color: 'bg-white', 
    borderColor: 'border-black',
    details: (
      <div className="text-black text-center">
        <ul className="list-disc pl-6 text-sm mx-auto">
          <li>Gained hands-on experience working with tools like Jira, Bitbucket, Material UI, Meteor.js, and Trello.</li>
          <li>Responsible for transitioning project files into the Material UI framework, optimizing UI elements, and enhancing the user experience.</li>
          <li>Attended daily SCRUM meetings to report task progress and contribute new design and feature ideas.</li>
        </ul>
      </div>
    )
  },
  { 
    id: 2, 
    date: '2024', 
    title: (
      <>
        Research Assistant at JAMK<br />
        March 2024 - October 2024
      </>
    ), 
    icon: FaBriefcase, 
    color: 'bg-white', 
    borderColor: 'border-black',
    details: (
      <div className="text-black text-center">
        <ul className="list-disc pl-6 text-sm mx-auto">
          <li>Conducted daily research activities, including data collection and analysis using Microsoft Excel&apos;s Pivot Tables.</li>
          <li>Assisted with citation and formatting for article publications.</li>
          <li>Compiled search terms weekly for analysis.</li>
          <li>Currently involved in research focused on Quantum Computing.</li>
        </ul>
      </div>
    )
  },
  { 
    id: 3, 
    date: '2024', 
    title: (
        <>
          Digital Marketing Executive - Trainee<br />
          Dec 2019 - Feb 2020
        </>
      ), 
    icon: FaBriefcase, 
    color: 'bg-white', 
    borderColor: 'border-black',
    details: (
      <div className="text-black text-center">
        <ul className="list-disc pl-6 text-sm mx-auto">
          <li>Crafted high-quality content tailored for specific target keywords, significantly enhancing the website&apos;s visibility on search engines.</li>
          <li>Regularly audited and updated older content to maintain its relevance and ranking.</li>
          <li>Engaged in continuous research and training to keep up with evolving SEO best practices.</li>
          <li>Contributed to consistently high-quality content production.</li>
        </ul>
      </div>
    )
  }
];

const Timeline = () => {
  const [selectedMilestone, setSelectedMilestone] = useState(null);

  const handleMilestoneClick = (milestone) => {
    setSelectedMilestone(milestone);
  };

  const closeModal = () => {
    setSelectedMilestone(null);
  };

  // Initialize AOS when component mounts
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animation
      easing: 'ease-out-back', // Animation easing
      once: true, // Animation happens only once when scrolling
    });
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-6xl font-bold text-center text-black mb-16">Experience</h2>
      <div className="relative flex flex-col items-center">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-r-4 border-gray-400"></div>

        {timelineData.map((milestone, index) => (
          <div
            key={milestone.id}
            className={`mb-8 flex flex-col md:flex-row items-center w-full ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
          >
            {/* Bulb Icon stays in place */}
            <div className="bg-white p-4 rounded-full border-4 border-black shadow-md z-10 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
              <HiLightBulb className="text-black text-4xl" />
            </div>

            {/* Milestone Box with hover animation and AOS scroll animation */}
            <div
              data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'} // Apply AOS animation (from left or right)
              data-aos-offset="100" // Trigger animation after scrolling 100px
              className={`mt-4 md:mt-0 ml-8 md:ml-10 mr-8 md:mr-10 w-full md:w-5/12 px-10 py-8 rounded-lg border-4 ${milestone.borderColor} bg-white cursor-pointer relative animate-gradient-bg shadow-[rgba(0,0,0,0.5)_-10px_0px_15px_0px] transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-[rgba(0,0,0,0.7)_-5px_0px_25px_0px]`}
            >
              <button
                onClick={() => handleMilestoneClick(milestone)}
                className="w-full h-full flex flex-col items-center justify-center"
              >
                <h3 className="font-bold text-xl text-black text-center">{milestone.title}</h3>
                <milestone.icon className="text-black text-3xl mt-4 mb-4" />
                <p className="text-sm mt-2 text-black text-center">Click for more</p>
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedMilestone && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50" onClick={closeModal}>
          <div className="relative bg-white p-6 rounded-lg border-4 border-black shadow-md w-96" onClick={(e) => e.stopPropagation()}>
            {React.createElement(selectedMilestone.icon, { className: `mx-auto text-5xl text-black` })}
            <h3 className="text-lg font-medium text-center mt-4 text-black">{selectedMilestone.title}</h3>
            <div className="text-center mt-2 text-black">{selectedMilestone.details}</div>
            <button
              onClick={closeModal}
              className="mt-4 w-auto bg-gray-800 text-white py-1 px-4 rounded-md hover:bg-rose-600 flex items-center justify-center mx-auto"
            >
              <CloseSharp className="text-white text-xl" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Timeline;
