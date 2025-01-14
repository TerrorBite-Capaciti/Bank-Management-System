import React, { useState } from 'react';
import { FaFingerprint, FaRegEye, FaRegEyeSlash, FaCreditCard, FaExchangeAlt, FaMoneyBillAlt, FaCamera } from 'react-icons/fa'; // Icons
import '../styles/LoginPage.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      if (username === '' || password === '') {
        setError('Please enter both username and password');
        setIsLoading(false);
        return;
      }

      alert('Logged in successfully!');
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        {/* Left Section: Login Form */}
        <div className="left-section">
          <h1>ByteBank</h1> {/* I think we should replace this with a logo */}
          <p className="subheading">Your Trusted Financial Partner</p>

          <form onSubmit={handleLogin}>
            <div>
              <input 
                type="text" 
                placeholder="Username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
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
                className="input-field"
                required
              />
              <button 
                type="button" 
                className="show-password-btn" 
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
              </button>
            </div>

            {isLoading ? (
              <div className="loading-spinner">Processing...</div>
            ) : (
              <button type="submit" className="btn">Login</button>
            )}

            {error && <div className="error">{error}</div>}
          </form>

          <div className="biometric-options">
            <div className="biometric-btn">
              <FaFingerprint size={24} /> Fingerprint
            </div>
            <div className="biometric-btn">
              <img src="https://img.icons8.com/ios/50/000000/face-recognition.png" alt="Face Recognition" width="24" />
              Face Recognition
            </div>
          </div>

          <p className="sign-up-text">Don't have an account? <a href="/signup">Create an account</a></p>
          <div className="links">
            <a href="/forgot-password">Forgot Password?</a>
          </div>
          <footer>
            <p>By signing in, you agree to our <a href="#">Terms & Conditions</a> and <a href="#">Privacy Policy</a>.</p>
          </footer>
        </div>

        {/* Right Section: User Options Preview */}
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
