// src/components/FloatingNavbar.js
import React from 'react';
import './FloatingNavbar.css';

const FloatingNavbar = () => {
  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="floating-navbar">
      <div className="navbar-item" onClick={() => handleScroll('home')}>Home</div>
      <div className="navbar-item" onClick={() => handleScroll('about')}>About</div>
      <div className="navbar-item" onClick={() => handleScroll('services')}>Projects</div>
      <div className="navbar-item vote" onClick={() => handleScroll('contact')}>Contact</div>
      
    </div>
  );
};

export default FloatingNavbar;
