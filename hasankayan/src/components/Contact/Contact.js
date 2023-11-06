// src/components/ContactPage.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css'; // Make sure to create a corresponding CSS file
import AWS from 'aws-sdk';

// Note: In a production environment, never expose your credentials
// Always use environment variables or other configuration methods to handle sensitive information securely
// This code is for demonstration purposes only
AWS.config.update({
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
  region: process.env.REACT_APP_AWS_REGION,
});

const s3 = new AWS.S3();

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Convert form data to JSON
    const formDataAsJSON = JSON.stringify(formData);

    // Set up parameters for the S3 upload
    const params = {
      Bucket: process.env.REACT_APP_S3_BUCKET_NAME,
      Key: `contact-messages/${formData.name}-${Date.now()}.json`,
      Body: formDataAsJSON,
      ContentType: 'application/json',
    };

    // Use S3 ManagedUpload to perform the file upload
    const upload = new AWS.S3.ManagedUpload({ params });
    
    upload.promise()
      .then(data => {
        console.log("Successfully uploaded data to S3", data);
        // Handle successful upload here, like resetting the form or notifying the user
      })
      .catch(err => {
        console.error("There was an error uploading the data: ", err.message);
        // Handle the upload error here
      });
  };

  return (
    <motion.div className="contact-container">
      <h1>Contact Us</h1>
      <motion.form onSubmit={handleSubmit} className="contact-form">
        {/* Name Input */}
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        
        {/* Surname Input */}
        <div className="form-group">
          <label htmlFor="surname">Surname</label>
          <input
            type="text"
            id="surname"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email Input */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Message Textarea */}
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="send-button">Send</button>
      </motion.form>
    </motion.div>
  );
};

export default ContactPage;
