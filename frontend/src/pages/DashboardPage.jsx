import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import AccountOverviewChart from "../components/AccountOverviewChart"; // Import the chart
import styles from "../styles/DashboardPage.module.css"; // Import the styles
import logoImage from '../assets/images/dash_logo.png';
import nfcImage from '../assets/images/contactless-1-svgrepo-com (1).svg';
import nfcImages from '../assets/images/contactless-1-svgrepo-com (2).svg';

const DashboardPage = () => {
  const [balance, setBalance] = useState({ savings: 0, premium: 0 });

  // Load balances from localStorage or default values
  useEffect(() => {
    const savedSavingsBalance = localStorage.getItem('savingsBalance');
    const savedPremiumBalance = localStorage.getItem('premiumBalance');
    
    if (savedSavingsBalance) {
      setBalance((prev) => ({ ...prev, savings: parseFloat(savedSavingsBalance) }));
    }

    if (savedPremiumBalance) {
      setBalance((prev) => ({ ...prev, premium: parseFloat(savedPremiumBalance) }));
    }
  }, []);

  const handleLogout = () => {
    alert("Logged out successfully!");
    window.location.href = "/login";
  };

  return (
    <div className={styles.dashboardPage}>
      {/* Header */}
      <header className={styles.dashboardHeader}>
        <div className={styles.headerLogo}>
          <img src={logoImage} alt="ByteBank Logo" className={styles.logoImage} />
        </div>
        <div className={styles.headerUser}>
          <FaUserCircle size={80} />
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
            <li><Link to="/deposit">Deposit</Link></li>
            <li><Link to="/transfer">Transfer</Link></li>
            <li><Link to="/withdraw">Withdraw</Link></li>
            <li><Link to="/transactions">Transactions</Link></li>
            <li><Link to="/scan-to-pay">Scan to Pay</Link></li>
          </ul>
        </aside>

        {/* Main Dashboard */}
        <main className={styles.dashboardMain}>
          {/* Profile Card */}
          <div className={styles.profileCard}>
            <div className={styles.profileInfo}>
              <h2 className={styles.greeting}>Account Overview</h2>
            </div>
          </div>

          {/* Cards Section */}
          <div className={styles.cardsContainer}>
            <div className={styles.card}>
              <div className={`${styles.face} ${styles.front}`}>
                <h1 className={styles.debit}>Savings Account</h1>
                <br />
                <h1 className={styles.bank}>ByteBank</h1>
                <br />
                <img src="https://i.postimg.cc/P5cFc3yj/Chip.jpg" className={styles.Chip} alt="Chip" />
                <img src={nfcImage} alt="contactless icon" className={styles.nfcImg} />
                <br />
                <h1 className={styles.number}>1234 5678 9876 5432</h1>
                <h2 className={styles.Valid}>
                  <span>Valid<br />Thru</span>
                  <span>05/25</span>
                </h2>
                <br />
                <h2 className={styles.cardholder}>MISS LL JELE-MASEMOLA</h2>
                <div className={styles.cardCircles}>
                  <div className={`${styles.circle}`}></div>
                  <div className={`${styles.circle} ${styles.second}`}></div>
                </div>
              </div>
             
              <div className={`${styles.face} ${styles.back}`}>
                <div className={styles.blackbar}></div>
                <div className={styles.ccvtext}>
                  <h2>Authorized Signature - Not valid unless signed</h2>
                  <div className={styles.whitebar}></div>
                  <div className={styles.ccv}>432</div>
                </div>
                <p className={styles.text}>
                  Branch Code: 123456<br />
                  24hr Client Care Centre: South Africa 0810 347 890<br />
                  International +27 11 123 4567<br />
                  This card is the property of ByteBank and must be returned
                </p>
              </div>
            </div>

            <div className={styles.card}>
              <div className={`${styles.face} ${styles.fronts}`}>
                <h1 className={styles.credit}>Premium Account</h1>
                <br />
                <h1 className={styles.bank}>ByteBank</h1>
                <img src="https://i.postimg.cc/P5cFc3yj/Chip.jpg" className={styles.Chip} alt="Chip" />
                <img src={nfcImages} alt="contactless icon" className={styles.nfcImg} />
                <br />
                <h1 className={styles.number}>2345 6789 1234 8765</h1>
                <h2 className={styles.Valid}>
                  <span>Valid<br />Thru</span>
                  <span>06/26</span>
                </h2>
                <br />
                <h2 className={styles.cardholder}>MISS LL JELE-MASEMOLA</h2>
                <div className={styles.cardCircles}>
                  <div className={`${styles.circle}`}></div>
                  <div className={`${styles.circle} ${styles.second}`}></div>
                </div>
              </div>
              
              <div className={`${styles.face} ${styles.back}`}>
                <div className={styles.blackbar}></div>
                <div className={styles.ccvtext}>
                  <h2>Authorized Signature - Not valid unless signed</h2>
                  <div className={styles.whitebar}></div>
                  <div className={styles.ccv}>123</div>
                </div>
                <p className={styles.text}>
                  Branch Code: 123456<br />
                  24hr Client Care Centre: South Africa 0800 000 000<br />
                  International +27 11 123 4567<br />
                  This card is the property of ByteBank and must be returned
                </p>
              </div>
            </div>
          </div>

          {/* Account Balances Section */}
          <div className={styles.balanceSection}>
            <div className={styles.balanceCard}>
              <h4>Savings Account Balance</h4>
              <p className={styles.balanceAmount}>R{balance.savings.toFixed(2)}</p>
            </div>
            <div className={styles.balanceCard}>
              <h4>Premium Account Balance</h4>
              <p className={styles.balanceAmount}>R{balance.premium.toFixed(2)}</p>
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
