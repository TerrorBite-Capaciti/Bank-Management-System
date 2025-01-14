import React, { useState } from 'react';

const WithdrawForm = () => {
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount <= 0) {
      alert('Please enter a valid amount!');
    } else {
      alert(`Withdrawal of $${amount} successful!`);
      setAmount('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Withdraw Money</h2>
      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="submit">Withdraw</button>
    </form>
  );
};

export default WithdrawForm;
