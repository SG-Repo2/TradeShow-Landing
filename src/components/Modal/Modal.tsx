import React from 'react';
import styles from './Modal.module.css';

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
  // later add props for button labels & callbacks
}

const Modal: React.FC<ModalProps> = ({ onClose, children }) => (
  <div className={styles.overlay} onClick={onClose}>
    <div className={styles.modal} onClick={e => e.stopPropagation()}>
      <button className={styles.closeButton} onClick={onClose}>×</button>
      {children}
    </div>
  </div>
);

export default Modal;