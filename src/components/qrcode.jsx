import React from 'react';
import { QRCode } from 'react-qrcode-logo';

const QRCodeComponent = ({ value }) => {
  return (
    <div className="flex items-center justify-center mt-4">
      <QRCode value={value} 
      size={256}/>
    </div>
  );
};

export default QRCodeComponent; 
