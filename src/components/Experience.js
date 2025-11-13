import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="section-title text-4xl font-bold text-center mb-16">Work Experience</h2>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 w-1 bg-slate-700 h-full transform -translate-x-1/2"></div>

          <div className="space-y-12">
            <div className="timeline-item relative">
              <div className="timeline-dot absolute w-4 h-4 bg-blue-400 rounded-full mt-3 left-4 md:left-1/2 transform -translate-x-1/2"></div>
              <div className="timeline-card md:ml-auto md:pl-12 md:w-1/2 pl-12">
                <div className="glass-card p-6 rounded-lg shadow-lg">
                  <p className="text-sm font-semibold text-blue-300 mb-1">Jan 2023 - Present</p>
                  <h3 className="text-2xl font-bold mb-1">Frontend Developer</h3>
                  <p className="text-gray-400 mb-3">Tech Solutions Inc. - Kolkata, India</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    <li>Developed and maintained responsive user interfaces using React.js.</li>
                    <li>Collaborated with UI/UX designers to implement modern designs.</li>
                    <li>Optimized web applications for maximum speed and scalability.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="timeline-item relative">
              <div className="timeline-dot absolute w-4 h-4 bg-blue-400 rounded-full mt-3 left-4 md:left-1/2 transform -translate-x-1/2"></div>
              <div className="timeline-card md:mr-auto md:pr-12 md:w-1/2 pl-12 md:pl-0 md:text-right">
                <div className="glass-card p-6 rounded-lg shadow-lg">
                  <p className="text-sm font-semibold text-blue-300 mb-1">May 2022 - Dec 2022</p>
                  <h3 className="text-2xl font-bold mb-1">Web Development Intern</h3>
                  <p className="text-gray-400 mb-3">insu certaion private Limited</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-1 text-left md:text-right">
                    <li>Assisted the senior development team in creating new features.</li>
                    <li>Worked with HTML, CSS, and vanilla JavaScript on client projects.</li>
                    <li>Participated in code reviews and team meetings.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;