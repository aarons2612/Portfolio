import React, { useEffect } from 'react';
import './MainPage.css';
import FloatingNavbar from '../components/FloatingNavbar';
import Home from '../components/Home';
import About from '../components/About';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Header from '../components/Header';

const MainPage = () => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.fade-in, .fade-out');
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          section.classList.add('visible');
          section.classList.remove('hidden');
        } else {
          section.classList.remove('visible');
          section.classList.add('hidden');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger the scroll handler on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="main-page">
      <Header/>
      <FloatingNavbar />
      <Home />
      <About />
      <Services />
      <Contact />
    </div>
  );
};

export default MainPage;
