import React from 'react';
import styles from '../styles/Gear.module.css';
import { useRouter } from 'next/router';

function Gear({ heading, route }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(route);
  };

  return (
    <div className={styles['gear-container']}>
      <h3>{heading}</h3>
      <button className={styles['gear-button']} onClick={handleClick}>
        <img src="/gear-icon.png" alt="Gear Icon" className={styles['gear-icon']} />
      </button>
    </div>
  );
}

export default Gear;
