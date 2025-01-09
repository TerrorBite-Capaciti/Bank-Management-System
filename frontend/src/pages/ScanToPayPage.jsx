import React, { useState } from 'react';
import QrScanner from 'react-qr-scanner';

const ScanToPayPage = () => {
  const [scanResult, setScanResult] = useState('');

  const handleScan = (data) => {
    if (data) {
      setScanResult(data.text);
      alert(`Payment processed for QR code: ${data.text}`);
    }
  };

  const handleError = (err) => {
    console.error(err);
    alert('Failed to access the camera.');
  };

  const previewStyle = {
    height: 240,
    width: 320,
  };

  return (
    <div>
      <h1>Scan to Pay</h1>
      <p>Here you can scan QR codes to make payments.</p>
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
