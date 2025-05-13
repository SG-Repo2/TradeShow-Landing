import React, { createContext, useState } from 'react';

interface ModalContextProps {
  activeModal: string | null;
  openModal: (id: string) => void;
  closeModal: () => void;
}

export const ModalContext = createContext<ModalContextProps>({
  activeModal: null,
  openModal: () => {},
  closeModal: () => {}
});

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  return (
    <ModalContext.Provider
      value={{
        activeModal,
        openModal: setActiveModal,
        closeModal: () => setActiveModal(null)
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};