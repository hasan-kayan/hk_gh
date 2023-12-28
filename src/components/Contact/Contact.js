import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faGithub, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faSpinner } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import './Contact.css';

const HomePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your server endpoint
    const serverEndpoint = 'REPLACE WITH YOUR ENDPOINT OF MAIL SERVICE';

    setLoading(true);

    // Send the form data to the server using axios
    axios.post(serverEndpoint, {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    })
      .then((response) => {
        console.log('Server response:', response.data);
        // Optionally, you can reset the form after successful submission
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const openMailTo = () => {
    window.location.href = 'mailto:hasankayan.formal@gmail.com';
  };

  return (
    <div className="home-container">
      <h1>Here You Can Find My Profiles And Contact Information</h1>
      <div className="button-container">
        <a href="https://youtube.com/@HasanKayanS?si=726rNQ_JXV2JYx_e" className="button youtube-button">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        <a href="https://github.com/hasan-kayan" className="button github-button">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/hasan-kayan-37a59319b/" className="button linkedin-button">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://medium.com/@hasankayan" className="button medium-button">
          <FontAwesomeIcon icon={faMedium} />
        </a>
        <button onClick={openMailTo} className="button email-button">
          <FontAwesomeIcon icon={faEnvelope} />
        </button>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} required />
        </div>
        <button type="submit" className="button submit-button" disabled={loading}>
          {loading ? <FontAwesomeIcon icon={faSpinner} spin /> : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default HomePage;
