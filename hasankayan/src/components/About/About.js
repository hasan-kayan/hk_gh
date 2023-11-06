import React from 'react';
import { motion } from 'framer-motion';
import './About.css'; // Make sure your About.css is updated accordingly

const About = () => {
  return (
    <motion.div
      className="about-container"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0, transition: { delay: 0.1, duration: 0.5 } }}
    >
      <h1>Hasan Kayan</h1>
      <p>I am a software engineer with experience in hardware design, system design, and software development. Currently completing my Bachelor's Degree in Electrical and Electronics Engineering at Gazi University, I am involved in web development and backend system design.</p>
      
      <section className="education">
        <h2>Education</h2>
        <p>Gazi University, Faculty of Engineering, Department of Electrical and Electronics Engineering - Expected graduation: January 2024</p>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>Web Development</li>
          <li>Server-Side Management</li>
          <li>Database Management</li>
          <li>API Design and Integration</li>
          <li>Cloud Services (AWS)</li>
          <li>Microservice Architecture and Kubernetes Management</li>
          <li>Programming Languages: C/C++, Python, Golang, JavaScript, C#</li>
        </ul>
      </section>

      <section className="experience">
        <h2>Work Experience</h2>
        <div>
          <h3>Software & RPA Developer - Linktera Robotics</h3>
          <h4> Start Date: April 2023 - End Date: September 2023 </h4>
          <p>Developing UiPath Activities using .NET Framework, API Development and Management, Database Management.</p>
        </div>
        <div>
          <h3>Intern Engineer - Masttech Electromechanical Systems</h3>
          <h4>July 2022- Agust 2022</h4>
          <p>PCB design, system simulations with MATLAB, Python development for power systems.</p>
        </div>
        <div>
          <h3>Software Engineer - Poliark IT</h3>
          <h4>September 2023 - Currently</h4>
          <p>Specializing in backend solutions, microservices, and Kubernetes clusters management.</p>
        </div>
        <br></br>
        Here you can download my CV 
      </section>

      <a href={`${process.env.PUBLIC_URL}/Hasan-Kayan.pdf`} download="Hasan-Kayan.pdf" className="download-button">
        Download CV
      </a>
    </motion.div>
  );
};

export default About;
