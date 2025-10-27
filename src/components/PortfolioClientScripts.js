"use client"; 

import { useEffect } from 'react';


import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Swiper from 'swiper';


import 'swiper/css/bundle'; 

const PortfolioClientScripts = () => {
  useEffect(() => {
    
    
    gsap.registerPlugin(ScrollTrigger);

    // --- Initial Page Load Animations ---
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.from('.logo, .nav-links a, .contact-button', { duration: 1, opacity: 0, y: -50, stagger: 0.1 });
    tl.from('#profile-pic', { duration: 1, opacity: 0, scale: 0.5 }, '-=0.8');
    tl.from('#headline', { duration: 1, opacity: 0, y: 30 }, '-=0.6');
    tl.from('#subheadline', { duration: 1, opacity: 0, y: 30 }, '-=0.8');
    tl.from('#cta-buttons', { duration: 1, opacity: 0, y: 30 }, '-=0.8');

    // --- Background Blob Animations ---
    gsap.to('#blob1', {
      duration: 15,
      x: 'random(-20vw, 20vw)',
      y: 'random(-20vh, 20vh)',
      scale: 'random(1, 1.5)',
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
    gsap.to('#blob2', {
      duration: 20,
      x: 'random(-20vw, 20vw)',
      y: 'random(-20vh, 20vh)',
      scale: 'random(1, 1.5)',
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
    gsap.to('.fixed', { duration: 40, rotation: 360, repeat: -1, ease: 'none' });

    // --- Scroll-Based Animations ---
    const sections = gsap.utils.toArray('section');
    sections.forEach((section) => {
      const sectionTitle = section.querySelector('.section-title');
      if (sectionTitle) {
        gsap.from(sectionTitle, {
          scrollTrigger: { trigger: sectionTitle, start: 'top 85%', toggleActions: 'play none none none' },
          opacity: 0,
          y: 50,
          duration: 1,
        });
      }
    });

    // --- Experience Section Timeline Animation ---
    const timelineItems = gsap.utils.toArray('.timeline-item');
    timelineItems.forEach((item) => {
      const card = item.querySelector('.timeline-card');
      const dot = item.querySelector('.timeline-dot');

      gsap.from(card, {
        scrollTrigger: {
          trigger: item,
          start: 'top 85%',
        },
        opacity: 0,
        x: card.classList.contains('md:ml-auto') ? 100 : -100,
        duration: 1,
        ease: 'power3.out',
      });

      gsap.from(dot, {
        scrollTrigger: {
          trigger: item,
          start: 'top 85%',
        },
        scale: 0,
        duration: 0.5,
        ease: 'back.out(1.7)',
      });
    });

    // --- Footer Animation ---
    gsap.from('.footer-content', {
      scrollTrigger: {
        trigger: '#footer',
        start: 'top 95%',
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out',
    });

    // About Section Animation
    gsap.from('.about-image', {
      scrollTrigger: { trigger: '#about', start: 'top 80%' },
      duration: 1.2,
      x: -100,
      opacity: 0,
      ease: 'power3.out',
    });
    gsap.from('.about-text', {
      scrollTrigger: { trigger: '#about', start: 'top 80%' },
      duration: 1.2,
      x: 100,
      opacity: 0,
      ease: 'power3.out',
    });

    // Projects Section Animation
    gsap.from('.project-card', {
      scrollTrigger: { trigger: '#projects', start: 'top 80%' },
      duration: 1,
      y: 100,
      opacity: 0,
      stagger: 0.2,
    });

    // Skills Section Animation
    gsap.from('.skills-slider', {
      scrollTrigger: { trigger: '#skills', start: 'top 80%' },
      duration: 1,
      opacity: 0,
    });

    // Blog Section Animation
    gsap.from('.blog-card', {
      scrollTrigger: { trigger: '#blog', start: 'top 80%' },
      duration: 1,
      x: -100,
      opacity: 0,
      stagger: 0.3,
    });

    // Contact Section Animation
    gsap.from('.contact-form', {
      scrollTrigger: { trigger: '#contact', start: 'top 80%' },
      duration: 1,
      scale: 0.8,
      opacity: 0,
    });
    gsap.from('.view-more-button', {
      scrollTrigger: { trigger: '.view-more-button', start: 'top 90%' },
      duration: 1,
      y: 50,
      opacity: 0,
    });

    // --- Swiper Slider for Skills Section ---
    const swiper = new Swiper('.skills-slider', {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 30,
      speed: 4000,
      autoplay: {
        delay: 1,
        disableOnInteraction: false,
      },
      breakpoints: {
        768: {
          slidesPerView: 5,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 7,
          spaceBetween: 50,
        },
      },
    });
    
  }, []); 

  return null; 
};

export default PortfolioClientScripts;