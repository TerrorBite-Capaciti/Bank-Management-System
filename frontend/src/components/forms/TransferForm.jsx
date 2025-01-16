import React, { useState } from 'react';

const TransferForm = () => {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount <= 0 || !recipient) {
      alert('Please provide valid details!');
    } else {
      alert(`Transfer of $${amount} to ${recipient} successful!`);
      setRecipient('');
      setAmount('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Transfer Money</h2>
      <input
        type="text"
        placeholder="Recipient's Name"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="submit">Transfer</button>
    </form>
  );
};

export default TransferForm;
