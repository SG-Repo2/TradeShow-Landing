import { useContext } from 'react';
import { ModalContext } from '../utils/ModalContext';

export const useModalState = (id: string) => {
  const { activeModal, openModal, closeModal } = useContext(ModalContext);
  return {
    isOpen: activeModal === id,
    open: () => openModal(id),
    close: closeModal
  };
};