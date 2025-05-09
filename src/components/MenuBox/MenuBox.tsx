import React from 'react';
import styles from './MenuBox.module.css';

interface MenuBoxProps {
  target: string;
  onClick: (target: string) => void;
  children: React.ReactNode;
  isFlashing?: boolean;
}

const MenuBox: React.FC<MenuBoxProps> = ({ target, onClick, children, isFlashing = false }) => {
  const handleClick = () => {
    onClick(target);
  };

  return (
    <div 
      className={`${styles.box} ${isFlashing ? styles.flashingText : ''}`} 
      onClick={handleClick}
      data-target={target}
    >
      {children}
    </div>
  );
};

export default MenuBox;