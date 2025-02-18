import React, { useState } from 'react';
import styles from '../styles/TimelineItem.module.css';

function TimelineItem({ title, date, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${styles.item} ${isOpen ? styles.open : ''}`}>
      <div className={styles.header} onClick={toggleOpen}>
        <h3>{title}</h3>
        <span>{date}</span>
      </div>
      {isOpen && <div className={styles.content}>{children}</div>}
    </div>
  );
}

export default TimelineItem;
