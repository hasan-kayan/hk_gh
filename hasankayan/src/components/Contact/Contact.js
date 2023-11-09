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
        <a href="https://www.youtube.com/" className="button youtube-button">
          YouTube
        </a>
        <a href="https://github.com/yourusername" className="button github-button">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/yourprofile" className="button linkedin-button">
          LinkedIn
        </a>
        <a href="https://medium.com/@yourusername" className="button medium-button">
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
