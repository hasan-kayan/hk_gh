// src/components/HomePage.js

import React from 'react';
import { motion } from 'framer-motion';
import './HomePage.css'; // Import your CSS styles
import profilePic from './unnamed.jpg'; // Assuming your image is named 'profile.jpg'


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

      <section className="about-me">
        {/* ... */}
      </section>

      <section className="my-work">
        {/* ... */}
      </section>

      <section className="contact-me">
        {/* ... */}
      </section>

      {/* Add more sections as needed */}
    </motion.div>
  );
};

export default HomePage;
