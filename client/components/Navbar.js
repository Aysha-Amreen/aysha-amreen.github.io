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
    setIsOpen(false); // Close the menu after navigation
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Aysha Amreen Archives</div>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <img
          src="/hamburger.png"
          alt="Menu Icon"
          className={`${styles['hamburger-icon']} ${isOpen ? styles.open : ''}`}
        />
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
