import React from 'react';
import "./Header.css";

const Header = () => {
  const handleResumeClick = () => {
    const pdfUrl = '/Aaron\'s Resume.pdf'; // Path to your resume PDF
    window.open(pdfUrl, '_blank'); // Open the PDF in a new tab
  };

  return (
    <div className='header'>
      <button className='res-btn' onClick={handleResumeClick}>
        Resume
      </button>
    </div>
  );
};

export default Header;
