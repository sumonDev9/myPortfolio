import React from 'react';
import Image from 'next/image';

const Skills = () => {
  const skills = [
    { name: 'HTML5', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'React', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Next.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', style: { background: 'white', borderRadius: '50%', padding: '2px' } },
    { name: 'Vue.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
    { name: 'Tailwind CSS', src: 'https://i.ibb.co/84XBLg0k/image-4.png' }, // আপনার মূল HTML-এ এটি ছিল
    { name: 'Node.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Git', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'Figma', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  ];

  return (
    <section id="skills" className="py-24 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="section-title text-4xl font-bold text-center mb-12">Technologies I Use</h2>

        {/* Swiper JS  */}
        <div className="swiper skills-slider">
          <div className="swiper-wrapper">
        
            {[...skills, ...skills].map((skill, index) => (
              <div className="swiper-slide flex flex-col items-center justify-center gap-2" key={index}>
                <Image
                  src={skill.src}
                  alt={skill.name}
                  width={64} // 64px (h-16 w-16)
                  height={64} // 64px (h-16 w-16)
                  style={skill.style || {}}
                  className="h-16 w-16"
                />
                <span className="font-semibold">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;