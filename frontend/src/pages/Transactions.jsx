import React, { useState, useEffect } from 'react';

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Simulate API call to fetch transactions
    const fetchedTransactions = [
      { id: 1, amount: 200, date: '2025-01-08', description: 'Deposit' },
      { id: 2, amount: -50, date: '2025-01-07', description: 'Withdrawal' },
    ];
    setTransactions(fetchedTransactions);
  }, []);
  

  return (
    <div className="transactions">
      <h2>Transaction History</h2>
      {transactions.length > 0 ? (
        <ul>
          {transactions.map((transaction) => (
            <li key={transaction.id}>
              <span>{transaction.date}</span>
              <span>{transaction.description}</span>
              <span>{transaction.amount > 0 ? '+' : ''}${transaction.amount}</span>
            </li>
          ))}
        </ul>
      ) : (
        <div>No transactions found.</div>
      )}
    </div>
  );
};

export default Transactions;
