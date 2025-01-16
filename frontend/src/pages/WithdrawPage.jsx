import React, { useState } from 'react';
import '../styles/WithdrawPage.css';

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

    const savingsBalance = 0;
    const premiumBalance = 0;

    if (accountType === 'savings') {
      if (amount <= savingsBalance) {
        setMessage(`Withdrawal successful. New savings balance: R${savingsBalance - amount}`);
      } else {
        setMessage('Insufficient savings balance.');
      }
    } else if (accountType === 'premium') {
      if (amount <= premiumBalance) {
        setMessage(`Withdrawal successful. New premium balance: R${premiumBalance - amount}`);
      } else {
        setMessage('Insufficient premium balance.');
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
              <option value="premium">Premium Account</option>
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
            <p className={`message ${message.includes('successful') ? 'success' : 'error'}`}>
              {message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default WithdrawPage;
