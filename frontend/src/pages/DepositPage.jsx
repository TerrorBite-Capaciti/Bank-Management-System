import React, { useState } from 'react';
import styles from '../styles/DepositPage.module.css';
import { saveTransaction } from '../services/api'; // API function to save transactions
import BackButton from "../components/BackButton"; // Adjust path based on your structure

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

  const handleDepositSubmit = async (e) => {
    e.preventDefault();

    if (depositAmount && !isNaN(depositAmount) && Number(depositAmount) > 0) {
      const amount = Number(depositAmount);

      // Update account balance
      if (selectedAccount === 'Savings') {
        setSavingsBalance((prevBalance) => prevBalance + amount);
      } else if (selectedAccount === 'Premium') {
        setPremiumBalance((prevBalance) => prevBalance + amount);
      }

      // Create transaction object
      const newTransaction = {
        id: Date.now(), // Use timestamp for unique ID
        date: new Date().toLocaleString(),
        amount: `R${amount.toFixed(2)}`,
        description: `Deposit to ${selectedAccount} account`,
      };

      try {
        await saveTransaction(newTransaction); // Save transaction to backend
        setSuccessMessage(`Successfully deposited R${amount} into ${selectedAccount} account.`);
        setErrorMessage('');
      } catch (error) {
        setErrorMessage('Failed to save transaction.');
        console.error(error);
      }

      setDepositAmount('');
    } else {
      setErrorMessage('Please enter a valid amount.');
      setSuccessMessage('');
    }
  };

  return (
    <div className={styles.depositPage}>
      <BackButton />

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
        <p>Savings Balance: R{savingsBalance.toFixed(2)}</p>
        <p>Premium Balance: R{premiumBalance.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default DepositPage;
