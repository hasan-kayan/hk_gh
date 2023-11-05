// src/components/ProjectBox.js
import React from 'react';
import { motion } from 'framer-motion';
import './ProjectBox.css';

const ProjectBox = ({ title, description, imageUrl, githubUrl }) => {
  return (
    <motion.div className="project-box">
      <div className="project-image-container">
        <img src={imageUrl} alt={title} className="project-image" />
      </div>
      <div className="project-info">
        <h2>{title}</h2>
        <p>{description}</p>
        <button onClick={() => window.open(githubUrl, "_blank")}>View on GitHub</button>
      </div>
    </motion.div>
  );
};

export default ProjectBox;
