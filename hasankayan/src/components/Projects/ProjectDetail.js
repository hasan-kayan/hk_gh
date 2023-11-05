// src/components/Projects/ProjectDetail.js

import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import projectsData from './ProjectData'; // You might need to adjust the path according to your data file location
import './ProjectDetail.css'; // ProjectDetail CSS file path

const ProjectDetail = () => {
  let { projectId } = useParams(); // This will get the projectId from the URL
  let project = projectsData.find(p => p.id === projectId);

  if (!project) {
    return <div>Project not found!</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="project-detail"
    >
      <h2>{project.title}</h2>
      <img src={project.imageUrl} alt={project.title} />
      <p>{project.description}</p>
      {/* You can add more detailed information here */}
    </motion.div>
  );
};

export default ProjectDetail;
