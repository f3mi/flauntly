import React from 'react';

const QRCode = ({ 
  value, 
  size = 128, 
  title = 'QR Code',
  description = 'Scan to access',
  className = '' 
}) => {
  // In a real app, you would use a QR code library like 'qrcode' or 'react-qr-code'
  // For now, we'll create a placeholder QR code design
  
  const generateQRPattern = () => {
    const patterns = [];
    const gridSize = 21; // Standard QR code is 21x21 for version 1
    
    for (let i = 0; i < gridSize; i++) {
      const row = [];
      for (let j = 0; j < gridSize; j++) {
        // Create a pseudo-random pattern based on position
        const isBlack = (i + j) % 3 === 0 || (i * j) % 5 === 0;
        row.push(isBlack);
      }
      patterns.push(row);
    }
    
    return patterns;
  };

  const pattern = generateQRPattern();

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div 
        className="bg-white p-4 rounded-lg shadow-md border"
        style={{ width: size + 32, height: size + 32 }}
      >
        <div 
          className="grid gap-0 bg-white"
          style={{ 
            width: size, 
            height: size,
            gridTemplateColumns: `repeat(21, 1fr)`,
            gridTemplateRows: `repeat(21, 1fr)`
          }}
        >
          {pattern.map((row, i) =>
            row.map((cell, j) => (
              <div
                key={`${i}-${j}`}
                className={`${cell ? 'bg-black' : 'bg-white'}`}
                style={{ aspectRatio: '1' }}
              />
            ))
          )}
        </div>
      </div>
      
      {title && (
        <div className="mt-3 text-center">
          <h3 className="font-semibold text-gray-900 text-sm">{title}</h3>
          {description && (
            <p className="text-xs text-gray-600 mt-1">{description}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default QRCode; 