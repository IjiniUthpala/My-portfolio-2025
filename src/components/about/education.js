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
            <strong>JAMK University of Applied Sciences</strong> (08/2022 - 05/2025) – Jyväskylä, Finland 🎓
          </p>
          <p className="mb-4">
            Graduated with a Bachelor’s degree in Engineering and Information Technology, with a concentration in software engineering, data analytics, and AI. My thesis, titled “Utilizing Artificial Intelligence to Advance Quantum Computing Capabilities”, explored how modern AI techniques can be used to enhance the potential of quantum computing systems.
          </p>
          <p className="font-bold mb-4">Weighted Average: 4.09 / 5.00</p>
          <p className="font-bold mb-8">Thesis Grade: 5</p>

          {/* Button inside the box */}
          <button
            onClick={() => window.open('/certificate.pdf', '_blank')}
            className="px-6 py-3 text-white font-semibold bg-black rounded-2xl hover:bg-opacity-80 transition duration-300 shadow-lg"
          >
            View Full Transcript
          </button>
        </div>
      </div>
    </section>
  );
}

export default EducationSection;
