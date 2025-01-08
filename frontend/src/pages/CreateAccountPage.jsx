import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/CreateAccountPage.css'; 

const CreateAccountPage = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleCreateAccount = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    // Validation
    if (password !== confirmPassword) {
      setError('Passwords do not match!');
      setIsLoading(false);
      return;
    }

    if (!agreedToTerms) {
      setError('You must agree to the terms and conditions.');
      setIsLoading(false);
      return;
    }

    // Simulate account creation API call
    setTimeout(() => {
      alert('Account created successfully!');
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="create-account-page">
      <div className="form-container">
        <h1>Create Account</h1>
        <form onSubmit={handleCreateAccount}>
          <div>
            <label htmlFor="email">Email</label>
            <input 
              id="email"
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
              className="input-field"
            />
          </div>
          <div>
            <label htmlFor="username">Username</label>
            <input 
              id="username"
              type="text" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              required 
              className="input-field"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input 
              id="password"
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
              className="input-field"
            />
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input 
              id="confirmPassword"
              type="password" 
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)} 
              required 
              className="input-field"
            />
          </div>

          {/* Error Message */}
          {error && <div className="error-message">{error}</div>}

          {/* Terms and Conditions */}
          <div className="terms-container">
            <input 
              type="checkbox" 
              id="agree-terms" 
              checked={agreedToTerms} 
              onChange={() => setAgreedToTerms(!agreedToTerms)} 
            />
            <label htmlFor="agree-terms">I agree to the <a href="#">Terms & Conditions</a></label>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn" disabled={isLoading}>
            {isLoading ? 'Creating Account...' : 'Create Account'}
          </button>
        </form>

        {/* Sign Up Link */}
        <p className="login-link">
          Already have an account? <Link to="/login">Login</Link>
        </p>

        {/* Social Media Buttons */}
        <div className="social-signup">
          <button className="social-btn google-btn">Sign Up with Google</button>
          <button className="social-btn facebook-btn">Sign Up with Facebook</button>
        </div>
      </div>
    </div>
  );
};

export default CreateAccountPage;
