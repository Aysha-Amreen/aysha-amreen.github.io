import React from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/ProjectCard.module.css';

function ProjectCard({ title, image, description, features, techStack, projectSlug }) {
  const router = useRouter();

  const handleViewDetails = () => {
    router.push(`/projects/${projectSlug}`);
  };

  return (
    <div className={styles.projectCard}>
      {/* Title Section */}
      <h2 className={styles.projectTitle}>{title}</h2>

      {/* Project Image */}
      <img src={image} alt={`${title} Preview`} className={styles.projectImage} />

      {/* Description Section */}
      <p className={styles.projectDescription}>{description}</p>

      <div className={styles.divider}></div>

      {/* Features and Tech Stack Section */}
      <div className={styles.middleSection}>
        <div className={styles.featuresColumn}>
          <h4>Key Features</h4>
          <ul>
            {features.map((feature, index) => (
              <li key={index} className={styles.featureItem}>{feature}</li>
            ))}
          </ul>
        </div>
        <div className={styles.verticalLine}></div>
        <div className={styles.techStackColumn}>
          <h4>Tech Stack</h4>
          <div className={styles.techBadges}>
            {techStack.map((tech, index) => (
              <span key={index} className={styles.badge}>{tech}</span>
            ))}
          </div>
        </div>
      </div>

      <button className={styles.ctaButton} onClick={handleViewDetails}>
        View Details
      </button>
    </div>
  );
}

export default ProjectCard;
