import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faGithub, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Contact.css'; // Create a corresponding CSS file for styling

const HomePage = () => {
  const openMailTo = () => {
    window.location.href = 'mailto:hasankayan.formal@gmail.com'; // Use 'mailto:' to open the default email client
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
    </div>
  );
};

export default HomePage;
