import React from 'react';
import { FaFilePdf, FaFileImage, FaFileAlt } from 'react-icons/fa';
import styles from '../../styles/FeaturesTechSection.module.css';

const fileTypeIcons = {
  pdf: <FaFilePdf />,
  png: <FaFileImage />,
  jpg: <FaFileImage />,
  default: <FaFileAlt />
};

function FeaturesTechSection({ technologies, features, projectFiles }) {
  return (
    <div className={styles.featuresTechSection}>
      {/* Features Section */}
      <div className={styles.features}>
        <h2 className={styles.subheading}>Features</h2>
        <ul>
          {features.map((feature, index) => (
            <li key={index} className={styles.featureItem}>{feature}</li>
          ))}
        </ul>
      </div>

      <div className={styles.verticalLine}></div>

      {/* Technology Section */}
      <div className={styles.technology}>
        <h2 className={styles.subheading}>Technology</h2>
        <div className={styles.techBadges}>
          {technologies.map((tech, index) => (
            <span key={index} className={styles.badge}>{tech}</span>
          ))}
        </div>

        {/* File icons section */}
        <div className={styles.fileIcons}>
          {projectFiles.map((file, index) => {
            const fileExtension = file.name.split('.').pop().toLowerCase();
            const icon = fileTypeIcons[fileExtension] || fileTypeIcons['default'];

            return (
              <a key={index} href={file.url} target="_blank" rel="noopener noreferrer" className={styles.fileLink}>
                <div className={styles.fileIcon}>{icon}</div>
                <p>{file.name}</p>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FeaturesTechSection;
