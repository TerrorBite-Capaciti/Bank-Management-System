import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/LandingPage.css';
import graphImage from '../assets/images/graph1.jpg';
import coinsImage from '../assets/images/images.jpg';
import notesImage from '../assets/images/piechart.jpg';
import news1 from '../assets/images/news1.jpg';
import news2 from '../assets/images/news2.png';
import news3 from '../assets/images/news3.jpg';
import janeImage from '../assets/images/jane.jpg';
import josh1Image from '../assets/images/josh1.jpg';
import johnImage from '../assets/images/john.jpg';
import zamaImage from '../assets/images/Zama.jpg';
import logoImage from '../assets/images/bank.png';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="intro">
       {/* Logo Section */}
       <div className="logo-container">
       <img src={logoImage} alt="Logo" />
      </div>

        <h1 className="title">Welcome to ByteBank</h1>
        <p className="subtitle">Your trusted partner for secure, seamless, and smart banking.</p>

        <div className="buttons-container">
          <Link to="/login" className="btn login-btn">Login</Link>
          <Link to="/create-account" className="btn create-btn">Create Account</Link>
          <Link to="/dashboard" className="btn dashboard-btn"> Dashboard</Link>
        </div>
      </header>

      <section className="about-us">
        <h2>Why Choose ByteBank?</h2>
        <p>
          At ByteBank, we blend cutting-edge technology with a customer-centric approach to deliver an unparalleled banking experience. 
          Whether you're managing personal savings or running a business, our platform is designed to cater to all your financial needs with speed, security, and simplicity.
        </p>
        <div className="about-us-stats">
          <div className="stat">
            <h3>99.9%</h3>
            <p>System Uptime</p>
          </div>
          <div className="stat">
            <h3>24/7</h3>
            <p>Customer Support</p>
          </div>
          <div className="stat">
            <h3>10M+</h3>
            <p>Active Users</p>
          </div>
        </div>
      </section>

      <section className="features">
        <h2>Our Features</h2>
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

      <section className="products">
        <h2>Explore Our Products</h2>
        <ul>
          <li>Personal Savings Accounts</li>
          <li>Business Banking Solutions</li>
          <li>Credit and Debit Cards</li>
          <li>Investment Portfolios</li>
          <li>Insurance and Loan Services</li>
        </ul>
      </section>

      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <img src={josh1Image} alt="Josh1" />
            <p>"BankByte has revolutionized how we manage our financial operations. The platform's seamless integration with our existing systems saved us time and reduced errors. "</p>
            <span>- Josh Beckham, Chartered Accountant CA(SA)</span>
          </div>
          <div className="testimonial-card">
            <img src={janeImage} alt="Jane" />
            <p>As a small business owner, security and reliability are critical. BankByte’s advanced encryption and fraud detection systems give me peace of mind knowing our data and funds are protected.</p>
            <span>- Jane Elsphath, Entrepreneur</span>
          </div>
          <div className="testimonial-card">
            <img src={johnImage} alt="John" />
            <p>"ByteBank revolutionized the way I handle my finances. Our team was amazed by how intuitive and user-friendly BankByte’s platform is. Training our staff was a breeze, and within days, we were using its advanced reporting and analytics tools to make better financial decisions. "</p>
            <span>- John Wellington, Entrepreneur</span>
          </div>
          <div className="testimonial-card">
            <img src={zamaImage} alt="Zama" />
            <p>"Within three months, our transaction processing efficiency increased by 40%, and our client satisfaction levels soared. BankByte is a must-have for any growing business!"</p>
            <span>- Zama Ntshangase, Acquisition Manager</span>
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
        <details>
          <summary>Can I open an account online?</summary>
          <p>Yes, opening an account is quick and easy. Get started in just a few clicks!</p>
        </details>
      </section>

      <footer className="cta-footer">
        <h2>Experience ByteBank Today</h2>
        <p>Join millions of users and enjoy seamless, secure, and innovative banking.</p>
        <Link to="/create-account" className="btn create-btn">Get Started</Link>
      </footer>
    </div>
  );
};

export default LandingPage;
