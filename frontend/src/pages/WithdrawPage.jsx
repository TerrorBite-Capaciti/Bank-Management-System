import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/WithdrawPage.css';

const WithdrawPage = () => {
  const [accountType, setAccountType] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState(null);
  const [savingsBalance, setSavingsBalance] = useState(0);
  const [premiumBalance, setPremiumBalance] = useState(0);
  const navigate = useNavigate();

  // Load balances from localStorage on component mount
  useEffect(() => {
    const savedSavingsBalance = localStorage.getItem('savingsBalance');
    const savedPremiumBalance = localStorage.getItem('premiumBalance');

    if (savedSavingsBalance) {
      setSavingsBalance(parseFloat(savedSavingsBalance));
    }

    if (savedPremiumBalance) {
      setPremiumBalance(parseFloat(savedPremiumBalance));
    }
  }, []);

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

    const withdrawalAmount = parseFloat(amount);

    if (accountType === 'savings') {
      if (withdrawalAmount <= savingsBalance) {
        const newBalance = savingsBalance - withdrawalAmount;
        setSavingsBalance(newBalance);
        localStorage.setItem('savingsBalance', newBalance.toString());
        setMessage(`Withdrawal successful. New savings balance: R${newBalance.toFixed(2)}`);
      } else {
        setMessage('Insufficient savings balance.');
      }
    } else if (accountType === 'premium') {
      if (withdrawalAmount <= premiumBalance) {
        const newBalance = premiumBalance - withdrawalAmount;
        setPremiumBalance(newBalance);
        localStorage.setItem('premiumBalance', newBalance.toString());
        setMessage(`Withdrawal successful. New premium balance: R${newBalance.toFixed(2)}`);
      } else {
        setMessage('Insufficient premium balance.');
      }
    }

    setAmount(''); // Clear the amount input after processing
  };

  return (
    <div className="container">
      <button
        className="back-button"
        name="back-button"
        onClick={() => navigate('/dashboard')}
      >
        Back to Dashboard
      </button>
      <h1 className="title">Withdraw Funds</h1>
      <br />
      <div className="balances">
        <p>Savings Balance: R{savingsBalance.toFixed(2)}</p>
        <p>Premium Balance: R{premiumBalance.toFixed(2)}</p>
      </div>
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
              min="0"
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
