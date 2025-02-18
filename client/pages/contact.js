import React, { useState } from 'react';
import styles from '../styles/contact.module.css'; 

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Handle form submission to send email
  };

  return (
    <div className={styles.contactPage}>
      <div className={styles.phoneScreen}>
        <div className={styles.screenHeader}>
          Contact Me
        </div>
        <div className={styles.contactInfo}>
          <p>Email: example@example.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 Main St, Anytown, USA</p>
        </div>
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            value={formData.name}
            onChange={handleChange} 
            required 
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            value={formData.email}
            onChange={handleChange} 
            required 
          />
          <textarea 
            name="message" 
            placeholder="Your Message" 
            rows="5" 
            value={formData.message}
            onChange={handleChange} 
            required 
          />
          <button type="submit">Send Message</button>
        </form>
        <div className={styles.homeButton}></div>
        <div className={styles.frontCamera}></div>
      </div>
    </div>
  );
}

export default Contact;
