import React from 'react';
import { FaUserCircle, FaSignOutAlt, FaUniversity, FaCrown } from 'react-icons/fa';
import styles from '../styles/DashboardPage.module.css'; // Import as a CSS module

const DashboardPage = () => {
  const handleLogout = () => {
    alert('Logged out successfully!');
    window.location.href = '/login';
  };

  return (
    <div className={styles.dashboardPage}>
      {/* Header */}
      <header className={styles.dashboardHeader}>
        <div className={styles.headerLogo}>ByteBank</div>
        <div className={styles.headerUser}>
          <FaUserCircle size={24} />
          <span>Welcome, User!</span>
          <button onClick={handleLogout} className={styles.logoutBtn}>
            <FaSignOutAlt size={20} /> Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className={styles.dashboardContent}>
        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <ul>
            <li>
              <a href="#transfer">Transfer</a>
            </li>
            <li>
              <a href="#withdraw">Withdraw</a>
            </li>
            <li>
              <a href="#transactions">Transactions</a>
            </li>
            <li>
              <a href="#scan-to-pay">Scan to Pay</a>
            </li>
          </ul>
        </aside>

        {/* Main Dashboard */}
        <main className={styles.dashboardMain}>
          <h1>Welcome to ByteBank</h1>

          {/* Account Cards */}
          <div className={styles.accountCards}>
            {/* Savings Account Card */}
            <div className={`${styles.accountCard} ${styles.savingsCard}`}>
              <div className={styles.cardLogo}>
                <FaUniversity size={24} />
                <span>ByteBank</span>
              </div>
              <h2>Savings Account</h2>
              <p>Account No: 1234 5678 9012</p>
              <p className={styles.accountBalance}>$5,250.75</p>
            </div>

            {/* Premium Account Card */}
            <div className={`${styles.accountCard} ${styles.premiumCard}`}>
              <div className={styles.cardLogo}>
                <FaCrown size={24} />
                <span>ByteBank Premium</span>
              </div>
              <h2>Premium Account</h2>
              <p>Account No: 9876 5432 1098</p>
              <p className={styles.accountBalance}>$12,340.50</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
