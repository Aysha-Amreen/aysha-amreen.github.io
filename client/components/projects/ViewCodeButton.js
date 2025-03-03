import React from 'react';
import styles from '../../styles/ViewCodeButton.module.css';

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
