import React, { useState } from 'react';
import '../styles/WithdrawPage.css'

const WithdrawPage = () => {
  const [accountType, setAccountType] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState(null);

  const handleAccountTypeChange = (event) => {
    setAccountType(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!accountType || !amount) {
      setMessage('Please select an account type and enter an amount.');
      return;
    }

    // Add withdrawal logic here
    const savingsBalance = 1000;
    const checkingBalance = 500;

    if (accountType === 'savings') {
      if (amount <= savingsBalance) {
        setMessage(`Withdrawal successful. New savings balance: $${savingsBalance - amount}`);
      } else {
        setMessage('Insufficient savings balance.');
      }
    } else if (accountType === 'checking') {
      if (amount <= checkingBalance) {
        setMessage(`Withdrawal successful. New checking balance: $${checkingBalance - amount}`);
      } else {
        setMessage('Insufficient checking balance.');
      }
    }
  };

  return (
    <div className="container">
      <h1 className="title">Withdraw Funds</h1>
      <p className="description">Withdraw funds from your account.</p>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="label">Account Type:</label>
            <select
              className="select"
              value={accountType}
              onChange={handleAccountTypeChange}
            >
              <option value="">Select Account Type</option>
              <option value="savings">Savings Account</option>
              <option value="checking">Premium Account</option>
            </select>
          </div>
          <div className="form-group">
            <label className="label">Amount:</label>
            <input
              className="input"
              type="number"
              value={amount}
              onChange={handleAmountChange}
            />
          </div>
          <button className="button" type="submit">
            Withdraw
          </button>
          {message && (
            <p
              className={`message ${message.includes('successful') ? 'success' : 'error'
                }`}
            >
              {message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default WithdrawPage;