import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importing pages
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import CreateAccountPage from './pages/CreateAccountPage';
import Home from './pages/Home';
import AccountDetails from './pages/AccountDetails';
import Transactions from './pages/Transactions';

// Importing components
import Footer from './components/Footer';

// Importing styles
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
        
        <div className="content">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/create-account" element={<CreateAccountPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/account-details" element={<AccountDetails />} />
            <Route path="/transactions" element={<Transactions />} />
          </Routes>
        </div>
        
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
