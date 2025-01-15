import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { createAccount } from '../services/api';
import '../styles/CreateAccountPage.css';

const CreateAccountPage = () => {
  const { setUser } = useContext(AuthContext); // Access AuthContext
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const navigate = useNavigate();

  const handleCreateAccount = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

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

    try {
      const response = await createAccount({ email, username, password });
      setUser(response.data.user); // Save user to context if needed
      alert('Account created successfully!');
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to create account!');
    } finally {
      setIsLoading(false);
    }
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
          {error && <div className="error-message">{error}</div>}
          <div className="terms-container">
            <input
              type="checkbox"
              id="agree-terms"
              checked={agreedToTerms}
              onChange={() => setAgreedToTerms(!agreedToTerms)}
            />
            <label htmlFor="agree-terms">
              I agree to the <a href="#">Terms & Conditions</a>
            </label>
          </div>
          <button type="submit" className="btn" disabled={isLoading}>
            {isLoading ? 'Creating Account...' : 'Create Account'}
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
