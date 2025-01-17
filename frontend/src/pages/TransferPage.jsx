import React, { useState, useEffect } from 'react';
import '../styles/TransferPage.css';
import BackButton from "../components/BackButton";

const Transfer = () => {
  const [fromAccount, setFromAccount] = useState('');
  const [toAccount, setToAccount] = useState('');
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [balance, setBalance] = useState({ savings: 0, premium: 0 }); // Store both account balances
  const [reason, setReason] = useState('');
  const [transferType, setTransferType] = useState('one-time');
  const [scheduledDate, setScheduledDate] = useState('');
  const [transactions, setTransactions] = useState([]);

  // Load balances from localStorage on component mount
  useEffect(() => {
    const savedSavingsBalance = localStorage.getItem('savingsBalance');
    const savedPremiumBalance = localStorage.getItem('premiumBalance');
    
    if (savedSavingsBalance) {
      setBalance((prev) => ({ ...prev, savings: parseFloat(savedSavingsBalance) }));
    }

    if (savedPremiumBalance) {
      setBalance((prev) => ({ ...prev, premium: parseFloat(savedPremiumBalance) }));
    }
  }, []);

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

    // Validation: Check balance for the "from" account
    if (fromAccount === 'Savings Account' && Number(amount) > balance.savings) {
      setError('Insufficient balance in Savings Account.');
      return;
    } else if (fromAccount === 'Premium Account' && Number(amount) > balance.premium) {
      setError('Insufficient balance in Premium Account.');
      return;
    }

    // Validation: Scheduled date must be in the future if transfer type is recurring
    if (transferType === 'recurring' && (!scheduledDate || new Date(scheduledDate) < new Date())) {
      setError('Scheduled date must be in the future for recurring transfers.');
      return;
    }

    // Simulating an API call for transfer
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
            date: transferType === 'recurring' ? scheduledDate : new Date().toISOString(),
            type: transferType,
          },
        ]);
        setSuccess(`Transfer successful! Transaction ID: ${response.transactionId}`);

        // Update balance after transfer
        if (fromAccount === 'Savings Account') {
          const newBalance = balance.savings - Number(amount);
          setBalance((prev) => ({ ...prev, savings: newBalance }));
          localStorage.setItem('savingsBalance', newBalance.toString());
        } else if (fromAccount === 'Premium Account') {
          const newBalance = balance.premium - Number(amount);
          setBalance((prev) => ({ ...prev, premium: newBalance }));
          localStorage.setItem('premiumBalance', newBalance.toString());
        }

        // Clear fields after successful transfer
        setFromAccount('');
        setToAccount('');
        setAmount('');
        setReason('');
        setScheduledDate('');
        setTransferType('one-time');
      } else {
        setError(response.message);
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  // Simulating API function for transfer
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
      <BackButton />
      <h2>TRANSFER FUNDS</h2>
      <form onSubmit={handleTransfer}>
        <div>
          <label>From Account:</label>
          <select
            className="select"
            value={fromAccount}
            onChange={(e) => setFromAccount(e.target.value)}
          >
            <option value="">Select Account Type</option>
            <option value="Savings Account">Savings Account</option>
            <option value="Premium Account">Premium Account</option>
          </select>
        </div>
        <div>
          <label>To Account:</label>
          <select
            className="select"
            value={toAccount}
            onChange={(e) => setToAccount(e.target.value)}
          >
            <option value="">Select Account Type</option>
            <option value="Savings Account">Savings Account</option>
            <option value="Premium Account">Premium Account</option>
            <option value="External Account">External Account</option>
          </select>
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
          <label>Description:</label>
          <textarea
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          />
        </div>
        <div>
          <label>Transfer Type:</label>
          <select
            className="select"
            value={transferType}
            onChange={(e) => setTransferType(e.target.value)}
          >
            <option value="one-time">One-Time Transfer</option>
            <option value="recurring">Recurring Transfer</option>
          </select>
        </div>
        {transferType === 'recurring' && (
          <div>
            <label>Scheduled Date:</label>
            <input
              type="datetime-local"
              value={scheduledDate}
              onChange={(e) => setScheduledDate(e.target.value)}
            />
          </div>
        )}
        <button type="submit">Transfer</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      <div>
        <p>Savings Balance: R{balance.savings.toFixed(2)}</p>
        <p>Premium Balance: R{balance.premium.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Transfer;
