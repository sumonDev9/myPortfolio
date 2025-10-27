import React from 'react';
import Image from 'next/image';
import Header from './Header';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col">
      <Header /> 
      <main className="flex-grow flex flex-col justify-center items-center text-center px-4">
        <Image
          id="profile-pic"
          src="https://i.ibb.co/ZzzjyMCH/Whats-App-Image-2025-10-05-at-6-10-05-PM.jpg"
          alt="Sumon Mitra"
          width={112} // 112px (w-28)
          height={112} // 112px (h-28)
          className="rounded-full border-2 border-gray-500 mb-4"
        />
        <h1 id="headline" className="text-4xl md:text-6xl lg:text-7xl font-bold max-w-4xl">
          I&apos;m Sumon Mitra
        </h1>
        <p id="subheadline" className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl">
          A creative Frontend Developer passionate about building expressive and engaging web solutions.
        </p>
        <div id="cta-buttons" className="mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href="#projects"
            className="bg-gray-100 text-gray-900 font-semibold px-8 py-3 rounded-full hover:bg-gray-300 transition-transform transform hover:scale-105"
          >
            My Projects
          </a>
          <a
            href="#"
            className="border border-gray-400 text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all transform hover:scale-105"
          >
            Download CV
          </a>
        </div>
      </main>
    </section>
  );
};

       
export default Hero;