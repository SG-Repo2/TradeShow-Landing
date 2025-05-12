import React, { useEffect } from 'react';
import styles from './Modal.module.css';

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
  compact?: boolean;
  title?: string;
}

const Modal: React.FC<ModalProps> = ({ onClose, children, compact = false, title }) => {
  // Handle ESC key for closing modal
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleEsc);
    
    // Prevent body scrolling
    document.body.style.overflow = 'hidden';
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  // Close modal when clicking overlay
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className={styles.overlay} 
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? "modal-title" : undefined}
    >
      <div 
        className={compact ? styles.compactModal : styles.modal} 
        onClick={e => e.stopPropagation()}
      >
        {title && <h2 id="modal-title" className={styles.modalTitle}>{title}</h2>}
        <button 
          className={styles.closeButton} 
          onClick={onClose}
          aria-label="Close modal"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;