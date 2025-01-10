import React from 'react';
import { FaUserCircle, FaSignOutAlt, FaUniversity, FaCrown } from 'react-icons/fa';
import styles from '../styles/DashboardPage.module.css';

const DashboardPage = () => {
  const handleLogout = () => {
    alert('Logged out successfully!');
    window.location.href = '/login';
  };

  return (
    <div className={styles.dashboardPage}>
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

      <div className={styles.dashboardContent}>
        <aside className={styles.sidebar}>
          <ul>
            <li><a href="/transfer">Transfer</a></li>
            <li><a href="/withdraw">Withdraw</a></li>
            <li><a href="/transactions">Transactions</a></li>
            <li><a href="/scan-to-pay">Scan to Pay</a></li>
          </ul>
        </aside>

        <main className={styles.dashboardMain}>
          <h1>Welcome to ByteBank</h1>

          <div className={styles.profileCard}>
            <FaUserCircle size={60} className={styles.profileIcon} />
            <div className={styles.profileInfo}>
              <h2>User Name</h2>
              <p>user@email.com</p>
              <p>South Africa</p>
            </div>
          </div>

          <div className={styles.accountCards}>
            <div className={`${styles.card} ${styles.savingsCard}`}>
              <div className="face front">
                <h1 className="debit">Debit Card</h1>
                <h1 className="bank">ByteBank</h1>
                <img src="/assets/logo.png" className="logo" alt="Bank Logo" />
                <img src="/assets/chip.jpg" className="chip" alt="Card Chip" />
                <h1 className="number">6789 2341 0956 3452</h1>
                <h2 className="valid"><span>Valid<br />Thru</span><span>05/24</span></h2>
                <h2 className="cardholder">John Doe</h2>
              </div>
              <div className="face back">
                <div className="blackbar"></div>
                <div className="ccvtext">
                  <h2>Authorized Signature</h2>
                  <div className="whitebar"></div>
                  <div className="ccv">432</div>
                </div>
                <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
