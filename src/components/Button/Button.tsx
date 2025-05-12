import React from 'react';
import styles from './Button.module.css';

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'text';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  ariaLabel?: string;
  fullWidth?: boolean;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  disabled = false,
  ariaLabel,
  fullWidth = false,
  icon
}) => {
  const buttonClasses = [
    styles.button,
    styles[`variant${variant.charAt(0).toUpperCase()}${variant.slice(1)}`],
    styles[`size${size.toUpperCase()}`],
    fullWidth ? styles.fullWidth : '',
    disabled ? styles.disabled : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel || undefined}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
    </button>
  );
};

export default Button;