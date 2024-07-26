import "./Home.css";

import React from 'react';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import TypingAnimation from './TypingAnimation';


const Home = () => {
  return (
    <div className="home fade-in" id="home">
      <div className="left-section">
        <h1>
          <TypingAnimation text="Hi, I am Aaron" />
        </h1>
        <p>
          <TypingAnimation text="Software Developer" />
        </p>
        <div className="social-icons">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        </div>
      </div>
      <div className="right-section">
        <div className="image-frame">
          <img src="/your-photo.jpg" alt="Aaron" />
        </div>
      </div>
    </div>
  );
};

export default Home;
