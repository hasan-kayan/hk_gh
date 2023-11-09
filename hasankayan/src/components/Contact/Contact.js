import React from 'react';
import './Contact.css'; // Create a corresponding CSS file for styling

const HomePage = () => {
  const openMailTo = () => {
    window.location.href = 'hasankayan.formal@gmail.com'; // Replace with your email address
  };

  return (
    <div className="home-container">
      <h1>Here You Can Find My Profiles And Contact Me</h1>
      <div className="button-container">
        <a href="https://youtube.com/@HasanKayanS?si=726rNQ_JXV2JYx_e" className="button youtube-button">
          YouTube
        </a>
        <a href="https://github.com/hasan-kayan" className="button github-button">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/hasan-kayan-37a59319b/" className="button linkedin-button">
          LinkedIn
        </a>
        <a href="https://medium.com/@hasankayan" className="button medium-button">
          Medium
        </a>
        <button onClick={openMailTo} className="button email-button">
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default HomePage;
