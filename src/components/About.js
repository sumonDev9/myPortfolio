import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="section-title text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="about-image md:w-1/3">
            <Image
              src="https://placehold.co/400x500"
              alt="Sumon Mitra"
              width={400}
              height={500}
              className="rounded-lg shadow-2xl w-full"
            />
          </div>
          <div className="about-text md:w-2/3">
            <h3 className="text-3xl font-semibold mb-4">Crafting Digital Experiences</h3>
            <p className="text-gray-300 mb-4">
              Hello! I&apos;m Sumon, a frontend developer based in Kolkata. My passion lies in creating
              beautiful, functional, and user-centric websites. I love turning complex problems into
              simple and intuitive designs.
            </p>
            <p className="text-gray-300">
              With a strong foundation in modern web technologies, I am dedicated to building
              high-quality applications that not only look good but also perform exceptionally well.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;