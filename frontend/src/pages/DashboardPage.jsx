import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import AccountOverviewChart from "../components/AccountOverviewChart"; // Import the chart
import styles from "../styles/DashboardPage.module.css"; // Import the styles

const DashboardPage = () => {
  const handleLogout = () => {
    alert("Logged out successfully!");
    window.location.href = "/login";
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
              <Link to="/deposit">Deposit</Link>
            </li>
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

          {/* Cards Section */}
          <div className={styles.cardsContainer}>
            <div className={styles.card}>
              <div className={`${styles.face} ${styles.front}`}>
                <h1 className={styles.debit}>Savings Account</h1>
                <br></br>
                <h1 className={styles.bank}>ByteBank</h1>
                <br></br>
                <img
                  src="https://i.postimg.cc/P5cFc3yj/Chip.jpg"
                  className={styles.Chip}
                  alt="Chip"
                />
                <br></br>
                <h1 className={styles.number}>1234 5678 9876 5432</h1>
                <h2 className={styles.Valid}>
                  <span>
                    Valid
                    <br />
                    Thru
                  </span>
                  <span>05/25</span>
                </h2>
                <br></br>
                <h2 className={styles.cardholder}>MISS LL JELE-MASEMOLA</h2>
              </div>
              <div className={styles.cardCircles}>
                <div className={`${styles.circle}`}></div>
                <div className={`${styles.circle} ${styles.second}`}></div>
              </div>
              <div className={`${styles.face} ${styles.back}`}>
                <div className={styles.blackbar}></div>
                <div className={styles.ccvtext}>
                  <h2>Authorized Signature - Not valid unless signed</h2>
                  <div className={styles.whitebar}></div>
                  <div className={styles.ccv}>432</div>
                </div>
                <p className={styles.text}>
                  Branch Code
                    : 123456<br></br>
                  24hr Client Care Centre: South Africa 0800 000 000
                   International +27 11 123 4567
                  <br></br>
                  This card is the property of ByteBank and must be returned
                </p>
              </div>
            </div>

            <div className={styles.card}>
              <div className={`${styles.face} ${styles.fronts}`}>
                <h1 className={styles.credit}>Premium Account</h1>
                <br></br>
                <h1 className={styles.bank}>ByteBank</h1>
                <img
                  src="https://i.postimg.cc/P5cFc3yj/Chip.jpg"
                  className={styles.Chip}
                  alt="Chip"
                />
                <br></br>
                <h1 className={styles.number}>2345 6789 1234 8765</h1>
                <h2 className={styles.Valid}>
                  <span>
                    Valid
                    <br />
                    Thru
                  </span>
                  <span>06/26</span>
                </h2>
                <br></br>
                <h2 className={styles.cardholder}>MR ST SHABANGU</h2>
              </div>
              <div className={styles.cardCircles}>
                <div className={`${styles.circle}`}></div>
                <div className={`${styles.circle} ${styles.second}`}></div>
              </div>
              <div className={`${styles.face} ${styles.back}`}>
                <div className={styles.blackbar}></div>
                <div className={styles.ccvtext}>
                  <h2>Authorized Signature - Not valid unless signed</h2>
                  <div className={styles.whitebar}></div>
                  <div className={styles.ccv}>123</div>
                </div>
                <p className={styles.text}>
                Branch Code
                    : 123456<br></br>
                  24hr Client Care Centre: South Africa 0800 000 000
                   International +27 11 123 4567
                  <br></br>
                  This card is the property of ByteBank and must be returned
                </p>
              </div>
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
