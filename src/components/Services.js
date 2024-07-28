import "./Services.css";
import React from 'react';

const Services = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'Description of project 1.',
      imageUrl: '/project1.jpg', // Ensure this path is correct
      link: 'https://example.com/project1' // Add the project link
    },
    {
      title: 'Project 2',
      description: 'Description of project 2.',
      imageUrl: '/pro2.png', // Ensure this path is correct
      link: 'https://featlogin.d3nibgonsz456v.amplifyapp.com/' // Add the project link
    },
    {
      title: 'Project 3',
      description: 'Description of project 3.',
      imageUrl: '/pro1.png', // Ensure this path is correct
      link: 'https://zdesigners.netlify.app/' // Add the project link
    },
    // Add more projects as needed
  ];

  const handleButtonClick = (link) => {
    // Navigate to the project link
    window.location.href = link;
  };

  return (
    <div className="services fade-out" id="services">
      <h2>Projects</h2>
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
              <button onClick={() => handleButtonClick(project.link)}>View</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
