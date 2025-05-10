// src/components/Menu/Menu.tsx
import React from 'react';
import styles from './Menu.module.css';
import MenuBox from '../MenuBox/MenuBox';
import impelLogo from '../../assets/impelLogo.png';
import hydroUBlue from '../../assets/hydroUBlue.png';
import centaurLogo from '../../assets/centaurLogo.png';
import energyLogo from '../../assets/energyLogo.png';
import { useNavigate } from 'react-router-dom';
import coleherne from '../../assets/coleherneLogo.png';
import careers from '../../assets/careers.png';

interface MenuProps {
  onSection1Click?: () => void;
  onSection2Click?: () => void; 
  onSection3Click?: () => void;
  onSection4Click?: () => void;
}

const Menu: React.FC<MenuProps> = ({ 
  onSection1Click,
  onSection2Click,
  onSection3Click,
  onSection4Click
}) => {
  const navigate = useNavigate();

  const handleBoxClick = (target: string) => {
    switch (target) {
      case 'section1':
        if (onSection1Click) {
          onSection1Click();
        } else {
          window.location.href = '/oman-tablet-app/index.html';
        }
        break;
      case 'section2':
        if (onSection2Click) {
          onSection2Click();
        } else {
          navigate('/impel');
        }
        break;
      case 'section3':
        if (onSection3Click) {
          onSection3Click();
        } else {
          window.location.href = 'https://external.university.hydroinc.com/index';
        }
        break;
      case 'section4':
        if (onSection4Click) {
          onSection4Click();
        } else {
          window.location.href = 'https://hydroinc.com/centaur-copy/';
        }
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
        <img src={coleherne} alt="Hydro University Logo" className={styles.overlayImage} />
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
        <img src={careers} alt="Careers" className={styles.overlayImage} />
      </MenuBox>
      <MenuBox target="section6" onClick={handleBoxClick}>
        <img src={energyLogo} alt="Energy Edge" className={styles.overlayImage} />
      </MenuBox>
    </div>
  );
};

export default Menu;