import React, { useState } from 'react';

const DepositForm = () => {
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount <= 0) {
      alert('Please enter a valid amount!');
    } else {
      alert(`Deposit of $${amount} successful!`);
      setAmount('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Deposit Money</h2>
      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="submit">Deposit</button>
    </form>
  );
};

export default DepositForm;
