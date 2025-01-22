import React from 'react';

function EducationSection() {
  return (
    <section className="flex flex-col items-center justify-center py-16">
      <h2 className="text-6xl font-bold text-center text-black mb-16">
        Education
      </h2>
      <div className="bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end p-8 rounded-lg max-w-3xl
                      mx-4 sm:mx-8 md:mx-16 lg:mx-20
                      border-t-1 border-l-8 border-r-1 border-b-8 border-black shadow-[rgba(0,0,0,0.5)_-10px_0px_15px_0px] relative
                      animate-gradient-pulse"> 
        <div className="text-black">
          <p className="text-lg mb-4 font-medium">
            Bachelor of Engineering and Information Technology
          </p>
          <p className="mb-2">
            <strong>JAMK University of Applied Sciences</strong> (08/2022 - 12/2025) - Jyväskylä, Finland 🎓
          </p>
          <p className="mb-4">
            I am currently writing my thesis to finish my studies next year. I have participated in many courses from the school&apos;s curriculum, including HTML/CSS, JavaScript, SQL and Database Management, Cyber Security, Linux, C#, Python, React, Redux, and more.
          </p>
          <p className="font-bold mb-4">Current GPA: 3.85</p>
          
        </div>
      </div>
    </section>
  );
}

export default EducationSection;
