// src/components/HomePage.js

import React from 'react';
import { motion } from 'framer-motion';
import './HomePage.css'; // Import your CSS styles
import profilePic from './unnamed.jpg'; // Assuming your image is named 'profile.jpg'
import DesignWeb from './InteractiveDesign.png'; // Update this path if necessary

const HomePage = () => {
  // Function to generate dynamic greeting based on time of day
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  // Variants for animations using framer-motion
  const containerVariants = {
    hidden: { 
      opacity: 0,
      y: 20 
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { delay: 0.3, duration: 0.6 }
    }
  };

  const sectionVariants = {
    offscreen: {
      y: 50,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.5
      }
    }
  };

  return (
    
    <motion.div 
    
      className="homepage"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.header 
        className="hero"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          {getGreeting()}, I'm Hasan Kayan
        </motion.h1>
        <motion.p
          className="tagline"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Full Stack Developer | Electronic Engineer | System Designer 
        </motion.p>
        <motion.img
            src={profilePic}
            alt="Hasan Kayan"
            className="profile-pic"
            animate={{ rotate: 360 }}
            transition={{
              loop: Infinity,
              ease: "linear",
              duration: 2,
            }}
        />
      </motion.header>

      <motion.section
        className="about-me"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        Hi, I am a dedicated Full Stack web developer who is also an enthusiast for learning and improving personal skills. 
        Here you can find my projects, CV, and a contact form to work together. 
        You can also visit my other profiles...
      </motion.section>

      <motion.section
        className="my-work"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="my-work-content">
          <img src={DesignWeb} alt="My Work" className="my-work-photo" />
          <div className="my-work-text">
            <h2>Projects and Experience</h2>
            <p>
              Here's a snapshot of my recent projects. I've worked on a range of technologies
              from front-end frameworks like React to back-end systems using Node.js and Python.
            </p>
            {/* Add more text or elements as needed */}
          </div>
        </div>
      </motion.section>

      <motion.section
        className="contact-me"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="contact-content">
          <div className="contact-text">
            <h2>Get in Touch</h2>
            <p>
              Interested in collaborating or discussing a project? Feel free to reach out.
              I'm always open to discussing new projects and creative ideas.
            </p>
            {/* Add more text or elements as needed */}
          </div>
          <img src={DesignWeb} alt="Contact" className="contact-photo" />
        </div>
      </motion.section>

      {/* Add more sections as needed */}
    </motion.div>
  );
};

export default HomePage;
