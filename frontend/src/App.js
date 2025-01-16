import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext'; // Ensure this path matches your structure

// Importing pages
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import CreateAccountPage from './pages/CreateAccountPage';
import DashboardPage from './pages/DashboardPage';
import Home from './pages/Home';
import AccountDetails from './pages/AccountDetails';
import Transactions from './pages/Transactions';
import TransferPage from './pages/TransferPage';
import WithdrawPage from './pages/WithdrawPage';
import DepositPage from './pages/DepositPage';
import ScanToPayPage from './pages/ScanToPayPage';

// Importing components
import Footer from './components/Footer';

// Importing styles
import './styles/App.css';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <BrowserRouter>
          <div className="content">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/create-account" element={<CreateAccountPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/home" element={<Home />} />
              <Route path="/account-details" element={<AccountDetails />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/transfer" element={<TransferPage />} />
              <Route path="/withdraw" element={<WithdrawPage />} />
              <Route path="/deposit" element={<DepositPage />} />
              <Route path="/scan-to-pay" element={<ScanToPayPage />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
