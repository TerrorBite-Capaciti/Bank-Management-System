import React, { useState, useEffect } from 'react';

const Transactions = () => {
  // Simulating a list of transactions (this would be fetched from an API later)
  const [transactions, setTransactions] = useState([
    { id: 1, type: 'Deposit', amount: 1000, date: '2025-01-01' },
    { id: 2, type: 'Withdraw', amount: 500, date: '2025-01-02' },
    { id: 3, type: 'Transfer', amount: 2000, date: '2025-01-03' },
  ]);

  // Simulating an API call to fetch transactions
  useEffect(() => {
    // Here you would make an API call to fetch real transactions.
    // setTransactions(responseFromAPI);
  }, []);

  return (
    <div className="transactions">
      <h2>Transaction History</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.date}</td>
              <td>{transaction.type}</td>
              <td>${transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
