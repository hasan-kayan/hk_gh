// src/components/ProjectsPage.js
import React from 'react';
import ProjectBox from './ProjectBox';
import './ProjectsPage.css';

// Import images
import Three from './images/Three.png';
import UiPath from './images/CustomUiPath.png';
import MQTT from './images/MQTT.png';

const ProjectsPage = () => {
  const projects = [
    {
      title: "Mesh Subtractor 3D",
      description: "This project provides a set of utility classes that extend the functionality of Three.js geometries with Constructive Solid Geometry (CSG) capabilities, using the three-csg-ts library. Our goal is to provide an easy-to-use interface for performing complex geometry operations such as union, subtraction, and intersection.",
      imageUrl: Three,
      githubUrl: "https://github.com/hasan-kayan/MeshSubtractor3D"
    },
    {
      title: "Custom Activities UiPath",
      description: "This project provides special activities for UiPath environment, specilized on Excel activities and big data process. You can examine this project form my Github repository...",
      imageUrl: UiPath,
      githubUrl: "https://github.com/hasan-kayan/Custom_Activities_For_UiPath"
    },
    {
      title: "MQTT Robot Controller",
      description: "This project provides a infrastructure for cloud based communications for robotic hardwares. Here we have used ESP32 chip for wi-fi integration and communications. You can examine my project by my Github.",
      imageUrl: MQTT,
      githubUrl: "https://github.com/hasan-kayan/mqtt-robot-controller"
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
