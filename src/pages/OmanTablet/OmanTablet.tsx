import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './OmanTablet.module.css';

const OmanTablet: React.FC = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className={styles.container}>
      <button className={styles.backButton} onClick={handleBack}>
        ← Back to Home
      </button>
      <iframe 
        src="/oman-tablet-app/index.html" 
        className={styles.iframe} 
        title="White Metal Bearing Refurbishment"
      />
    </div>
  );
};

export default OmanTablet;