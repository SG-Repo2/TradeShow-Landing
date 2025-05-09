import React from 'react';
import styles from './Menu.module.css';
import MenuBox from '../MenuBox/MenuBox';
import impelLogo from '../../assets/impelLogo.png';
import hydroUBlue from '../../assets/hydroUBlue.png';
import centaurLogo from '../../assets/centaurLogo.png';
import energyLogo from '../../assets/energyLogo.png';
import { useNavigate } from 'react-router-dom';

const Menu: React.FC = () => {
  const navigate = useNavigate();

  const handleBoxClick = (target: string) => {
    switch (target) {
      case 'section1':
        window.location.href = 'https://marketing.hydroinc.com/power_library';
        break;
      case 'section2':
        navigate('/impel'); // Changed from direct HTML reference to React route
        break;
      case 'section3':
        window.location.href = 'https://external.university.hydroinc.com/index';
        break;
      case 'section4':
        window.location.href = 'https://hydroinc.com/centaur-copy/';
        break;
      case 'section5':
        navigate('/careers');
        break;
      case 'section6':
        window.location.href = 'https://marketing.hydroinc.com/energyedge';
        break;
      default:
        break;
    }
  };

  return (
    <div className={styles.menu}>
      <MenuBox target="section1" onClick={handleBoxClick}>
        Knowledge Library
      </MenuBox>
      <MenuBox target="section2" onClick={handleBoxClick} isFlashing={true}>
        <img src={impelLogo} alt="Impel" className={styles.overlayImage} />
      </MenuBox>
      <MenuBox target="section3" onClick={handleBoxClick}>
        <img src={hydroUBlue} alt="Hydro University Logo" className={styles.overlayImage} />
      </MenuBox>
      <MenuBox target="section4" onClick={handleBoxClick}>
        <img src={centaurLogo} alt="Centaur" className={styles.overlayImage} />
      </MenuBox>
      <MenuBox target="section5" onClick={handleBoxClick}>
        Careers
      </MenuBox>
      <MenuBox target="section6" onClick={handleBoxClick}>
        <img src={energyLogo} alt="Energy Edge" className={styles.overlayImage} />
      </MenuBox>
    </div>
  );
};

export default Menu;