import React from "react";
import dow from "../assets/dow.jpg";

const About = () => {
  return (
    <section
      id="about" // this is important for navbar links
      className="w-full bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white py-20 px-6"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image */}
        <div className="md:w-1/2 flex justify-center md:justify-start animate-slide-in-left">
          <img
            src={dow} 
            alt="About Emperior Bulls"
            className="w-80 h-80 md:w-[400px] md:h-[400px] rounded-3xl object-cover shadow-2xl"
          />
        </div>

        {/* Text */}
        <div className="md:w-1/2 flex flex-col gap-6 animate-slide-in-right">
          <h2 className="text-4xl md:text-5xl font-bold tracking-wide">
            About <span className="text-red-400">Emperior Bulls</span>
          </h2>
          <p className="text-gray-200 text-lg md:text-xl leading-relaxed">
            Emperior Bulls is a cutting-edge platform that blends innovation
            with strategy to empower traders and investors worldwide. Our
            mission is to provide the tools, insights, and community support
            necessary to succeed in the dynamic world of finance and digital
            assets.
          </p>
          <p className="text-gray-300 text-lg md:text-lg leading-relaxed">
            With a focus on transparency, security, and growth, we are
            committed to helping you maximize your potential while navigating
            the markets with confidence.
          </p>
          <button className="mt-4 bg-red-500 hover:bg-red-600 transition duration-300 text-white font-semibold px-6 py-3 rounded-lg shadow-lg w-max">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
