import React, { useState } from 'react';
import { FaFingerprint, FaRegEye, FaRegEyeSlash } from 'react-icons/fa';  // Icons
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

    // Simulate an API call
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
      <div className="form-container">
        <h1>ByteBank</h1> {/* I think we should replace this with a logo instaed */}
        <p className="subheading">Your Trusted Financial Partner</p>
        
        {/* Login Section */}
        <p className="login-text">Already have an account? Log in below.</p>
        
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

        {/* Biometric Options */}
        <div className="biometric-options">
          <div className="biometric-btn">
            <FaFingerprint size={24} /> Fingerprint
          </div>
          <div className="biometric-btn">
            <img src="https://img.icons8.com/ios/50/000000/face-recognition.png" alt="Face Recognition" width="24" />
            Face Recognition
          </div>
        </div>

        {/* Sign-up Option */}
        <p className="sign-up-text">Don't have an account? <a href="/signup">Create an account</a></p>

        {/* Forgot Password */}
        <div className="links">
          <a href="/forgot-password">Forgot Password?</a>
        </div>

        <footer>
          <p>By signing in, you agree to our <a href="#">Terms & Conditions</a> and <a href="#">Privacy Policy</a>.</p>
        </footer>
      </div>
    </div>
  );
};

export default LoginPage;
