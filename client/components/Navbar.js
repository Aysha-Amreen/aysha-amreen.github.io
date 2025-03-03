import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Navbar.module.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (route) => {
    router.push(route);
    setIsOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      {/* Logo Section */}
      <div className={styles.logoContainer}>
        <img src="/my-logo.png" alt="Logo" className={styles.logoImage} />
        <span className={styles.logoText}>Aysha Amreen Archives</span>
      </div>

      <div className={styles.rightSection}>
        {/* Always Visible Links */}
        <span className={styles.bevelTab} onClick={() => handleNavigation('/')}>Home</span>
        <div className={styles.separator}></div>
        <span className={styles.bevelTab} onClick={() => handleNavigation('/about')}>About</span>
        <div className={styles.separator}></div>
        <span className={styles.bevelTab} onClick={() => handleNavigation('/projects')}>Projects</span>
        <div className={styles.separator}></div>
        <span className={styles.bevelTab} onClick={() => handleNavigation('/contact')}>Contact</span>

        {/* Hamburger Menu */}
        <div className={styles.hamburger} onClick={toggleMenu}>
          <img
            src="/hamburger.png"
            alt="Menu Icon"
            className={`${styles['hamburger-icon']} ${isOpen ? styles.open : ''}`}
          />
        </div>
      </div>
      <ul className={`${styles['nav-links']} ${isOpen ? styles.show : ''}`}>
        <li onClick={() => handleNavigation('/')}>Home</li>
        <li onClick={() => handleNavigation('/about')}>About</li>
        <li onClick={() => handleNavigation('/projects')}>Projects</li>
        <li onClick={() => handleNavigation('/contact')}>Contact</li>
        <li onClick={() => handleNavigation('/experience')}>Experience</li>
        <li onClick={() => handleNavigation('/education')}>Education</li>
        <li onClick={() => handleNavigation('/skills')}>Skills</li>
      </ul>
    </nav>
  );
}

export default Navbar;
