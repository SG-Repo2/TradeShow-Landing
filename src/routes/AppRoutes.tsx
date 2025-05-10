import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Careers from '../pages/Careers/Careers';
import Impel from '../pages/Impel/Impel';
import OmanTablet from '../pages/OmanTablet/OmanTablet';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/impel" element={<Impel />} />
      <Route path="/oman-tablet" element={<OmanTablet />} />
    </Routes>
  );
};

export default AppRoutes;