import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/CreateAccountPage.css';

const CreateAccountPage = () => {
  const [email, setEmail] = useState('');
  const [fullname, setFullname] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const navigate = useNavigate();

  const handleCreateAccount = (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    if (!agreedToTerms) {
      setError('You must agree to the terms and conditions.');
      return;
    }

    // Hardcoded success logic
    alert('Account created successfully!');
    navigate('/login');
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
            <label htmlFor="fullname">Fullname</label>
            <input
              id="fullname"
              type="text"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
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
          {error && <div className="error-message">{error}</div>}
          <div className="terms-container">
            <input
              type="checkbox"
              id="agree-terms"
              checked={agreedToTerms}
              onChange={() => setAgreedToTerms(!agreedToTerms)}
            />
            <label htmlFor="agree-terms">
              I agree to the <a href="/terms-and-conditions">Terms & Conditions</a>
            </label>
          </div>
          <button type="submit" className="btn">
            Create Account
          </button>
        </form>
        <p className="login-link">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default CreateAccountPage;
