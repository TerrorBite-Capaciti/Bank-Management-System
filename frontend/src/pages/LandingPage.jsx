import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/LandingPage.css';
import graphImage from '../assets/images/coin2.jpg';
import coinsImage from '../assets/images/images.jpg';
import notesImage from '../assets/images/piechart.jpg';
import news1 from '../assets/images/news1.jpg';
import news2 from '../assets/images/news2.png';
import news3 from '../assets/images/news3.jpg';
import janeImage from '../assets/images/jane.jpg';
import johnImage from '../assets/images/john1.webp';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="intro">
        <h1 className="title">Welcome to ByteBank</h1>
        <p className="subtitle">Where your security meets innovation. Banking, reimagined.</p>
        <div className="buttons-container">
          <Link to="/login" className="btn login-btn">Login</Link>
          <Link to="/create-account" className="btn create-btn">Create Account</Link>
        </div>
      </header>

      <section className="features">
        <div className="feature">
          <img src={graphImage} alt="Graph" className="feature-img" />
          <h3>High-Level Security</h3>
          <p>Cutting-edge encryption and biometric authentication to safeguard your finances.</p>
        </div>
        <div className="feature">
          <img src={coinsImage} alt="Coins" className="feature-img" />
          <h3>Instant Transactions</h3>
          <p>Real-time, hassle-free money transfers, withdrawals, and deposits.</p>
        </div>
        <div className="feature">
          <img src={notesImage} alt="Notes" className="feature-img" />
          <h3>AI-Powered Insights</h3>
          <p>Get personalized financial guidance with the power of artificial intelligence.</p>
        </div>
      </section>

      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <img src={janeImage} alt="Jane" />
            <p>"ByteBank revolutionized the way I handle my finances. Highly recommended!"</p>
            <span>- Jane Doe, Entrepreneur</span>
          </div>
          <div className="testimonial-card">
            <img src={johnImage} alt="John" />
            <p>"The security features give me peace of mind every time I bank."</p>
            <span>- John Smith, Software Engineer</span>
          </div>
        </div>
      </section>

      <section className="news">
        <h2>As Featured In</h2>
        <div className="news-logos">
          <img src={news1} alt="News Logo 1" />
          <img src={news2} alt="News Logo 2" />
          <img src={news3} alt="News Logo 3" />
        </div>
      </section>

      <section className="faq">
        <h2>Frequently Asked Questions</h2>
        <details>
          <summary>How secure is ByteBank?</summary>
          <p>We use the latest encryption technologies and biometric authentication to keep your finances safe.</p>
        </details>
        <details>
          <summary>Are there any hidden fees?</summary>
          <p>No, ByteBank prides itself on complete transparency. No hidden fees, ever.</p>
        </details>
      </section>

      <footer className="cta-footer">
        <h2>Ready to Experience ByteBank?</h2>
        <p>Join thousands of satisfied customers today!</p>
        <Link to="/create-account" className="btn create-btn">Get Started</Link>
      </footer>
    </div>
  );
};

export default LandingPage;
