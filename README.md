# AgriChain - Blockchain Supply Chain Transparency Platform

A modern, professional web application for blockchain-based supply chain transparency in agriculture. Built with React, featuring role-based dashboards, QR code integration, and MetaMask wallet authentication.

## 🌟 Features

### Authentication & Roles
- **MetaMask Wallet Integration** - Secure blockchain authentication
- **Role-Based Access Control** - Farmer, Distributor, Retailer, Consumer, Admin
- **User Registration** - Admin-approved account creation
- **Secure Session Management** - Persistent authentication state

### Role-Based Dashboards

#### 🌾 Farmer Dashboard
- Add new products with detailed information
- Generate QR codes for each product batch
- Track product status and location
- View product history and analytics

#### 🚛 Distributor Dashboard
- Accept products from farmers
- Update transportation status
- Track shipments in real-time
- Monitor delivery schedules

#### 🏪 Retailer Dashboard
- Confirm product deliveries
- Update store inventory levels
- Print QR codes for packaging
- Manage product availability

#### 🛒 Consumer Dashboard
- Scan QR codes with camera
- View complete product journey timeline
- Verify product authenticity
- Track product history from farm to store

#### 🏛️ Admin Dashboard
- View all blockchain transactions
- Approve/reject user registrations
- Monitor system analytics
- Detect fraud and security issues

### Product Management
- **Product Timeline** - Visual step-by-step tracking
- **QR Code Generation** - Unique codes for each product
- **Blockchain Verification** - Immutable product records
- **Real-time Updates** - Live status tracking

### QR Code System
- **QR Generator** - Create codes for products and batches
- **QR Scanner** - Camera-based scanning with history
- **Print Support** - Generate printable QR codes
- **Batch Tracking** - Link products to blockchain records

### Support & Utilities
- **Profile Settings** - Manage account information
- **Notifications** - Real-time updates and alerts
- **Help & Support** - Comprehensive FAQ and guides
- **Error Handling** - Professional 404 and unauthorized pages

## 🚀 Technology Stack

- **Frontend**: React 19.1.1, Vite
- **Styling**: Tailwind CSS, Bootstrap, DaisyUI
- **Animations**: Framer Motion
- **QR Codes**: qrcode.react, qr-scanner
- **Blockchain**: MetaMask SDK, Ethers.js
- **Routing**: React Router DOM
- **Icons**: Bootstrap Icons, Lottie React

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd SIH-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

## 🔧 Configuration

### MetaMask Setup
1. Install MetaMask browser extension
2. Create or import a wallet
3. Ensure you're on the correct network
4. Grant camera permissions for QR scanning

### Environment Variables
Create a `.env` file in the root directory:
```env
VITE_APP_NAME=AgriChain
VITE_APP_VERSION=1.0.0
VITE_BLOCKCHAIN_NETWORK=mainnet
```

## 🎨 Design System

### Color Palette
- **Primary Blue**: #2563eb (Blockchain theme)
- **Primary Green**: #16a34a (Agriculture theme)
- **Accent Colors**: Purple, Orange, Red for different roles
- **Neutral**: Gray scale for text and backgrounds

### Typography
- **Headings**: Bold, modern sans-serif
- **Body**: Clean, readable text
- **Code**: Monospace for technical content

### Components
- **Cards**: Rounded corners, subtle shadows
- **Buttons**: Gradient backgrounds, hover effects
- **Forms**: Clean inputs with focus states
- **Navigation**: Responsive, role-based icons

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Tablet Support**: Enhanced layouts for tablets
- **Desktop**: Full-featured desktop experience
- **Touch Friendly**: Large touch targets and gestures

## 🔐 Security Features

- **Wallet Authentication**: MetaMask integration
- **Role-Based Access**: Granular permissions
- **Protected Routes**: Authentication guards
- **Data Encryption**: Secure data transmission
- **Fraud Detection**: Blockchain verification

## 🚀 Getting Started

### For Farmers
1. Connect MetaMask wallet
2. Select "Farmer" role
3. Add products with details
4. Generate QR codes
5. Track product journey

### For Consumers
1. Connect MetaMask wallet
2. Select "Consumer" role
3. Scan product QR codes
4. View product timeline
5. Verify authenticity

### For Administrators
1. Connect MetaMask wallet
2. Select "Admin" role
3. Approve user registrations
4. Monitor system analytics
5. Manage blockchain transactions

## 📊 Features Overview

### Dashboard Analytics
- Product statistics
- User activity metrics
- Transaction monitoring
- System health status

### QR Code Management
- Generate unique codes
- Print for packaging
- Scan with camera
- Track scan history

### Blockchain Integration
- Immutable records
- Transaction verification
- Smart contract integration
- Fraud detection

## 🛠️ Development

### Project Structure
```
src/
├── components/          # Reusable components
│   ├── dashboard/      # Role-specific dashboards
│   └── ...
├── contexts/           # React contexts
├── pages/             # Page components
│   ├── auth/          # Authentication pages
│   └── ...
└── assets/            # Static assets
```

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

- **Email**: support@agrichain.com
- **Phone**: +1 (555) 123-4567
- **Documentation**: Built-in help system
- **Issues**: GitHub Issues

## 🔮 Future Enhancements

- Mobile app development
- Advanced analytics dashboard
- IoT sensor integration
- Machine learning fraud detection
- Multi-language support
- API for third-party integrations

---

**AgriChain** - Trace • Trust • Thrive 🌾🔗