import React, { useState } from 'react';
import QrScanner from 'react-qr-scanner';
import BackButton from "../components/BackButton"; 


const ScanToPayPage = () => {
  const [scanResult, setScanResult] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleScan = (data) => {
    if (data) {
      setIsProcessing(true); // Start processing animation
      setScanResult(data.text);

      //stimulate payment processing
      setTimeout(() => {
        alert(`Payment successful! ${data.text}`); // Show payment success message
        setIsProcessing(false); // Stop processing animation
        setScanResult('');//reset scan result
      }, 2000);
    }
  };

  const handleError = (err) => {
    console.error('QR Scanner Error:',err);
    alert('Failed to access the camera.');
  };

  const previewStyle = {
    height: 240,
    width: 320,
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
        <BackButton />
      <h1>Scan to Pay</h1>
      <p>Here you can scan QR codes to make payments.</p>
      {isProcessing && <p>Processing...</p>}
      <QrScanner
        delay={300}
        style={previewStyle}
        onError={handleError}
        onScan={handleScan}
      />
   
      {scanResult && <p>Scan Result: {scanResult}</p>}
    </div>
  );
};

export default ScanToPayPage;
