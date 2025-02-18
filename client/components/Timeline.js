import React from 'react';
import styles from '../styles/Timeline.module.css';

function Timeline({ children }) {
  return <div className={styles.timeline}>{children}</div>;
}

export default Timeline;
