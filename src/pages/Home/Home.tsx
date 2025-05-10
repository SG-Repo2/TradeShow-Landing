// src/pages/Home/Home.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.css';
import Logo from '../../components/Logo/Logo';
import Menu from '../../components/Menu/Menu';
import Content from '../../components/Content/Content';
import Modal from '../../components/Modal/Modal';

// Import correct images from assets
import coleherneLogo from '../../assets/coleherneLogo.png';
import careers from '../../assets/careers.png';
import energyLogo from '../../assets/energyLogo.png';
import tradeShowQR from '../../assets/tradeShowQR.png';
import centaurEcosystem from '../../assets/centaurEcosystem.png';
import hydroULogo from '../../assets/hydroU.png';

const Home: React.FC = () => {
  const [activeSection] = useState<string | null>(null);
  
  // State for all modals
  const [showSection1Modal, setShowSection1Modal] = useState(false);
  const [showSection3Modal, setShowSection3Modal] = useState(false);
  const [showSection4Modal, setShowSection4Modal] = useState(false);
  const [showSection5Modal, setShowSection5Modal] = useState(false);
  const [showSection6Modal, setShowSection6Modal] = useState(false);
  
  const navigate = useNavigate();

  const handleOmanTabletAppClick = () => {
    navigate('/oman-tablet');
  };

  return (
    <div className={styles.container}>
      <Logo />
      <Menu 
        onSection1Click={() => setShowSection1Modal(true)}
        onSection2Click={() => navigate('/impel')}
        onSection3Click={() => setShowSection3Modal(true)}
        onSection4Click={() => setShowSection4Modal(true)}
        onSection5Click={() => setShowSection5Modal(true)}
        onSection6Click={() => setShowSection6Modal(true)}
      />
      {activeSection && <Content activeSection={activeSection} />}

      {/* Section 1 Modal - Knowledge Library (Menu Modal) */}
      {showSection1Modal && (
        <Modal onClose={() => setShowSection1Modal(false)}>
          <h2>Knowledge Library</h2>
          <img src={coleherneLogo} alt="Knowledge Library" className={styles.modalImage} />
          <p>Quickly search our entire knowledge base...</p>
          <div className={styles.buttons}>
            <button className={styles.button} onClick={handleOmanTabletAppClick}>
              Search Library
            </button>
            <button className={styles.button}>
              Filter by Topic
            </button>
            <button className={styles.button}>
              Download PDF
            </button>
            <button className={styles.button}>
              Watch Tutorial
            </button>
          </div>
        </Modal>
      )}

      {/* Section 3 Modal - Hydro University (Compact Modal with QR) */}
      {showSection3Modal && (
        <Modal onClose={() => setShowSection3Modal(false)} compact={true}>
          <h2>Hydro University</h2>
          
          {/* Primary focus on the Hydro University logo */}
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
        </Modal>
      )}

      {/* Section 4 Modal - Centaur Platform (Compact Modal with QR) */}
      {showSection4Modal && (
        <Modal onClose={() => setShowSection4Modal(false)} compact={true}>
          <h2>Centaur Platform</h2>
          
          {/* Primary focus on the ecosystem diagram */}
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
        </Modal>
      )}

      {/* Section 5 Modal - Careers (Compact Modal with QR) */}
      {showSection5Modal && (
        <Modal onClose={() => setShowSection5Modal(false)} compact={true}>
          <h2>Careers</h2>
          <div className={styles.modalImages}>
            <img src={careers} alt="Careers" className={styles.contentImage} />
          </div>
          <p>Explore career opportunities with Hydro</p>
          <div className={styles.qrCodeContainer}>
            <img src={tradeShowQR} alt="QR Code" className={styles.qrImage} />
            <p>Scan to view job openings</p>
          </div>
        </Modal>
      )}

      {/* Section 6 Modal - Energy Edge (Compact Modal with QR) */}
      {showSection6Modal && (
        <Modal onClose={() => setShowSection6Modal(false)} compact={true}>
          <h2>Energy Edge</h2>
          <div className={styles.modalImages}>
            <img src={energyLogo} alt="Energy Edge" className={styles.contentImage} />
          </div>
          <p>Learn about our energy efficiency solutions</p>
          <div className={styles.qrCodeContainer}>
            <img src={tradeShowQR} alt="QR Code" className={styles.qrImage} />
            <p>Scan for Energy Edge information</p>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Home;