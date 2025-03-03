import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/ProjectCard.module.css';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000';

function ProjectCard({ projectSlug }) {
  const router = useRouter();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/projects/${projectSlug}`)
      .then(response => {
        if (!response.ok) throw new Error('Failed to fetch');
        return response.json();
      })
      .then(data => {
        // Prefix API_BASE_URL to assets
        data.image = `${API_BASE_URL}${data['card-image']}`;
        data.features = data.features.slice(0, 3); // Show only first 3 features
        data.technologies = data.technologies.slice(0, 5); // Show only first 5 tech stack

        setProject(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching project data:', error);
        setError(true);
        setLoading(false);
      });
  }, [projectSlug]);

  const handleViewDetails = () => {
    router.push(`/projects/${projectSlug}`);
  };

  if (loading) return <p>Loading...</p>;
  if (error || !project) return <p>Project not found.</p>;

  return (
    <div className={styles.projectCard}>
      {/* Title Section */}
      <h2 className={styles.projectTitle}>{project.title}</h2>

      {/* Project Image */}
      <img src={project.image} alt={`${project.title} Preview`} className={styles.projectImage} />

      {/* Description Section */}
      <p className={styles.projectDescription}>{project['card-description']}</p>

      <div className={styles.divider}></div>

      {/* Features and Tech Stack Section */}
      <div className={styles.middleSection}>
        <div className={styles.featuresColumn}>
          <h4>Key Features</h4>
          <ul>
            {project.features?.map((feature, index) => (
              <li key={index} className={styles.featureItem}>{feature}</li>
            ))}
          </ul>
        </div>
        <div className={styles.verticalLine}></div>
        <div className={styles.techStackColumn}>
          <h4>Tech Stack</h4>
          <div className={styles.techBadges}>
            {project.technologies.map((tech, index) => (
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
