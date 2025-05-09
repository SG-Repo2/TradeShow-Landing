import React from 'react';
import styles from './Content.module.css';

interface ContentProps {
  activeSection: string | null;
}

const Content: React.FC<ContentProps> = ({ activeSection }) => {
  if (!activeSection) return null;

  return (
    <div className={styles.content}>
      <div 
        id="section1" 
        className={`${styles.contentSection} ${activeSection === 'section1' ? styles.visible : ''}`}
      >
        Content for Knowledge Library
      </div>
      <div 
        id="section2" 
        className={`${styles.contentSection} ${activeSection === 'section2' ? styles.visible : ''}`}
      >
        Content for Interactive Files
      </div>
      <div 
        id="section3" 
        className={`${styles.contentSection} ${activeSection === 'section3' ? styles.visible : ''}`}
      >
        Content for Join Us Form
      </div>
      <div 
        id="section4" 
        className={`${styles.contentSection} ${activeSection === 'section4' ? styles.visible : ''}`}
      >
        Content for Demo
      </div>
      <div 
        id="section5" 
        className={`${styles.contentSection} ${activeSection === 'section5' ? styles.visible : ''}`}
      >
        Content for Static Page 1
      </div>
      <div 
        id="section6" 
        className={`${styles.contentSection} ${activeSection === 'section6' ? styles.visible : ''}`}
      >
        Content for Static Page 2
      </div>
    </div>
  );
};

export default Content;