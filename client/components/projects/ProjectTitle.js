import React from 'react';
import styles from '../../styles/ProjectTitle.module.css';

function ProjectTitle({ title, description }) {
  return (
    <div>
      <h1 className={styles.projectTitle}>{title}</h1>
      <p className={styles.description}>{description}</p>
    </div>
  );
}

export default ProjectTitle;
