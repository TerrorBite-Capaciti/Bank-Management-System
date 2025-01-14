import React, { useEffect, useState } from 'react';
import { getAccounts } from '../services/api'; // Replace with the correct function
import '../styles/Transactions.css';

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const { data } = await getAccounts(); // Ensure this is the correct API function
        setTransactions(data.transactions || []); // Adjust to the actual response structure
      } catch (err) {
        setError('Failed to fetch transactions.');
        console.error(err);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div className="transactions-page">
      <h1>Transaction History</h1>
      {error ? (
        <div className="error">{error}</div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((txn) => (
              <tr key={txn.id}>
                <td>{txn.id}</td>
                <td>{txn.date}</td>
                <td>{txn.amount}</td>
                <td>{txn.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Transactions;
