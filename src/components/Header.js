import React from 'react';

const Header = () => {
  return (
    <header className="w-full">
      <nav className="container mx-auto px-6 md:px-12 py-6 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold logo">
          SM.
        </a>
        <ul className="hidden md:flex items-center space-x-8 nav-links">
          <li>
            <a href="#about" className="hover:text-gray-300 transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="#experience" className="hover:text-gray-300 transition-colors">
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-gray-300 transition-colors">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-gray-300 transition-colors">
              Skills
            </a>
          </li>
          <li>
            <a href="#blog" className="hover:text-gray-300 transition-colors">
              Blog
            </a>
          </li>
        </ul>
        <a
          href="#contact"
          className="contact-button bg-white text-black px-5 py-2 rounded-full font-semibold hover:bg-gray-200 transition-colors"
        >
          Contact Me
        </a>
      </nav>
    </header>
  );
};

export default Header;