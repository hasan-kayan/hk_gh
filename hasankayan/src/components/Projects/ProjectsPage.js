// src/components/ProjectsPage.js
import React from 'react';
import ProjectBox from './ProjectBox';
import './ProjectsPage.css';

// Import images
import Three from './images/Three.png';
import UiPath from './images/CustomUiPath.png';
import cryptoDashboardImage from './images/MQTT.png';

const ProjectsPage = () => {
  const projects = [
    {
      title: "Mesh Subtractor 3D",
      description: "A 3D modeling tool to perform boolean operations on mesh objects. Built with Three.js and React.",
      imageUrl: Three,
      githubUrl: "https://github.com/hasan-kayan/MeshSubtractor3D"
    },
    {
      title: "Custom Activities UiPath",
      description: "An online platform for creating and customizing professional resumes. Features drag-and-drop interface.",
      imageUrl: UiPath,
      githubUrl: "https://github.com/your-username/resume-builder"
    },
    {
      title: "Cryptocurrency Dashboard",
      description: "A dashboard to monitor and analyze cryptocurrency trends and perform algorithmic trading.",
      imageUrl: cryptoDashboardImage,
      githubUrl: "https://github.com/your-username/crypto-dashboard"
    },
    
  ];

  return (
    <div className="projects-page">
      {projects.map((project, index) => (
        <ProjectBox key={index} {...project} />
      ))}
    </div>
  );
};

export default ProjectsPage;
