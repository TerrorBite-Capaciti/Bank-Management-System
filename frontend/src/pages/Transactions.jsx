import React, { useEffect, useState } from 'react';
import { getTransactions } from '../services/api'; // API function to fetch transactions
import '../styles/Transactions.css';
import BackButton from "../components/BackButton"; 


const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const { data } = await getTransactions(); // Fetch transactions from backend
        setTransactions(data || []);
      } catch (err) {
        setError('Failed to fetch transactions.');
        console.error(err);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div className="transactions-page">
          <BackButton />
      <h1>Transaction History</h1>
      {error ? (
        <div className="error">{error}</div>
      ) : transactions.length === 0 ? (
        <p>No transactions recorded yet.</p>
      ) : (
        <table className="transactions-table">
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
