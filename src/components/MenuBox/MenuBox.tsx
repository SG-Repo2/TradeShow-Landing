import React from 'react';
import styles from './MenuBox.module.css';

interface MenuBoxProps {
  target: string;
  onClick: (target: string) => void;
  children: React.ReactNode;
  isFlashing?: boolean;
  ariaLabel?: string;
}

const MenuBox: React.FC<MenuBoxProps> = ({ 
  target, 
  onClick, 
  children, 
  isFlashing = false, 
  ariaLabel 
}) => {
  const handleClick = () => {
    onClick(target);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick(target);
    }
  };

  return (
    <div 
      className={`${styles.box} ${isFlashing ? styles.flashingText : ''}`} 
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      data-target={target}
      role="button"
      tabIndex={0}
      aria-label={ariaLabel}
    >
      {children}
    </div>
  );
};

export default MenuBox;