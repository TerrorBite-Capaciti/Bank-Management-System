import React, { useState, useEffect } from 'react';

const AccountDetails = () => {
  // Simulating account details and transactions
  const [account, setAccount] = useState({
    accountNumber: '1234567890',
    balance: 5000,
    transactions: [
      { id: 1, type: 'Deposit', amount: 1000, date: '2025-01-01' },
      { id: 2, type: 'Withdraw', amount: 500, date: '2025-01-02' },
      { id: 3, type: 'Deposit', amount: 2000, date: '2025-01-03' },
    ],
  });

  // Simulating API call to fetch account details (Replace with backend API later)
  useEffect(() => {
    // Normally, we would fetch account details here.
    // setAccount(responseFromAPI);
  }, []);

  return (
    <div className="account-details">
      <h2>Account Details</h2>
      <p>Account Number: {account.accountNumber}</p>
      <p>Balance: ${account.balance}</p>

      <h3>Recent Transactions</h3>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {account.transactions.map((transaction) => (
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

export default AccountDetails;
