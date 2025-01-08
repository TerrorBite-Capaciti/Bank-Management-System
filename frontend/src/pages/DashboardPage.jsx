import React from 'react';
import { FaCreditCard, FaExchangeAlt, FaMoneyBillAlt, FaCamera, FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
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
              <a href="#transfer">
                <FaCreditCard size={20} /> Transfer
              </a>
            </li>
            <li>
              <a href="#withdraw">
                <FaMoneyBillAlt size={20} /> Withdraw
              </a>
            </li>
            <li>
              <a href="#transactions">
                <FaExchangeAlt size={20} /> Transactions
              </a>
            </li>
            <li>
              <a href="#scan-to-pay">
                <FaCamera size={20} /> Scan to Pay
              </a>
            </li>
          </ul>
        </aside>

        {/* Main Dashboard */}
        <main className={styles.dashboardMain}>
          <h1>Dashboard</h1>
          <div className={styles.dashboardGrid}>
            <div className={styles.dashboardItem} id="transfer">
              <FaCreditCard size={40} />
              <h3>Transfer</h3>
              <p>Send money to anyone, anywhere, instantly.</p>
            </div>
            <div className={styles.dashboardItem} id="withdraw">
              <FaMoneyBillAlt size={40} />
              <h3>Withdraw</h3>
              <p>Withdraw funds directly to your bank account.</p>
            </div>
            <div className={styles.dashboardItem} id="transactions">
              <FaExchangeAlt size={40} />
              <h3>Transactions</h3>
              <p>View your recent transaction history.</p>
            </div>
            <div className={styles.dashboardItem} id="scan-to-pay">
              <FaCamera size={40} />
              <h3>Scan to Pay</h3>
              <p>Use QR codes for quick and easy payments.</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
