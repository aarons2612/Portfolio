import React, { useEffect, useState } from 'react';
import './MainPage.css';
import { FaLinkedin, FaInstagram, FaGithub, FaReact, FaNodeJs, FaAws, FaDatabase, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';
import { SiUnity, SiBlender, SiMongodb } from 'react-icons/si';
import { DiAndroid } from 'react-icons/di';
import FloatingNavbar from './FloatingNavbar';
import TypingAnimation from './TypingAnimation';
import emailjs from 'emailjs-com';

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

  const projects = [
    {
      title: 'Project 1',
      description: 'Description of project 1.',
      imageUrl: '/project1.jpg' // Ensure this path is correct
    },
    {
      title: 'Project 2',
      description: 'Description of project 2.',
      imageUrl: '/project2.jpg' // Ensure this path is correct
    },
    {
      title: 'Project 3',
      description: 'Description of project 3.',
      imageUrl: '/project3.jpg' // Ensure this path is correct
    },
    {
      title: 'Project 4',
      description: 'Description of project 4.',
      imageUrl: '/project4.jpg' // Ensure this path is correct
    },
    // Add more projects as needed
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cqxwr5g', 'template_ffblvyi', e.target, 'OU71EalBTIH4bb5UO')
      .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
      }, (error) => {
        console.log(error.text);
        alert('An error occurred, please try again.');
      });

    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="main-page">
      <FloatingNavbar />
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
      <div className="about fade-out" id="about">
        <div className="left-column">
          <div className="left-section">
            <h1>Let's Connect</h1>
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
      <div className="services fade-out" id="services">
        <h2>Services</h2>
        <div className="projects">
          {projects.map((project, index) => (
            <div className="project" key={index}>
              <div className="project-image" style={{ backgroundImage: `url(${project.imageUrl})` }}>
                <div className="project-details">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
              <div className="project-gallery">
                View Gallery
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="contact fade-out" id="contact">
        <h2>Contact Me</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default MainPage;
