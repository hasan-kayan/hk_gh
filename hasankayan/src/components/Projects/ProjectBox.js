// src/components/ProjectBox.js
import React from 'react';
import { motion } from 'framer-motion';
import './ProjectBox.css';

const ProjectBox = ({ title, imageUrl, githubUrl }) => {
  return (
    <motion.div 
      className="project-box" 
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <h2>{title}</h2>
      <img src={imageUrl} alt={title} className="project-image" />
      <button onClick={() => window.open(githubUrl, "_blank")}>View on GitHub</button>
    </motion.div>
  );
};

export default ProjectBox;
