import React, { useState } from 'react';
import styles from './Home.module.css';
import Logo from '../../components/Logo/Logo';
import Menu from '../../components/Menu/Menu';
import Content from '../../components/Content/Content';
import Modal from '../../components/Modal/Modal';

const Home: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [showSection1Modal, setShowSection1Modal] = useState(false);

  // This function would be passed down to children if needed
  // Currently, Menu component handles navigation directly
  const handleSectionChange = (section: string) => {
    setActiveSection(section);
  };

  return (
    <div className={styles.container}>
      <Logo />
      <Menu onSection1Click={() => setShowSection1Modal(true)} />
      {activeSection && <Content activeSection={activeSection} />}
      
      {showSection1Modal && (
        <Modal onClose={() => setShowSection1Modal(false)}>
          <h2>Section 1 Menu</h2>
          <div className={styles.buttons}>
            <button className={styles.button}>Placeholder Button A</button>
            <button className={styles.button}>Placeholder Button B</button>
            <button className={styles.button}>Placeholder Button C</button>
            <button className={styles.button}>Placeholder Button D</button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Home;