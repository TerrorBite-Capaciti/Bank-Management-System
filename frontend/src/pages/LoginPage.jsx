// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/LoginPage.css'; // Add your custom styles here

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Add validation, API calls for authentication here
    console.log('Logging in:', username);
  };

  return (
    <div className="login-page">
      <h1>Login to SecureBank</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username</label>
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Password</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit" className="btn">Login</button>
      </form>
      <p><Link to="/create-account">Create an account</Link></p>
      <p><Link to="/forgot-password">Forgot password?</Link></p>
    </div>
  );
};

export default LoginPage;
