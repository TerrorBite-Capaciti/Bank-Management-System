import React from "react";
import { useNavigate } from "react-router-dom";
import './BackButton.css'; // Ensure the CSS is correctly imported

const BackButton = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <button className="back-button" onClick={handleBack}>
      Back to Dashboard
    </button>
  );
};

export default BackButton;
