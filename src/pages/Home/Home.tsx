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
import impelLogo from '../../assets/impelLogo.png';
import hydroUBlue from '../../assets/hydroUBlue.png';
import centaurLogo from '../../assets/centaurLogo.png';

const Home: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  
  // State for all four modals
  const [showSection1Modal, setShowSection1Modal] = useState(false);
  const [showSection2Modal, setShowSection2Modal] = useState(false);
  const [showSection3Modal, setShowSection3Modal] = useState(false);
  const [showSection4Modal, setShowSection4Modal] = useState(false);
  
  const navigate = useNavigate();

  const handleOmanTabletAppClick = () => {
    navigate('/oman-tablet');
  };

  return (
    <div className={styles.container}>
      <Logo />
      <Menu 
        onSection1Click={() => setShowSection1Modal(true)}
        onSection2Click={() => setShowSection2Modal(true)}
        onSection3Click={() => setShowSection3Modal(true)}
        onSection4Click={() => setShowSection4Modal(true)}
      />
      {activeSection && <Content activeSection={activeSection} />}

      {/* Section 1 Modal */}
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

      {/* Section 2 Modal */}
      {showSection2Modal && (
        <Modal onClose={() => setShowSection2Modal(false)}>
          <h2>Interactive Platform</h2>
          <img src={impelLogo} alt="Impel Platform" className={styles.modalImage} />
          <p>Access interactive maintenance procedures and documentation...</p>
          <div className={styles.buttons}>
            <button className={styles.button} onClick={() => navigate('/impel')}>
              Launch IMPEL
            </button>
            <button className={styles.button}>
              Browse Catalog
            </button>
            <button className={styles.button}>
              Training Materials
            </button>
            <button className={styles.button}>
              Request Support
            </button>
          </div>
        </Modal>
      )}

      {/* Section 3 Modal */}
      {showSection3Modal && (
        <Modal onClose={() => setShowSection3Modal(false)}>
          <h2>Hydro University</h2>
          <img src={hydroUBlue} alt="Hydro University" className={styles.modalImage} />
          <p>Access training materials and certification courses...</p>
          <div className={styles.buttons}>
            <button className={styles.button} onClick={() => window.location.href = 'https://external.university.hydroinc.com/index'}>
              Access Courses
            </button>
            <button className={styles.button}>
              View Certifications
            </button>
            <button className={styles.button}>
              Learning Paths
            </button>
            <button className={styles.button}>
              Request Training
            </button>
          </div>
        </Modal>
      )}

      {/* Section 4 Modal */}
      {showSection4Modal && (
        <Modal onClose={() => setShowSection4Modal(false)}>
          <h2>Centaur Platform</h2>
          <img src={centaurLogo} alt="Centaur" className={styles.modalImage} />
          <p>Access advanced diagnostics and monitoring tools...</p>
          <div className={styles.buttons}>
            <button className={styles.button} onClick={() => window.location.href = 'https://hydroinc.com/centaur-copy/'}>
              Launch Centaur
            </button>
            <button className={styles.button}>
              View Reports
            </button>
            <button className={styles.button}>
              System Status
            </button>
            <button className={styles.button}>
              Configuration
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Home;