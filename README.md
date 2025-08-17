# NexuStore - Premium E-commerce Platform

[![Live Demo](https://img.shields.io/badge/Live%20Demo-nexustore--phi.vercel.app-blue)](https://nexustore-phi.vercel.app/)
[![React](https://img.shields.io/badge/React-18.3.3-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.11-blue)](https://tailwindcss.com/)

## 🏪 What is NexuStore?

NexuStore is a modern, full-featured e-commerce platform built specifically for the Philippine market. It offers a premium shopping experience with comprehensive product categories, secure authentication, and responsive design. This project demonstrates advanced frontend development skills with React, TypeScript, and modern web technologies.

> **⚠️ Frontend-Only Implementation**: This project is a complete frontend demonstration using mock data and local storage. It does not include backend services, databases, or real payment processing. All data is simulated for showcase purposes.

## 🌐 Live Demo
**Website**: [https://nexustore-ecommerce.vercel.app/](https://nexustore-ecommerce.vercel.app/)

---

## 📋 Table of Contents
- [🏪 What is NexuStore?](#-what-is-nexustore)
- [🌐 Live Demo](#-live-demo)
- [✨ Features](#-features)
- [🛠️ Technology Stack](#️-technology-stack)
- [🚀 Getting Started](#-getting-started)
- [📁 Project Structure](#-project-structure)
- [🎨 Design System](#-design-system)
- [🌏 Philippine Market Focus](#-philippine-market-focus)
- [📱 Mobile Responsiveness](#-mobile-responsiveness)
- [🔒 Security Features](#-security-features)
- [🚀 Deployment](#-deployment)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [👨‍💻 Author](#-author)
- [🙏 Acknowledgments](#-acknowledgments)

---

## ✨ Features

### 🛍️ **E-commerce Core**
- **Product Catalog**: 50+ products across 10 categories (Fashion, Electronics, Photography, etc.)
- **Advanced Search**: Global search with real-time suggestions and filtering
- **Shopping Cart**: Persistent cart with local storage, quantity management, and product options
- **Wishlist**: Save favorite products with heart icon toggle functionality
- **Checkout Process**: Multi-step checkout with address and payment forms

### 🔐 **Authentication & Security**
- **Frontend Authentication**: Complete login/register system with local storage persistence (mock implementation)
- **Protected Routes**: Secure access to profile, orders, and checkout pages
- **User Profiles**: Editable user profiles with settings management (stored locally)
- **Security Features**: Input validation, XSS protection, and secure session handling (frontend-only)

### 📱 **Responsive Design**
- **Mobile-First**: Optimized for all screen sizes with custom breakpoints
- **Modern UI**: Clean, minimalist design using shadcn/ui components
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support
- **Performance**: Optimized images, lazy loading, and efficient rendering

### 🏪 **Product Categories**
- Fashion & Apparel
- Electronics & Gadgets
- Photography Equipment
- Computers & Accessories
- Baby & Kids Products
- Tools & Hardware
- Audio Equipment
- Wearables & Smartwatches
- Sports & Fitness
- Accessories

### 💳 **Payment & Checkout**
- **Multiple Payment Methods**: Credit/Debit cards and Cash on Delivery (UI simulation)
- **Secure Processing**: Frontend payment form validation (no real payment processing)
- **Order Management**: Complete order history and tracking (stored locally)
- **Address Management**: Multiple shipping addresses support (local storage)

### 📄 **Content Pages**
- **Customer Service**: Help Center, Shipping Info, Returns & Refunds
- **Company Info**: About Us, Careers, Press & News, Investors
- **Legal**: Privacy Policy, Terms of Service, Cookie Policy, Security

---

## 🛠️ Technology Stack

### **Frontend**
- **React 18.3.3** - Modern React with hooks and functional components
- **TypeScript 5.5.3** - Type-safe development
- **Vite** - Fast build tool and development server
- **React Router 6.26.2** - Client-side routing

### **UI & Styling**
- **Tailwind CSS 3.4.11** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **Lucide React** - Beautiful SVG icons
- **Custom Design System** - Consistent colors, spacing, and typography

### **State Management**
- **React Context API** - Authentication, Cart, and Search state
- **Local Storage** - Persistent cart and user session data (frontend-only persistence)
- **Mock Data** - Static product catalog and simulated API responses

### **Development Tools**
- **ESLint** - Code linting and formatting
- **TypeScript ESLint** - TypeScript-specific linting rules
- **Vite SWC** - Fast compilation with SWC

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- Git

### Installation
1. **Clone the repository**
```bash
git clone <repository-url>
cd nexustore
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
```
http://localhost:8080
```

### Build for Production
```bash
npm run build
npm run preview
```

---

## 📁 Project Structure
```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── home/           # Homepage sections
│   ├── checkout/       # Checkout process components
│   └── ...
├── pages/              # Page components
│   ├── categories/     # Category-specific pages
│   └── ...
├── contexts/           # React Context providers
│   ├── AuthContext.tsx
│   ├── CartContext.tsx
│   └── SearchContext.tsx
├── data/               # Mock data and product catalog (static JSON)
├── utils/              # Utility functions
├── hooks/              # Custom React hooks
└── lib/                # Library configurations
```

---

## 🎨 Design System

### **Color Palette**
- **Primary**: Modern black and white theme
- **Accent**: Subtle grays and premium highlights
- **Status**: Success, warning, and error states

### **Typography**
- **Headings**: Bold, modern font weights
- **Body**: Clean, readable text with proper line heights
- **UI Elements**: Consistent sizing and spacing

### **Components**
- **Cards**: Elevated surfaces with subtle shadows
- **Buttons**: Multiple variants (primary, secondary, outline)
- **Forms**: Accessible inputs with validation states
- **Navigation**: Sticky header with category navigation

---

## 🌏 Philippine Market Focus

### **Localization**
- **Currency**: Philippine Peso (₱) formatting
- **Shipping**: Nationwide delivery coverage
- **Payment**: Local payment methods and COD
- **Content**: Philippines-specific product descriptions

### **Business Features**
- **Free Shipping**: Orders over ₱1,500
- **Customer Support**: 24/7 assistance
- **Return Policy**: 30-day returns
- **Warranty**: Comprehensive product warranties

---

## 📱 Mobile Responsiveness

### **Breakpoints**
- **Mobile**: 425px and below
- **Tablet**: 768px
- **Laptop Small**: 1024px
- **Laptop Medium**: 1280px
- **Laptop Large**: 1440px

### **Mobile Features**
- Collapsible navigation menu
- Touch-friendly product cards
- Optimized checkout flow
- Responsive image galleries

---

## 🔒 Security Features
> **Note**: Security features listed below are frontend implementations and demonstrations. Real-world deployment would require backend security measures.

### **Data Protection**
- **Local Encryption**: Client-side data encoding for demonstration
- **Session Security**: Frontend token management (local storage)
- **Input Validation**: XSS and injection prevention (frontend validation)
- **Privacy**: GDPR-ready data handling patterns (UI implementation)

### **Payment Security**
- **Form Validation**: Secure payment form validation (frontend-only)
- **Card Masking**: Only last 4 digits displayed (UI demonstration)
- **Mock Processing**: Simulated payment processing for demo purposes
- **Security UI**: 3D Secure and fraud detection interface examples

---

## 🚀 Deployment
The application is deployed on **Vercel** with automatic deployments from the main branch. Since this is a frontend-only application, no backend infrastructure or database setup is required.

**Live URL**: [https://nexustore-ecommerce.vercel.app/](https://nexustore-ecommerce.vercel.app/)

### Deploy Your Own
1. Fork this repository
2. Connect to Vercel
3. Deploy with default settings (static site)
4. Optional: Add custom domain

> **Note**: This is a static frontend deployment. For a production e-commerce site, you would need to integrate with backend services, databases, and real payment processors.

---

## 🤝 Contributing
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License
This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**CJ Jutba**
- 🌐 **Portfolio**: [https://cjjutba.com/](https://cjjutba.com/)
- 💼 **LinkedIn**: [https://www.linkedin.com/in/cjjutba/](https://www.linkedin.com/in/cjjutba/)
- 🐙 **GitHub**: [https://github.com/cjjutba](https://github.com/cjjutba)
- 📧 **Email**: [hello@cjjutba.com](mailto:hello@cjjutba.com)

---

## 🙏 Acknowledgments
- **shadcn/ui** for the beautiful component library
- **Tailwind CSS** for the utility-first CSS framework
- **Lucide** for the comprehensive icon set
- **Vercel** for seamless deployment and hosting

---
**Built with ❤️ for the Philippine e-commerce market**
