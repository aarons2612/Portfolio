import "./Services.css";
import React from 'react';

const Services = () => {
  const projects = [
    {
      title: 'AR Book',
      description: 'Created a Solar System using Unity',
      imageUrl: '/project1.jpg', // Ensure this path is correct
      link: 'https://example.com/project1', // Add the project link
      source: 'https://example.com/project1'
    },
    {
      title: 'Payslip App',
      description: 'Developed a pay-slip sender.',
      imageUrl: '/pro2.png', // Ensure this path is correct
      link: 'https://featlogin.d3nibgonsz456v.amplifyapp.com/',
      source:'https://featlogin.d3nibgonsz456v.amplifyapp.com/' // Add the project link
    },
    {
      title: 'Website',
      description: 'Developed a website for Z-designers',
      imageUrl: '/pro1.png', // Ensure this path is correct
      link: 'https://zdesigners.netlify.app/', // Add the project link
      source:'https://github.com/aarons2612/z-designers'
    },
    {
      title: 'Website',
      description: 'Developed a website for Myself',
      imageUrl: '/pro3.png', // Ensure this path is correct
      link: 'https://aaronsimon-portfolio.netlify.app/', // Add the project link
      source:'https://github.com/aarons2612/portfolio'
    },
    // Add more projects as needed
  ];

  const handleButtonClick = (link) => {
    // Open the link in a new tab
    window.open(link, '_blank');
  };
  

  return (
    <div className="services fade-out" id="services">
      <h1>Projects</h1>
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
              <button onClick={() => handleButtonClick(project.link)} className="btn">View</button>
              <button onClick={() => handleButtonClick(project.source)} className="btn">Source</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
