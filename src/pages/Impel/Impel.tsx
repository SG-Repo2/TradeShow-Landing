import React from 'react';
import styles from './Impel.module.css';
import impelLogo from '../../assets/impelLogo.png';

const cardData = [
  {
    key: 'manual',
    title: 'Manual',
    description:
      "The IMPEL manual provides animated step-by-step instructions for installation and maintenance, including embedded tips from Hydro's experienced field service professionals.",
    href: './7060_pump.htm',
  },
  {
    key: 'catalog',
    title: 'Catalog',
    description:
      'The IMPEL catalog is an interactive tool to explore the pump construction and bill of materials.',
    href: './IMPEL_OH1_3196_CT.htm',
  },
];

const Impel: React.FC = () => {
  const handleCardClick = (href: string) => {
    window.location.href = href;
  };

  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <img src={impelLogo} alt="Hydro Logo" className={styles.logoImage} />
      </div>
      <h1 className={styles.title}>IMPEL Interactive Platform</h1>
      <div className={styles.intro}>
        IMPEL is an interactive, digital maintenance platform that replicates pump design
        and installation to clearly illustrate each step of the maintenance procedure.
      </div>
      <div className={styles.menu}>
        {cardData.map((card) => (
          <div
            key={card.key}
            className={styles.card}
            tabIndex={0}
            onClick={() => handleCardClick(card.href)}
            onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && handleCardClick(card.href)}
            role="button"
            aria-label={card.title}
          >
            <div className={styles.cardTitle}>{card.title}</div>
            <div className={styles.cardDescription}>{card.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Impel;