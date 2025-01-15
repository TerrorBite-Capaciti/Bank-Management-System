import React, { useState } from 'react';
import styles from '../styles/DepositPage.module.css';

const DepositPage = () => {
  const [depositAmount, setDepositAmount] = useState('');
  const [selectedAccount, setSelectedAccount] = useState('Savings'); // Default account
  const [savingsBalance, setSavingsBalance] = useState(0); // Balance for Savings account
  const [premiumBalance, setPremiumBalance] = useState(0); // Balance for Premium account
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleDepositChange = (e) => {
    setDepositAmount(e.target.value);
  };

  const handleAccountChange = (e) => {
    setSelectedAccount(e.target.value);
  };

  const handleDepositSubmit = (e) => {
    e.preventDefault();

    if (depositAmount && !isNaN(depositAmount) && Number(depositAmount) > 0) {
      const amount = Number(depositAmount);

      if (selectedAccount === 'Savings') {
        setSavingsBalance((prevBalance) => prevBalance + amount);
      } else if (selectedAccount === 'Premium') {
        setPremiumBalance((prevBalance) => prevBalance + amount);
      }

      setSuccessMessage(`Successfully deposited R${amount} into ${selectedAccount} account.`);
      setErrorMessage('');
      setDepositAmount('');
    } else {
      setErrorMessage('Please enter a valid amount.');
      setSuccessMessage('');
    }
  };

  return (
    <div className={styles.depositPage}>
      <h1>Deposit Funds</h1>

      <form onSubmit={handleDepositSubmit} className={styles.depositForm}>
        <select
          value={selectedAccount}
          onChange={handleAccountChange}
          className={styles.accountDropdown}
        >
          <option value="Savings">Savings</option>
          <option value="Premium">Premium</option>
        </select>

        <input
          type="number"
          value={depositAmount}
          onChange={handleDepositChange}
          placeholder="Enter amount"
          className={styles.depositInput}
          required
        />
        <button type="submit" className={styles.depositButton}>
          Deposit
        </button>
      </form>

      {successMessage && <p className={styles.successMessage}>{successMessage}</p>}
      {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}

      <div className={styles.balances}>
        <p>Savings Balance: R{savingsBalance}</p>
        <p>Premium Balance: R{premiumBalance}</p>
      </div>
    </div>
  );
};

export default DepositPage;