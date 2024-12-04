'use client';

import React from "react";

const ContactPage = () => {
  return (
    <div className="bg-[#F5F5F5] min-h-screen py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-semibold text-center mb-8">Contact Me</h1>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
          <form action="https://formspree.io/f/xanyvwaz" method="POST" className="space-y-6">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-black focus:border-black sm:text-sm"
                placeholder="Your Name"
                required
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-black focus:border-black sm:text-sm"
                placeholder="Your Email"
                required
              />
            </div>

            {/* Message Input */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-black focus:border-black sm:text-sm"
                placeholder="Your Message"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-black text-white py-2 px-4 rounded-md shadow-sm text-sm font-medium hover:bg-gray-800"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Other Contact Options */}
        <div className="mt-12 text-center">
          <p className="text-lg mb-4">Or reach me through:</p>
          <div className="flex justify-center space-x-6">
            {/* Email */}
            <a href="mailto:uthpalaleka@gmail.com" className="text-black hover:text-gray-800 flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12h2m-6 6h2m4-10H8m-2 6h.01M4 16h16M4 20h16M8 16v4m0-12V8m8 0v4m0 4v4m0-12V8" />
              </svg>
              <p className="text-sm">Email</p>
            </a>

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/ijini-lekamge-38233928b/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" className="text-black hover:text-gray-800 flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12h2m-6 6h2m4-10H8m-2 6h.01M4 16h16M4 20h16M8 16v4m0-12V8m8 0v4m0 4v4m0-12V8" />
              </svg>
              <p className="text-sm">LinkedIn</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
