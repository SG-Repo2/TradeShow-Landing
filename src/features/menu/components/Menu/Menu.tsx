import React from 'react';
import styles from './Menu.module.css';
import MenuBox from '../MenuBox/MenuBox';
import { useNavigate } from 'react-router-dom';
import { 
  coleherneLogo, 
  impelLogo, 
  hydroUBlue, 
  centaurLogo, 
  coPilotLogo, 
  energyLogo 
} from '../../../../assets';

interface MenuProps {
  onSection1Click?: () => void;
  onSection2Click?: () => void; 
  onSection3Click?: () => void;
  onSection4Click?: () => void;
  onSection5Click?: () => void;
  onSection6Click?: () => void;
}

const Menu: React.FC<MenuProps> = ({ 
  onSection1Click,
  onSection2Click,
  onSection3Click,
  onSection4Click,
  onSection5Click,
  onSection6Click
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
        if (onSection5Click) {
          onSection5Click();
        } else {
          console.log('Opening CoPilot modal');
        }
        break;
      case 'section6':
        if (onSection6Click) {
          onSection6Click();
        } else {
          window.location.href = 'https://marketing.hydroinc.com/energyedge';
        }
        break;
      default:
        break;
    }
  };

  const menuItems = [
    {
      id: 'section1',
      image: coleherneLogo,
      alt: 'Knowledge Library',
      isFlashing: false,
      ariaLabel: 'Open Knowledge Library'
    },
    {
      id: 'section2',
      image: impelLogo,
      alt: 'Impel',
      isFlashing: true,
      ariaLabel: 'Visit Impel Interactive Platform'
    },
    {
      id: 'section3',
      image: hydroUBlue,
      alt: 'Hydro University',
      isFlashing: false,
      ariaLabel: 'Learn about Hydro University'
    },
    {
      id: 'section4',
      image: centaurLogo,
      alt: 'Centaur',
      isFlashing: false,
      ariaLabel: 'Explore Centaur Platform'
    },
    {
      id: 'section5',
      image: coPilotLogo,
      alt: 'Hydro CoPilot',
      isFlashing: false,
      ariaLabel: 'Discover Hydro CoPilot'
    },
    {
      id: 'section6',
      image: energyLogo,
      alt: 'Energy Edge',
      isFlashing: false,
      ariaLabel: 'Learn about Energy Edge'
    }
  ];

  return (
    <nav className={styles.menu} aria-label="Main Navigation">
      {menuItems.map(item => (
        <MenuBox 
          key={item.id}
          target={item.id} 
          onClick={handleBoxClick} 
          isFlashing={item.isFlashing}
          ariaLabel={item.ariaLabel}
        >
          <img src={item.image} alt={item.alt} className={styles.overlayImage} />
        </MenuBox>
      ))}
    </nav>
  );
};

export default Menu;