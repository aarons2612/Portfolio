import "./Contact.css"

import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaFacebook, FaGithub, FaHome, FaInstagram, FaMailBulk, FaPhone } from 'react-icons/fa';
import { FaLinkedin } from "react-icons/fa6";
import Footer from "./Footer";

const Contact = () => {
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
    <div className="contact fade-out" id="contact">
      <h1>Contact Me</h1>
      <div className="contact-section">
      <div className="Right-section">
        <ul className="contact-links">
          <li><FaPhone/>  +91 7092631585</li>
          <li><FaMailBulk/>  aaronsimon2612@gmail.com</li>
          <li className="icons"><FaHome/>  Tirunelveli,Tamil Nadu,India</li>
          <li className="social-icon"><FaInstagram/> <FaGithub/> <FaFacebook/> <FaLinkedin/> </li>
        </ul>
      </div>
      <div className="Left-section">
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
      <Footer/>
    </div>
  );
};

export default Contact;
