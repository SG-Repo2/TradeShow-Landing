// src/pages/Home/Home.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.css';
import Logo from '../../components/Logo/Logo';
import Menu from '../../components/Menu/Menu';
import Modal from '../../components/Modal/Modal';

// Import from centralized asset directory
import { 
  coPilotLogo,
  energyEdgeWallpaper,
  energyBolt,
  tradeShowQR,
  centaurEcosystem,
  hydroULogo,
  energyBackground,
  coleherneLogo
} from '../../assets';

// Define modal content type for consistent rendering
interface ModalContent {
  id: string;
  title: string;
  content: JSX.Element;
  compact?: boolean;
}

const Home: React.FC = () => {  
  // Single state for active modal instead of separate states
  const [activeModalId, setActiveModalId] = useState<string | null>(null);
  const navigate = useNavigate();

  // Close any open modal
  const handleCloseModal = () => {
    setActiveModalId(null);
  };

  // Definition of all modal contents
  const modalContents: Record<string, ModalContent> = {
    // Section1 modal content with four placeholder buttons
    section1: {
      id: 'section1',
      title: 'Knowledge Library',
      content: (
        <>
          <div className={styles.modalImages}>
            <img src={coleherneLogo} alt="Knowledge Library" className={styles.contentImage} />
          </div>
          <p>Access our comprehensive knowledge library resources</p>
          
          <div className={styles.buttons}>
            <button className={styles.button} onClick={() => navigate('/oman-tablet')}>
              Timeline to Refurbish
            </button>
            <button className={styles.button}>
              Generator BRG
            </button>
            <button className={styles.button}>
              LMAS
            </button>
            <button className={styles.button}>
              About Coleherne
            </button>
          </div>
        </>
      )
    },
    section3: {
      id: 'section3',
      title: 'Hydro University',
      compact: true,
      content: (
        <>
          <div className={styles.ecosystemContainer}>
            <img 
              src={hydroULogo}
              alt="Hydro University" 
              className={styles.ecosystemImage} 
            />
          </div>
          
          <p>With over 50 years of experience in the pump industry, Hydro offers a wide range of technical webinars, e-learning, and in-person seminars for end-users who want to learn more about pumping technology to build their skills within the field.</p>
          
          <div className={styles.qrCodeContainer}>
            <img src={tradeShowQR} alt="QR Code" className={styles.qrImage} />
            <p>Scan to access Hydro University</p>
          </div>
        </>
      )
    },
    section4: {
      id: 'section4',
      title: 'Centaur Platform',
      compact: true,
      content: (
        <>
          <div className={styles.ecosystemContainer}>
            <img 
              src={centaurEcosystem}
              alt="Centaur Ecosystem" 
              className={styles.ecosystemImage} 
            />
          </div>
          
          <p>Complete monitoring solution with sensors, gateways, cloud analytics, and expert analysis for critical rotating equipment.</p>
          
          <div className={styles.qrCodeContainer}>
            <img src={tradeShowQR} alt="QR Code" className={styles.qrImage} />
            <p>Scan to access Centaur Platform</p>
          </div>
        </>
      )
    },
    section5: {
      id: 'section5',
      title: 'Hydro CoPilot',
      compact: true,
      content: (
        <>
          <div className={styles.modalImages}>
            <img src={coPilotLogo} alt="Hydro CoPilot" className={styles.contentImage} />
          </div>
          <p>Introducing Hydro CoPilot – Your AI-Powered Pump Intelligence Assistant</p>
          
          <div className={styles.qrCodeContainer}>
            <img src={tradeShowQR} alt="QR Code" className={styles.qrImage} />
            <p>Scan to access Hydro CoPilot</p>
          </div>
        </>
      )
    },
    section6: {
      id: 'section6',
      title: 'Energy Edge',
      compact: true,
      content: (
        <div className={styles.energyModalContent}>
          <div className={styles.energyBackgroundWrapper}>
            <img                      
              src={energyBackground} 
              alt="Energy background" 
              className={styles.energyBackgroundImage} 
            />
          </div>
          
          <img 
            src={energyEdgeWallpaper} 
            alt="Energy Edge" 
            className={styles.energyEdgeWallpaper} 
          />
          
          <div className={styles.energyContentOverlay}>
            <h2>Energy Edge</h2>
            <p>Hydro Energy Edge combines our comprehensive services into a customized program that identifies opportunities for energy savings and supports end users in achieving their reliability and sustainability
            goals.</p>
            
            <h3>Some of the services available as part of the Hydro Energy Edge program include:</h3>
            <ul className={styles.energyBulletList}>
              <li className={styles.energyBulletItem}>
                <span className={styles.energyBulletIcon} style={{ backgroundImage: `url(${energyBolt})` }}></span>
                <span>Energy Audits Through Field Testing</span>
              </li>
              <li className={styles.energyBulletItem}>
                <span className={styles.energyBulletIcon} style={{ backgroundImage: `url(${energyBolt})` }}></span>
                <span>Comprehensive System Analysis</span>
              </li>
              <li className={styles.energyBulletItem}>
                <span className={styles.energyBulletIcon} style={{ backgroundImage: `url(${energyBolt})` }}></span>
                <span>Hydraulic Modifications to Optimize Performance and Energy Usage</span>
              </li>
              <li className={styles.energyBulletItem}>
                <span className={styles.energyBulletIcon} style={{ backgroundImage: `url(${energyBolt})` }}></span>
                <span>Upgraded Tolerances and Materials</span>
              </li>
              <li className={styles.energyBulletItem}>
                <span className={styles.energyBulletIcon} style={{ backgroundImage: `url(${energyBolt})` }}></span>
                <span>Certified Performance Testing</span>
              </li>
              <li className={styles.energyBulletItem}>
                <span className={styles.energyBulletIcon} style={{ backgroundImage: `url(${energyBolt})` }}></span>
                <span>Continuous Performance and Reliability Monitoring</span>
              </li>
            </ul>
          </div>
          
          <div className={styles.qrCodeContainer}>
            <img src={tradeShowQR} alt="QR Code" className={styles.qrImage} />
            <p>Scan for Energy Edge information</p>
          </div>
        </div>
      )
    }
  };

  return (
    <div className={styles.container}>
      <Logo />
      
      <Menu 
        onSection1Click={() => setActiveModalId('section1')}
        onSection2Click={() => navigate('/impel')}
        onSection3Click={() => setActiveModalId('section3')}
        onSection4Click={() => setActiveModalId('section4')}
        onSection5Click={() => setActiveModalId('section5')}
        onSection6Click={() => setActiveModalId('section6')}
      />

      {/* Single Modal component that changes content based on activeModalId */}
      {activeModalId && modalContents[activeModalId] && (
        <Modal 
          onClose={handleCloseModal}
          compact={modalContents[activeModalId].compact}
          title={modalContents[activeModalId].title}
        >
          {modalContents[activeModalId].content}
        </Modal>
      )}
    </div>
  );
};

export default Home;