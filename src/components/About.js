import "./About.css"

import React from 'react';
import { FaReact, FaNodeJs, FaAws, FaDatabase, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';
import { SiUnity, SiBlender, SiMongodb } from 'react-icons/si';
import { DiAndroid } from 'react-icons/di';

const About = () => {
  return (
    <div className="about fade-out" id="about">
      <div className="left-column">
        <div className="left-section">
          <h1>About</h1>
          <p>
            I am a skilled React.js developer with knowledge of MongoDB and AWS. I'm good at creating scalable, effective solutions, and I work well in dynamic settings. My background involves creating user-focused web apps, placing a high value on quality, and exhibiting a dedication to lifelong learning and career advancement.
          </p>
        </div>
        <div className="left-section2">
          <h2>Work Experience</h2>
          <ul>
            <li>Software Developer Intern at SkillRank (Mar 2024 - Present)</li>
            <li>Summer Intern at Digisailor (Jun 2023)</li>
          </ul>
        </div>
      </div>
      <div className="right-section">
        <div className="tech-stack">
          <h1>Expertize</h1>
          <div className="tech-items">
            <div className="tech-item"><FaReact size={48} /></div>
            <div className="tech-item"><FaNodeJs size={48} /></div>
            <div className="tech-item"><FaAws size={48} /></div>
            <div className="tech-item"><FaDatabase size={48} /></div>
            <div className="tech-item"><SiUnity size={48} /></div>
            <div className="tech-item"><FaHtml5 size={48} /></div>
            <div className="tech-item"><FaCss3Alt size={48} /></div>
            <div className="tech-item"><FaJsSquare size={48} /></div>
            <div className="tech-item"><DiAndroid size={48} /></div>
            <div className="tech-item"><SiBlender size={48} /></div>
            <div className="tech-item"><SiMongodb size={48} /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
