import React from 'react';
import styles from './Modal.module.css';

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
  compact?: boolean; // New prop for compact modal style
}

const Modal: React.FC<ModalProps> = ({ onClose, children, compact = false }) => (
  <div className={styles.overlay} onClick={onClose}>
    <div className={compact ? styles.compactModal : styles.modal} onClick={e => e.stopPropagation()}>
      <button className={styles.closeButton} onClick={onClose}>×</button>
      {children}
    </div>
  </div>
);

export default Modal;