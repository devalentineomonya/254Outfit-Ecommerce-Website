# 254Outfit E-commerce Website

Welcome to the **254Outfit E-commerce Website** repository! This project is a specialized e-commerce platform designed exclusively for outfit shopping within Kenya (254). It provides a seamless shopping experience with features tailored for users in Kenya, integrating modern web technologies and secure payment options.

## Features

### Core Features
- **Browse and Purchase Outfits:** Explore a wide range of outfits specifically curated for the Kenyan market.
- **User-Friendly Product Search:** Search for outfits by category, size, color, or occasion.
- **Secure Payment Integration:** Process payments securely via Paystack.
- **Order Management:** Track your orders and receive real-time updates.
- **Responsive Design:** Enjoy a smooth shopping experience on both desktop and mobile devices.

### Admin Features
- Manage products (add, edit, delete, and update inventory).
- View and manage customer orders.
- Monitor sales performance and generate reports.

### Payment Integration
- **[Paystack](https://paystack.com):** A secure and reliable payment gateway for processing transactions in Kenyan Shillings.

### Localized Features
- Content and pricing tailored for the Kenyan market.
- Support for local delivery options.

## Technologies Used

### Frontend
- **Next.js 15:** A modern React framework with server-side rendering and static site generation for enhanced performance.
- **TypeScript:** Ensuring type safety and improved developer productivity.

### Backend
- **Hono:** A fast, lightweight web framework for handling server-side API requests.

### Payment
- **Paystack:** For secure payment processing.

## Installation and Setup

Follow these steps to set up the project locally:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/devalentineomonya/254Outfit-Ecommerce-Website.git
   cd 254Outfit-Ecommerce-Website
   ```

2. **Install Dependencies:**
   Ensure you have Node.js and npm or Yarn installed, then run:
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the root directory and add the following:
   ```env
   DATABASE_URL=your_database_url
   PAYSTACK_SECRET_KEY=your_paystack_secret_key
   NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY=your_paystack_public_key
   ```

4. **Run the Development Server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   The application will be available at `http://localhost:3000`.

5. **Build for Production:**
   ```bash
   npm run build
   ```

## Folder Structure

```
.
├── components       # Reusable React components
├── pages            # Next.js pages
├── public           # Static assets
├── server           # Hono backend server
├── styles           # Global and component-specific styles
├── utils            # Helper functions and utilities
├── prisma           # Prisma schema for database management
└── .env             # Environment variables
```

## Deployment

1. Deploy the frontend on platforms like [Vercel](https://vercel.com).
2. Host the backend on your preferred server.
3. Use a cloud-hosted database for scalability.

## Contributing

Contributions are welcome! Follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- [Paystack](https://paystack.com)
- [Next.js](https://nextjs.org)
- [Hono](https://hono.dev)
- [TypeScript](https://www.typescriptlang.org)

## Author

Developed by [Valentine Omonya](https://github.com/devalentineomonya).
