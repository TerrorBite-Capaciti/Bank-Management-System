import React, { useState, useEffect } from 'react';

const AccountDetails = () => {
  const [account, setAccount] = useState(null);

  useEffect(() => {
    // Fetch account details (simulate API call)
    const fetchedAccount = {
      name: 'John Doe',
      balance: 1000,
      accountNumber: '123456789',
    };
    setAccount(fetchedAccount);
  }, []);

  return (
    <div className="account-details">
      {account ? (
        <div>
          <h2>Account Details</h2>
          <p><strong>Name:</strong> {account.name}</p>
          <p><strong>Balance:</strong> ${account.balance}</p>
          <p><strong>Account Number:</strong> {account.accountNumber}</p>
        </div>
      ) : (
        <div>Loading account details...</div>
      )}
    </div>
  );
};

export default AccountDetails;
