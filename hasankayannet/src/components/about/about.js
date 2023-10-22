import React from 'react';
import './about.css'; // Import your CSS file for styling

function AboutMe() {
  return (

    <div className="about-me">
      <h2>About Me</h2>
      <p>
        Hello, I'm [Your Name], a versatile software engineer with a passion for innovation and problem-solving.
        Throughout my career journey, I've had the privilege of exploring various facets of technology, from hardware design to web development,
        and even delving into the fascinating world of Robotic Process Automation (RPA). Let me take you on a journey through my experiences and skills.
      </p>

      <h3>Education</h3>
      <p>
        I'm currently pursuing my Bachelor's degree in Electrical and Electronics Engineering at Gazi University, with an expected graduation date in January 2024.
        My academic journey has equipped me with a strong foundation in electronics and system design, which I've seamlessly integrated into my professional work.
      </p>

      <h3>Skills</h3>
      {/* Include your technical skills, programming languages, and databases here */}

      <h3>Work Experience</h3>
      {/* Include your work experience details here */}

      <h2>Conclusion</h2>
      <p>
        My diverse experiences, technical expertise, and commitment to delivering high-quality solutions make me a valuable asset in the world of technology.
        I thrive on challenges, continuously learning and innovating to create efficient and scalable solutions.
      </p>

      <p>
        I look forward to new opportunities and collaborations that allow me to push the boundaries of technology and contribute to meaningful projects.
        Let's connect and explore the endless possibilities of the digital world together!
      </p>

      {/* Add a download button for the PDF file */}
      <a href="./HasanKayan.pdf" download>
        <button className="download-button">Download PDF Resume</button>
      </a>
    </div>
 
  );
}

export default AboutMe;
