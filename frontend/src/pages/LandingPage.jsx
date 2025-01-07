import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/LandingPage.css';
import graphImage from '../assets/images/coin2.jpg';
import coinsImage from '../assets/images/images.jpg';
import notesImage from '../assets/images/piechart.jpg';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="intro">
        <h1 className="title glowing-text">Welcome to ByteBank</h1>
        <p className="subtitle">
          <span className="holographic-effect">Where your security meets innovation.</span> 
          Banking, reimagined.
        </p>
      </div>

      <div className="buttons-container">
        <Link to="/login" className="btn login-btn">Login</Link>
        <Link to="/create-account" className="btn create-btn">Create Account</Link>
      </div>

      <div className="features">
        <div className="feature">
          <img src={graphImage} alt="Graph" className="feature-img holographic" />
          <h3>High-Level Security</h3>
          <p>Cutting-edge encryption and biometric authentication to safeguard your finances.</p>
        </div>
        <div className="feature">
          <img src={coinsImage} alt="Coins" className="feature-img holographic" />
          <h3>Instant Transactions</h3>
          <p>Real-time, hassle-free money transfers, withdrawals, and deposits.</p>
        </div>
        <div className="feature">
          <img src={notesImage} alt="Notes" className="feature-img holographic" />
          <h3>AI-Powered Insights</h3>
          <p>Get personalized financial guidance with the power of artificial intelligence.</p>
        </div>
      </div>

      {/* Real-Time Trust Indicators */}
      <div className="trust-indicators">
        <h3>Secure, Trusted, Award-Winning</h3>
        <div className="trust-badges">
          <span className="badge">SSL Secured</span>
          <span className="badge">Award-Winning</span>
          <span className="badge">Live Trust Score: 98.7%</span>
        </div>
      </div>

      {/* Holographic Bank Card */}
      <div className="holographic-card">
        <p>Experience the future of banking with ByteBank</p>
        <img src="https://via.placeholder.com/300" alt="Holographic Bank Card" className="holographic-img" />
      </div>

      <div className="footer-info">
        <p>Secure, smart, and sleek – the future of banking is here.</p>
      </div>

      {/* Particle Background */}
      <div className="particle-background"></div>
    </div>
  );
};

export default LandingPage;
