import React from 'react';
import styles from '../styles/Footer.module.css'; 

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© 2024 MyPortfolio. All rights reserved.</p>
      <div className={styles.socialIcons}>  
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
      </div>
    </footer>
  );
}

export default Footer;
