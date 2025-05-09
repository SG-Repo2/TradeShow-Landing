import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Careers from '../pages/Careers/Careers';
import Impel from '../pages/Impel/Impel';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/impel" element={<Impel />} />
    </Routes>
  );
};

export default AppRoutes;