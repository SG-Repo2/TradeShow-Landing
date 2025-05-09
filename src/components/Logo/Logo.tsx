import React from 'react';
import styles from './Logo.module.css';
import hydroLogo from '../../assets/hydroLogo.gif';

const Logo: React.FC = () => {
  return (
    <div className={styles.logo}>
      <img src={hydroLogo} alt="Hydro Logo" />
    </div>
  );
};

export default Logo;