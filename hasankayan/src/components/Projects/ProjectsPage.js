// src/components/ProjectsPage.js
import React from 'react';
import ProjectBox from './ProjectBox';
import './ProjectsPage.css';

const ProjectsPage = () => {
    
  const projects = [
    { title: "Project One", imageUrl: "/path-to-your-image.jpg", githubUrl: "https://github.com/hasan-kayan/MeshSubtractor3D" },
    { title: "Project Two", imageUrl: "/path-to-your-image.jpg", githubUrl: "https://github.com/your-username/project-two" },
    { title: "Project Three", imageUrl: "/path-to-your-image.jpg", githubUrl: "https://github.com/your-username/project-three" },
    { title: "Project Four", imageUrl: "/path-to-your-image.jpg", githubUrl: "https://github.com/your-username/project-four" }
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
