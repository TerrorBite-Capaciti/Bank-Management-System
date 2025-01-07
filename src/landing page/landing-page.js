import React, { useState } from "react";
import "./LandingPage.css";
import { Canvas } from "@react-three/fiber";
import { MeshWobbleMaterial } from "@react-three/drei";

const LandingPage = () => {
  const [isBack, setIsBack] = useState(false);

  return (
    <div className="landing-page">
      {/* Logo Section */}
      <div className="logo-container">
        <img src="/Byte Bank Logo.png" alt="Byte Bank Logo" className="logo" />
      </div>

      {/* Header Section */}
      <header className="landing-page-header">
        <h1>Manage Your Accounts</h1>
        <div className="slogan">
          <p>Your money,</p>
          <p>Your future,</p>
          <p>Your wealth</p>
        </div>
      </header>

      {/* Main Content */}
      <div className="main-content">
        {/* Left Section */}
        <div className="register-section">
          <p>Don't have an account?</p>
          <button className="btn">Register</button>
        </div>

        {/* Divider */}
        <div className="divider"></div>

        {/* Right Section */}
        <div className="sign-in-section">
          <p>Already have an account?</p>
          <button className="btn">Sign In</button>
        </div>
      </div>

      {/* 3D Card Design */}
      <div className="card-container">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[0, 10, 5]} />
          <mesh rotation={[0, 1, 0]}>
            <boxGeometry args={[3.5, 2.2, 0.1]} />
            <MeshWobbleMaterial attach="material" factor={1} speed={2} color="#FF3131" />
          </mesh>
        </Canvas>

        <div className={`card ${isBack ? "back" : "front"}`}>
          {isBack ? (
            <div className="card-back">
              <div className="black-stripe"></div>
              <div className="cvv">
                <span>CVV:</span> 123
              </div>
              <div className="expiry">
                <span>Expires:</span> 12/26
              </div>
              <p className="long-numbers">1234 5678 9012 3456</p>
            </div>
          ) : (
            <div className="card-front">
              <div className="chip"></div>
              <h2 className="bank-name">Byte Bank</h2>
              <p className="card-number">1234 5678 9012 3456</p>
              <div className="card-holder">
                <span>John Doe</span>
                <span>Debit Card</span>
              </div>
            </div>
          )}
        </div>
      </div>

      <button className="toggle-btn" onClick={() => setIsBack(!isBack)}>
        {isBack ? "View Front" : "View Back"}
      </button>
    </div>
  );
};

export default LandingPage;
