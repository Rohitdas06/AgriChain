import React, { useState, useRef, useEffect } from 'react';
import QrScanner from 'qr-scanner';
import { motion } from 'framer-motion';

const QRCodeScanner = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState(null);
  const [scanHistory, setScanHistory] = useState([]);
  const videoRef = useRef(null);
  const qrScannerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (qrScannerRef.current) {
        qrScannerRef.current.destroy();
      }
    };
  }, []);

  const startScanning = async () => {
    try {
      setIsScanning(true);
      setScanResult(null);
      
      if (videoRef.current) {
        qrScannerRef.current = new QrScanner(
          videoRef.current,
          (result) => {
            setScanResult(result.data);
            setIsScanning(false);
            qrScannerRef.current?.stop();
            
            // Add to scan history
            const newScan = {
              id: Date.now(),
              data: result.data,
              timestamp: new Date().toISOString(),
              status: 'success'
            };
            setScanHistory(prev => [newScan, ...prev.slice(0, 9)]); // Keep last 10 scans
          },
          {
            highlightScanRegion: true,
            highlightCodeOutline: true,
            preferredCamera: 'environment'
          }
        );
        
        await qrScannerRef.current.start();
      }
    } catch (error) {
      console.error('Error starting QR scanner:', error);
      alert('Failed to start camera. Please ensure camera permissions are granted.');
      setIsScanning(false);
    }
  };

  const stopScanning = () => {
    setIsScanning(false);
    qrScannerRef.current?.stop();
  };

  const clearHistory = () => {
    setScanHistory([]);
  };

  const simulateScan = () => {
    const mockData = [
      'BATCH-TOMATO-001',
      'Farm A, Nashik, Maharashtra, India',
      '2024-01-15',
      '0x1234567890abcdef1234567890abcdef12345678'
    ];
    const randomData = mockData[Math.floor(Math.random() * mockData.length)];
    
    setScanResult(randomData);
    const newScan = {
      id: Date.now(),
      data: randomData,
      timestamp: new Date().toISOString(),
      status: 'success'
    };
    setScanHistory(prev => [newScan, ...prev.slice(0, 9)]);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">QR Code Scanner</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Scanner Section */}
          <div className="space-y-6">
            <div className="text-center">
              {!isScanning ? (
                <div className="space-y-4">
                  <div className="w-64 h-64 bg-gray-100 rounded-xl flex items-center justify-center mx-auto">
                    <span className="text-6xl">📱</span>
                  </div>
                  <div className="space-y-3">
                    <button
                      onClick={startScanning}
                      className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-4 px-6 rounded-xl hover:from-blue-700 hover:to-green-700 transition-all duration-200 flex items-center justify-center space-x-2"
                    >
                      <span>📷</span>
                      <span>Start Camera Scan</span>
                    </button>
                    <button
                      onClick={simulateScan}
                      className="w-full bg-gray-600 text-white py-4 px-6 rounded-xl hover:bg-gray-700 transition-all duration-200 flex items-center justify-center space-x-2"
                    >
                      <span>🎯</span>
                      <span>Simulate Scan</span>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="relative w-full h-64 bg-black rounded-xl overflow-hidden">
                    <video ref={videoRef} className="w-full h-full object-cover"></video>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-48 h-48 border-2 border-white border-dashed rounded-lg"></div>
                    </div>
                  </div>
                  <button
                    onClick={stopScanning}
                    className="w-full bg-red-600 text-white py-4 px-6 rounded-xl hover:bg-red-700 transition-all duration-200"
                  >
                    Stop Scanning
                  </button>
                </div>
              )}
            </div>

            {/* Scan Result */}
            {scanResult && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-50 border border-green-200 rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-green-800 mb-2">Scan Result</h3>
                <div className="bg-white rounded-lg p-4 border border-green-200">
                  <p className="text-sm font-mono text-gray-900 break-all">{scanResult}</p>
                </div>
                <div className="mt-4 flex space-x-3">
                  <button
                    onClick={() => navigator.clipboard.writeText(scanResult)}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm"
                  >
                    Copy
                  </button>
                  <button
                    onClick={() => setScanResult(null)}
                    className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors text-sm"
                  >
                    Clear
                  </button>
                </div>
              </motion.div>
            )}
          </div>

          {/* Scan History */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Recent Scans</h3>
              {scanHistory.length > 0 && (
                <button
                  onClick={clearHistory}
                  className="text-sm text-red-600 hover:text-red-700 transition-colors"
                >
                  Clear History
                </button>
              )}
            </div>

            {scanHistory.length > 0 ? (
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {scanHistory.map((scan) => (
                  <motion.div
                    key={scan.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-gray-50 rounded-lg p-4 border border-gray-200"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-green-600">✅</span>
                        <span className="text-sm font-medium text-gray-900">Success</span>
                      </div>
                      <span className="text-xs text-gray-500">
                        {new Date(scan.timestamp).toLocaleTimeString()}
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 font-mono break-all">{scan.data}</p>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <span className="text-4xl">📱</span>
                <p className="text-gray-500 mt-2">No scans yet</p>
                <p className="text-sm text-gray-400">Start scanning to see results here</p>
              </div>
            )}

            {/* Instructions */}
            <div className="bg-blue-50 rounded-xl p-6">
              <h4 className="font-semibold text-blue-800 mb-3">How to Use</h4>
              <ul className="text-sm text-blue-700 space-y-2">
                <li>• Click "Start Camera Scan" to use your device camera</li>
                <li>• Point the camera at a QR code to scan it</li>
                <li>• Use "Simulate Scan" to test with sample data</li>
                <li>• Scanned data will appear in the result section</li>
                <li>• View your scan history below</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRCodeScanner;
