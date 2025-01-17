import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaFingerprint,
  FaRegEye,
  FaRegEyeSlash,
  FaCreditCard,
  FaExchangeAlt,
  FaMoneyBillAlt,
  FaCamera,
} from 'react-icons/fa';
import '../styles/LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    if (!email || !password) {
      setError('Please enter both email and password.');
      setIsLoading(false);
      return;
    }

    // Hardcoded successful login logic
    setTimeout(() => {
      alert('Logged in successfully!');
      navigate('/dashboard');
    }, 1000); // Simulate a brief delay
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="left-section">
          <h1>ByteBank</h1>
          <p className="subheading">Your Trusted Financial Partner</p>

          <form onSubmit={handleLogin}>
            <div>
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field"
                required
              />
            </div>
            <div className="password-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field password-input"
                required
              />
              <span
                className="password-toggle-icon"
                onClick={() => setShowPassword(!showPassword)}
                title={showPassword ? 'Hide Password' : 'Show Password'}
              >
                {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
              </span>
            </div>

            {error && <div className="error">{error}</div>}
            {isLoading ? (
              <div className="loading-spinner">Processing...</div>
            ) : (
              <button type="submit" className="btn">
                Login
              </button>
            )}
          </form>

          <div className="biometric-options">
            <div className="biometric-btn">
              <FaFingerprint size={20} /> Fingerprint
            </div>
            <div className="biometric-btn">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNpsL6V3TqAUOA6Zh7HePJLplP_3aQvkbTnA&s"
                alt="Face Recognition"
                width="24"
              />
              Face Recognition
            </div>
          </div>

          <p className="sign-up-text">
            Don&apos;t have an account? <a href="/signup">Create an account</a>
          </p>

          <div className="links">
            <a href="/forgot-password">Forgot Password?</a>
          </div>
          <footer>
            <p>
              By signing in, you agree to our <a href="#">Terms & Conditions</a>{' '}
              and <a href="#">Privacy Policy</a>.
            </p>
          </footer>
        </div>

        <div className="right-section">
          <h2>Available Services</h2>
          <p>Access these features once you log in:</p>
          <div className="dashboard-grid">
            <div className="dashboard-item">
              <FaCreditCard size={30} />
              <p>Transfer</p>
            </div>
            <div className="dashboard-item">
              <FaMoneyBillAlt size={30} />
              <p>Withdraw</p>
            </div>
            <div className="dashboard-item">
              <FaExchangeAlt size={30} />
              <p>Deposit</p>
            </div>
            <div className="dashboard-item">
              <FaCamera size={30} />
              <p>Scan to Pay</p>
            </div>
            <div className="dashboard-item">
              <FaCreditCard size={30} />
              <p>Bill Payments</p>
            </div>
            <div className="dashboard-item">
              <FaExchangeAlt size={30} />
              <p>View Balance</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
