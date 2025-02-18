import React from 'react';
import styles from '../../styles/onlineCafe.module.css';

function ViewCodeButton({ repoUrl }) {
  return (
    <button
      className={styles.viewCodeButton}
      onClick={() => window.open(repoUrl, '_blank')}
    >
      VIEW CODE
    </button>
  );
}

export default ViewCodeButton;
