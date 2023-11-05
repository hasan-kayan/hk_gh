// src/components/ProjectBox.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './ProjectBox.css'; // Create a ProjectBox.css for styling

const ProjectBox = ({ project }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/projects/${project.id}`);
  };

  return (
    <motion.div 
      className="project-box"
      whileHover={{ scale: 1.05 }}
      onClick={handleClick}
    >
      <img src={project.imageUrl} alt={project.title} className="project-image" />
      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </motion.div>
  );
};

export default ProjectBox;
