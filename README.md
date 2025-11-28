# E-Commerce Web Application

A modern e-commerce platform built with Next.js, React, and TypeScript.

**Last Updated:** November 28, 2025

## 📋 Overview

This is a full-featured e-commerce web application that allows users to:
- Browse and search products
- View detailed product information
- Add items to cart and wishlist
- Place and track orders
- Manage user authentication and profiles
- Process payments

## 🛠️ Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Authentication:** NextAuth.js
- **Components:** React with Shadcn/UI
- **State Management:** React Context API
- **HTTP Client:** Fetch API
- **Icons:** Font Awesome

## 📁 Project Structure

```
src/
├── _components/       # Reusable UI components
│   ├── AddProductBtn/
│   ├── CategoriesSlider/
│   ├── footer/
│   ├── HomeSlider/
│   ├── navbar/
│   ├── ProductCard/
│   └── Searchbar/
├── _service/          # API services
│   ├── cart.service.ts
│   ├── Categories.Service.ts
│   ├── Orders.Service.ts
│   └── Products.Service.ts
├── app/               # Next.js pages and routes
│   ├── (Auth)/        # Authentication pages
│   ├── (pages)/       # Public pages (about, contact)
│   ├── allorders/     # Orders listing
│   ├── api/           # API routes
│   ├── cart/          # Cart page
│   ├── productDetails/ # Product detail pages
│   ├── wishlist/      # Wishlist page
│   └── layout.tsx     # Root layout
├── components/        # UI component library (Shadcn)
├── context/           # React context (cart, wishlist)
├── lib/              # Utility functions
├── next-auth/        # NextAuth configuration
└── types/            # TypeScript type definitions
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ (recommended 18+)
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd new-web
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables (if needed)
```bash
cp .env.example .env.local
```

4. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🔌 API Integration

The app integrates with the e-commerce API:
- **Base URL:** https://ecommerce.routemisr.com/api/v1
- **Endpoints:**
  - Products: `/products`
  - Categories: `/categories`
  - Orders: `/orders/user/{userId}`
  - Authentication: `/auth/signin`, `/auth/signup`

## 🔐 Authentication

- Uses NextAuth.js with credentials provider
- JWT-based token handling
- User session management
- Protected routes

## 💳 Features

### Product Management
- Browse all products with pagination
- Search and filter products by category
- View detailed product information with images
- Add to cart or wishlist

### Cart & Orders
- Persistent shopping cart
- Order placement with payment options
- View order history
- Track order status

### User Management
- User registration and login
- Profile management
- Order tracking
- Wishlist management

## 🎨 UI Components

The project uses Shadcn/UI components for consistent and accessible UI:
- Button, Input, Label, Form
- Table for displaying data
- Sonner for toast notifications

## 🚦 Status

✅ In Development

### Recent Updates
- Enhanced order cards with full details (items, shipping, payment)
- API integration for fetching user orders
- Product details page with image gallery
- Cart and wishlist functionality

## 📝 Notes

- The app fetches real data from the e-commerce API
- Images are loaded from external URLs
- Some features may require authentication
- Payment methods are simulated (cash on delivery)

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

This project is licensed under the MIT License.

---

**Created:** November 2025  
**Last Updated:** November 28, 2025
