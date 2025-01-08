import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/LoginPage.css'; // Add your custom styles here

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRemembered, setIsRemembered] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate an API call for authentication and 2FA
    setTimeout(() => {
      if (username === '' || password === '') {
        setError('Please enter both username and password');
        setIsLoading(false);
        return;
      }

      // Mock 2FA/biometric authentication
      alert('Logged in successfully with 2FA or Biometrics');
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="login-page">
      <h1>Login to ByteBank</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username</label>
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
            className="input-field"
          />
        </div>
        <div>
          <label>Password</label>
          <div className="password-wrapper">
            <input 
              type={showPassword ? 'text' : 'password'} 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
              className="input-field"
            />
            <button 
              type="button" 
              className="show-password-btn" 
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
        </div>

        <div className="security-options">
          <div>
            <input 
              type="checkbox" 
              id="biometric" 
              checked={isRemembered} 
              onChange={() => setIsRemembered(!isRemembered)}
            />
            <label htmlFor="biometric">Use biometric login (if supported)</label>
          </div>
          <div>
            <input 
              type="checkbox" 
              id="remember-me" 
              checked={isRemembered} 
              onChange={() => setIsRemembered(!isRemembered)} 
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>
        </div>

        {isLoading ? (
          <div className="loading-spinner">Processing...</div>
        ) : (
          <button type="submit" className="btn">Login</button>
        )}

        {error && <div className="error">{error}</div>}

        <div className="links">
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>

        <div className="security-tips">
          <h3>Security Tips:</h3>
          <ul>
            <li><a href="#">Create strong passwords with a mix of characters</a></li>
            <li><a href="#">Enable two-factor authentication</a></li>
            <li><a href="#">Change passwords regularly</a></li>
          </ul>
        </div>
      </form>

      <footer>
        <p>By signing in, you agree to our <a href="#">Terms & Conditions</a> and <a href="#">Privacy Policy</a>.</p>
      </footer>
    </div>
  );
};

export default LoginPage;
