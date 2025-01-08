import React, { useState } from 'react';
import { FaFingerprint, FaRegEye, FaRegEyeSlash, FaLock } from 'react-icons/fa';  // Icons
import { IoMdArrowForward } from 'react-icons/io';
import '../styles/LoginPage.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isTwoFactor, setIsTwoFactor] = useState(false); // For simulating 2FA

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate an API call
    setTimeout(() => {
      if (username === '' || password === '') {
        setError('Please enter both username and password');
        setIsLoading(false);
        return;
      }

      // Simulate 2FA
      if (!isTwoFactor) {
        setIsTwoFactor(true);
        setIsLoading(false);
        return;
      }

      alert('Logged in successfully!');
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="login-page">
      <div className="form-container">
        <h1>Login</h1>
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
            <button type="submit" className="btn">
              Login <IoMdArrowForward />
            </button>
          )}

          {error && <div className="error">{error}</div>}

          {isTwoFactor && (
            <div className="two-factor-section">
              <input
                type="text"
                placeholder="Enter OTP"
                className="input-field"
                required
              />
              <button type="button" className="btn">Verify OTP</button>
            </div>
          )}
        </form>

        <div className="biometric-options">
          <h3>Or Login Using:</h3>
          <div className="biometric-btn">
            <FaFingerprint size={24} /> Fingerprint
          </div>
          <div className="biometric-btn">
            <img
              src="https://img.icons8.com/ios/50/000000/face-recognition.png"
              alt="Face Recognition"
              width="24"
            />
            Face Recognition
          </div>
        </div>

        <div className="links">
          <a href="/forgot-password">Forgot Password?</a>
          <br />
          <a href="/signup">Create an Account</a>
        </div>

        <footer>
          <p>
            By signing in, you agree to our{' '}
            <a href="#">Terms & Conditions</a> and <a href="#">Privacy Policy</a>.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default LoginPage;
