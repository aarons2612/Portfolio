import "./Services.css"

import React from 'react';

const Services = () => {
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

  return (
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
  );
};

export default Services;
