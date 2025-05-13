import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import { ModalProvider } from './features/modals/utils/ModalContext';

const App: React.FC = () => {
  return (
    <ModalProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ModalProvider>
  );
};

export default App;