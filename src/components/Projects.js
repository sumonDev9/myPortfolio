import React from 'react';
import Image from 'next/image';

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="section-title text-4xl font-bold text-center mb-12">Featured Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="project-card group relative overflow-hidden rounded-lg shadow-lg" style={{ minHeight: '250px' }}>
            <Image
              src="https://placehold.co/600x400/1e293b/ffffff?text=Client+Project+A"
              alt="E-commerce Platform"
              width={600}
              height={400}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="relative flex h-full flex-col justify-end p-6 text-white">
              <div className="transform transition-transform duration-500 ease-in-out group-hover:-translate-y-16">
                <h3 className="text-2xl font-bold">E-commerce Platform</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="bg-blue-500/30 text-blue-200 text-xs font-semibold px-2.5 py-1 rounded-full">
                    React
                  </span>
                  <span className="bg-cyan-500/30 text-cyan-200 text-xs font-semibold px-2.5 py-1 rounded-full">
                    Tailwind
                  </span>
                </div>
              </div>
              <div className="absolute bottom-6 left-6 right-6 translate-y-8 transform opacity-0 transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-sm text-gray-300 mb-4">
                  A fully responsive e-commerce site with modern UI/UX.
                </p>
                <a href="#" className="inline-flex items-center font-semibold text-white hover:underline">
                  View Details
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="project-card group relative overflow-hidden rounded-lg shadow-lg" style={{ minHeight: '250px' }}>
            <Image
              src="https://placehold.co/600x400/1e293b/ffffff?text=Client+Project+B"
              alt="SaaS Dashboard"
              width={600}
              height={400}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="relative flex h-full flex-col justify-end p-6 text-white">
              <div className="transform transition-transform duration-500 ease-in-out group-hover:-translate-y-16">
                <h3 className="text-2xl font-bold">SaaS Dashboard</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="bg-green-500/30 text-green-200 text-xs font-semibold px-2.5 py-1 rounded-full">
                    Vue.js
                  </span>
                </div>
              </div>
              <div className="absolute bottom-6 left-6 right-6 translate-y-8 transform opacity-0 transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-sm text-gray-300 mb-4">
                  A data visualization dashboard for a SaaS product.
                </p>
                <a href="#" className="inline-flex items-center font-semibold text-white hover:underline">
                  View Details
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="project-card group relative overflow-hidden rounded-lg shadow-lg" style={{ minHeight: '250px' }}>
            <Image
              src="https://placehold.co/600x400/1e293b/ffffff?text=Personal+Project"
              alt="Task Management App"
              width={600}
              height={400}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="relative flex h-full flex-col justify-end p-6 text-white">
              <div className="transform transition-transform duration-500 ease-in-out group-hover:-translate-y-16">
                <h3 className="text-2xl font-bold">Task Management App</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="bg-yellow-500/30 text-yellow-200 text-xs font-semibold px-2.5 py-1 rounded-full">
                    JavaScript
                  </span>
                </div>
              </div>
              <div className="absolute bottom-6 left-6 right-6 translate-y-8 transform opacity-0 transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-sm text-gray-300 mb-4">
                  A simple and intuitive task app created with vanilla JS.
                </p>
                <a href="#" className="inline-flex items-center font-semibold text-white hover:underline">
                  View Details
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 view-more-button">
          <a
            href="#"
            className="border border-gray-400 text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all transform hover:scale-105"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;