import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaSignOutAlt, FaUniversity, FaCrown } from 'react-icons/fa';
import AccountOverviewChart from '../components/AccountOverviewChart'; // Import the chart
import styles from '../styles/DashboardPage.module.css'; // Import the styles

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
              <Link to="/transfer">Transfer</Link>
            </li>
            <li>
              <Link to="/withdraw">Withdraw</Link>
            </li>
            <li>
              <Link to="/transactions">Transactions</Link>
            </li>
            <li>
              <Link to="/scan-to-pay">Scan to Pay</Link>
            </li>
          </ul>
        </aside>

        {/* Main Dashboard */}
        <main className={styles.dashboardMain}>
          <h1>Welcome to ByteBank</h1>

          {/* Profile Card */}
          <div className={styles.profileCard}>
            <FaUserCircle size={60} className={styles.profileIcon} />
            <div className={styles.profileInfo}>
              <h2>User Name</h2>
              <p>user@email.com</p>
              <p>South Africa</p>
            </div>
          </div>

          {/* Account Cards */}
          <div className={styles.accountCards}>
            <div className={`${styles.accountCard} ${styles.savingsCard}`}>
              <div className={styles.cardLogo}>
                <FaUniversity size={24} />
                <span>ByteBank</span>
              </div>
              <h2>Savings Account</h2>
              <p>Account No: 1234 5678 9012</p>
              <p className={styles.accountBalance}>R5,250.75</p>
            </div>
            <div className={`${styles.accountCard} ${styles.premiumCard}`}>
              <div className={styles.cardLogo}>
                <FaCrown size={24} />
                <span>ByteBank Premium</span>
              </div>
              <h2>Premium Account</h2>
              <p>Account No: 9876 5432 1098</p>
              <p className={styles.accountBalance}>R12,340.50</p>
            </div>
          </div>

          {/* Account Overview Section */}
          <div className={styles.accountOverview}>
            <h3>Account Overview</h3>
            <AccountOverviewChart /> {/* Render the Chart */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
