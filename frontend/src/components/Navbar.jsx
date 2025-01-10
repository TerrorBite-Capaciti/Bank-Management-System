@import url('https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

body {
  overflow: hidden;
}

.dashboardPage {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #1c1c25;
}

.dashboardHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
  background: #2c2c36;
  color: #fff;
}

.headerLogo {
  font-size: 24px;
  font-weight: 600;
}

.headerUser {
  display: flex;
  align-items: center;
}

.headerUser span {
  margin-left: 10px;
}

.logoutBtn {
  background: transparent;
  border: none;
  color: #fff;
  cursor: pointer;
  margin-left: 20px;
  font-size: 14px;
}

.dashboardContent {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  flex-wrap: wrap;
}

.sidebar {
  width: 250px;
  background: #2c2c36;
  padding: 20px;
  border-radius: 10px;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar ul li {
  margin-bottom: 15px;
}

.sidebarBtn {
  background: #333;
  color: #fff;
  border: none;
  padding: 10px 20px;
  width: 100%;
  text-align: left;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  transition: background 0.3s ease;
}

.sidebarBtn:hover {
  background: #1e1e25;
}

.cardsContainer {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.card {
  position: relative;
  width: 508px;
  height: 314px;
  transform-style: preserve-3d;
  perspective: 500px;
}

.face {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  transform-style: preserve-3d;
  transition: 1s;
  backface-visibility: hidden;
}

.front {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px;
}

.debit,
.bank {
  color: #fff;
}

.number {
  color: #fff;
  letter-spacing: 6px;
  font-weight: 500;
  font-size: 18px;
}

.Valid {
  position: absolute;
  bottom: 90px;
  left: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: medium;
  font-weight: 300;
  line-height: 1em;
  text-align: right;
}

.Valid span:last-child {
  margin-left: 20px;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 2px;
}

.cardholder {
  position: absolute;
  bottom: 40px;
  left: 40px;
  color: #fff;
  font-weight: 300;
  font-size: 16px;
  letter-spacing: 2px;
}

.back {
  background-color: #1c1c25;
  color: #fff;
  padding: 20px;
  transform: rotateY(180deg);
}

.blackbar {
  position: absolute;
  top: 40px;
  width: 100%;
  height: 60px;
  background: #000;
}

.ccvtext {
  position: absolute;
  top: 120px;
  left: 30px;
}

.ccvtext h2 {
  color: #fff;
  font-weight: 400;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.whitebar {
  position: relative;
  width: 400px;
  height: 40px;
  background: #fff;
  margin-top: 5px;
}

.ccv {
  position: relative;
  top: -35px;
  left: 395px;
  background: #ccc;
  color: #111;
  width: 50px;
  height: 30px;
  font-weight: 600;
  letter-spacing: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.text {
  position: absolute;
  bottom: 30px;
  left: 30px;
  right: 30px;
  color: #fff;
  font-size: 10px;
  line-height: 1.4em;
  font-weight: 300;
}

.Chip {
    max-width: 40px; /* Adjust the size of the chip */
    position: absolute;
    left: 50px; /* Positioning */
    top: 80px; /* Positioning */
  }
  

.card:hover .front {
  transform: rotateY(180deg);
}

.card:hover .back {
  transform: rotateY(360deg);
}

