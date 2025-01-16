import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/BackButton.css'; // Create a separate CSS file for back button styles

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      className="back-button"
      name="back-button"
      onClick={() => navigate('/dashboard')}
    >
      Back to Dashboard
    </button>
  );
};

export default BackButton;
