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
    const value = e.target.value;
    if (value.includes('.') && value.split('.')[1].length > 2) return; // Restrict to two decimals
    setDepositAmount(value);
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
      setErrorMessage('Please enter a valid amount greater than zero.');
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
          aria-label="Select account type"
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
          aria-label="Deposit amount"
          required
        />
        <button type="submit" className={styles.depositButton}>
          Deposit
        </button>
      </form>

      {successMessage && <p className={styles.successMessage}>{successMessage}</p>}
      {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}

      <div className={styles.balances}>
        <p>Savings Balance: R{savingsBalance.toFixed(2)}</p>
        <p>Premium Balance: R{premiumBalance.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default DepositPage;
