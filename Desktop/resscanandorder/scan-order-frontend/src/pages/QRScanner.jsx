import React, { useState } from 'react';
import QrReader from 'react-qr-reader';
import { useNavigate } from 'react-router-dom';

const QRScanner = () => {
  const [scanResult, setScanResult] = useState(null);
  const navigate = useNavigate();

  const handleScan = (data) => {
    if (data) {
      setScanResult(data);
      localStorage.setItem('tableId', data);
      navigate('/menu'); // go to menu page
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-gold">
      <h2 className="text-2xl mb-4">Scan Your Table QR</h2>
      <div className="w-[300px]">
        <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: '100%' }}
        />
      </div>
      {scanResult && <p className="mt-4">Scanned Table ID: {scanResult}</p>}
    </div>
  );
};

export default QRScanner;