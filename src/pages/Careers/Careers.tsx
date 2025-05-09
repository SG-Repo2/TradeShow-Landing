import React from 'react';
import styles from './Careers.module.css';
import tradeShowQR from '../../assets/tradeShowQR.png';
import { useNavigate } from 'react-router-dom';

const Careers: React.FC = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className={styles.container}>
      <h1>You've got big dreams. We've got big opportunities.</h1>
      <p>
        Join the largest independent pump rebuilder in the world. Become part of the new generation 
        of industry experts who keep vital systems operating at maximum efficiency and peak reliability. 
        Pursue a challenging and rewarding career where you can make a difference.
      </p>
      <img src={tradeShowQR} alt="QR Code" />
      <button className={styles.backButton} onClick={handleBack}>
        Back to Home
      </button>
    </div>
  );
};

export default Careers;