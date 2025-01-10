import React, { useState } from 'react';
import styles from '../styles/DepositPage.module.css';

const DepositPage = () => {
  const [depositAmount, setDepositAmount] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleDepositChange = (e) => {
    setDepositAmount(e.target.value);
  };

  const handleDepositSubmit = (e) => {
    e.preventDefault();

    // Simple validation: Check if the deposit is a valid number and is greater than zero
    if (depositAmount && !isNaN(depositAmount) && Number(depositAmount) > 0) {
      setSuccessMessage(`Successfully deposited R${depositAmount}`);
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
    </div>
  );
};

export default DepositPage;
