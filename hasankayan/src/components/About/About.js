import React from 'react';
import { motion } from 'framer-motion';
import './About.css'; // Make sure to create an About.css file for styling

const About = () => {
  return (
    <motion.div
      className="about-container"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0, transition: { delay: 0.1, duration: 0.5 } }}
    >
      <h1>About Me</h1>
      <p>Here you can put information about your professional background, skills, and experience.</p>
      <a href={`${process.env.PUBLIC_URL}/Hasan-Kayan.pdf`} download="Hasan-Kayan.pdf" className="download-button">
        Download CV
      </a>
    </motion.div>
  );
};

export default About;
