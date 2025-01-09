import React, { useState } from 'react';

const WithdrawPage = () => {
  const [accountType, setAccountType] = useState('');
  const [amount, setAmount] = useState('');

  const handleAccountTypeChange = (event) => {
    setAccountType(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Account Type: ${accountType}, Amount: ${amount}`);
    // Add withdrawal logic here
  };

  return (
    <div>
      <h1>Withdraw Page</h1>
      <p>Here you can withdraw funds from your account.</p>
      <form onSubmit={handleSubmit}>
        <label>Account Type:</label>
        <select value={accountType} onChange={handleAccountTypeChange}>
          <option value="">Select Account Type</option>
          <option value="savings">Savings Account</option>
          <option value="checking">Premium Account</option>
        </select>
        <br />
        <label>Amount:</label>
        <input type="number" value={amount} onChange={handleAmountChange} />
        <br />
        <button type="submit">Withdraw</button>
      </form>
    </div>
  );
};

export default WithdrawPage;