import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Importing pages
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import CreateAccountPage from './pages/CreateAccountPage';
import Home from './pages/Home';
import Transactions from './pages/Transactions';
import AccountDetails from './pages/AccountDetails';

const RoutesConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/create-account" element={<CreateAccountPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="/account-details" element={<AccountDetails />} />
    </Routes>
  );
};

export default RoutesConfig;
