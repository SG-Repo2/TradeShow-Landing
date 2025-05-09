import React, { useState } from 'react';
import styles from './Home.module.css';
import Logo from '../../components/Logo/Logo';
import Menu from '../../components/Menu/Menu';
import Content from '../../components/Content/Content';

const Home: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // This function would be passed down to children if needed
  // Currently, Menu component handles navigation directly
  const handleSectionChange = (section: string) => {
    setActiveSection(section);
  };

  return (
    <div className={styles.container}>
      <Logo />
      <Menu />
      {activeSection && <Content activeSection={activeSection} />}
    </div>
  );
};

export default Home;