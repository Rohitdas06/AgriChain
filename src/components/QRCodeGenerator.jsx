import React, { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { motion } from 'framer-motion';

const QRCodeGenerator = () => {
  const [qrData, setQrData] = useState('');
  const [qrSize, setQrSize] = useState(200);
  const [showDownload, setShowDownload] = useState(false);

  const generateQR = () => {
    if (qrData.trim()) {
      setShowDownload(true);
    }
  };

  const downloadQR = () => {
    const canvas = document.getElementById('qr-code-canvas');
    if (canvas) {
      const link = document.createElement('a');
      link.download = `qr-code-${Date.now()}.png`;
      link.href = canvas.toDataURL();
      link.click();
    }
  };

  const printQR = () => {
    window.print();
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">QR Code Generator</h2>
        
        <div className="space-y-6">
          {/* Input Section */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Enter data for QR code
            </label>
            <textarea
              value={qrData}
              onChange={(e) => setQrData(e.target.value)}
              placeholder="Enter product information, batch ID, or any data..."
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              rows={4}
            />
          </div>

          {/* Size Control */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              QR Code Size: {qrSize}px
            </label>
            <input
              type="range"
              min="100"
              max="400"
              value={qrSize}
              onChange={(e) => setQrSize(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          {/* Generate Button */}
          <button
            onClick={generateQR}
            disabled={!qrData.trim()}
            className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-3 px-6 rounded-xl hover:from-blue-700 hover:to-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          >
            Generate QR Code
          </button>

          {/* QR Code Display */}
          {showDownload && qrData && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center space-y-4"
            >
              <div className="bg-gray-50 rounded-xl p-6 inline-block">
                <QRCodeCanvas
                  id="qr-code-canvas"
                  value={qrData}
                  size={qrSize}
                  level="M"
                  includeMargin={true}
                />
              </div>
              
              <div className="flex space-x-4 justify-center">
                <button
                  onClick={downloadQR}
                  className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition-colors flex items-center space-x-2"
                >
                  <span>💾</span>
                  <span>Download</span>
                </button>
                <button
                  onClick={printQR}
                  className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors flex items-center space-x-2"
                >
                  <span>🖨️</span>
                  <span>Print</span>
                </button>
              </div>
            </motion.div>
          )}

          {/* Preset Examples */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Examples</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { label: 'Product Batch', data: 'BATCH-TOMATO-001' },
                { label: 'Farm Location', data: 'Farm A, California, USA' },
                { label: 'Harvest Date', data: '2024-01-15' },
                { label: 'Blockchain Hash', data: '0x1234567890abcdef...' }
              ].map((example, index) => (
                <button
                  key={index}
                  onClick={() => setQrData(example.data)}
                  className="p-4 border border-gray-200 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-colors text-left"
                >
                  <div className="font-medium text-gray-900">{example.label}</div>
                  <div className="text-sm text-gray-600 mt-1">{example.data}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRCodeGenerator;
