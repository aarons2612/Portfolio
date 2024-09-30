// src/components/FloatingNavbar.js
import React from 'react';
import './FloatingNavbar.css';

const FloatingNavbar = () => {
  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };
  const handleResumeClick = () => {
    const pdfUrl = '/Aaron\'s Resume.pdf'; // Path to your resume PDF
    window.open(pdfUrl, '_blank'); // Open the PDF in a new tab
  };

  return (
    <div className="floating-navbar">
      <div className="navbar-item" onClick={() => handleScroll('home')}>Home</div>
      <div className="navbar-item" onClick={() => handleScroll('about')}>About</div>
      <div className="navbar-item" onClick={() => handleScroll('services')}>Projects</div>
      <div className="navbar-item" onClick={() => handleScroll('contact')}>Contact</div>
      <div className="navbar-item vote" onClick={handleResumeClick}>Resume</div>
      
    </div>
  );
};

export default FloatingNavbar;
