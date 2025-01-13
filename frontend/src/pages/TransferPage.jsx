import React, { useState } from 'react';
import '../styles/TransferPage.css';

const Transfer = () => {
  const [fromAccount, setFromAccount] = useState('');
  const [toAccount, setToAccount] = useState('');
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [balance, setBalance] = useState(1000); // Example balance for From Account
  const [reason, setReason] = useState(''); // Transfer reason
  const [showModal, setShowModal] = useState(false); // Confirmation modal
  const [scheduledDate, setScheduledDate] = useState(''); // Scheduled transfer date
  const [transactions, setTransactions] = useState([]); // Transaction history

  const handleTransfer = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Validation: All fields are required
    if (!fromAccount || !toAccount || !amount) {
      setError('All fields are required.');
      return;
    }

    // Validation: Amount must be a valid positive number
    if (isNaN(amount) || Number(amount) <= 0) {
      setError('Please enter a valid amount.');
      return;
    }

    // Validation: From and To accounts must not be the same
    if (fromAccount === toAccount) {
      setError('From Account and To Account cannot be the same.');
      return;
    }

    // Validation: Check balance
    if (Number(amount) > balance) {
      setError('Insufficient balance in From Account.');
      return;
    }

    // Validation: Scheduled date must be in the future
    if (scheduledDate && new Date(scheduledDate) < new Date()) {
      setError('Scheduled date must be in the future.');
      return;
    }

    // Simulating an API call
    try {
      const response = await fakeApiTransfer(fromAccount, toAccount, amount);

      if (response.success) {
        // Update transaction history
        setTransactions((prev) => [
          ...prev,
          {
            id: response.transactionId,
            fromAccount,
            toAccount,
            amount,
            date: scheduledDate || new Date().toISOString(),
          },
        ]);
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
        <div>
          <label>Reason:</label>
          <textarea
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          />
        </div>
        <div>
          <label>Scheduled Date:</label>
          <input
            type="datetime-local"
            value={scheduledDate}
            onChange={(e) => setScheduledDate(e.target.value)}
          />
        </div>
        <button type="submit">Transfer</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      <h3>Transaction History:</h3>
      <ul>
        {transactions.map((tx) => (
          <li key={tx.id}>
            ID: {tx.id}, From: {tx.fromAccount}, To: {tx.toAccount}, Amount: $
            {tx.amount}, Date: {tx.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Transfer;
