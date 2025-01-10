import React, { useState } from 'react';
import '../styles/TransferPage.css';

const Transfer = () => {
  const [fromAccount, setFromAccount] = useState('');
  const [toAccount, setToAccount] = useState('');
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  


  const handleTransfer = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Basic validation
    if (!fromAccount || !toAccount || !amount) {
      setError('All fields are required.');
      return;
    }

    if (isNaN(amount) || Number(amount) <= 0) {
      setError('Please enter a valid amount.');
      return;
    }

    // Simulating an API call
    try {
      
      const response = await fakeApiTransfer(fromAccount, toAccount, amount);

      if (response.success) {
        setSuccess(`Transfer successful! Transaction ID: ${response.transactionId}`);
      } else {
        setError(response.message);
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  // Simulating API function
  const fakeApiTransfer = (from, to, amount) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          transactionId: Math.floor(Math.random() * 1000000),
        });
      }, 1000);
    });
  };

  return (
    <div>
      <h2>Transfer Funds</h2>
      <form onSubmit={handleTransfer}>
        <div>
          <label>From Account:</label>
          <input
            type="text"
            value={fromAccount}
            onChange={(e) => setFromAccount(e.target.value)}
            required
          />
        </div>
        <div>
          <label>To Account:</label>
          <input
            type="text"  
            value={toAccount}
            onChange={(e) => setToAccount(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <button type="submit">Transfer</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </div>
  );
};

export default Transfer;
 