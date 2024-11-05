# 254Outfit

254Outfit is a multi-vendor eCommerce platform dedicated to selling and purchasing the latest outfits in Kenya. Built with modern web technologies including Node.js, Next.js, TypeScript, Hono, and PostgreSQL, this platform supports multiple vendors, allowing them to list their products and enabling customers to browse, purchase, and review the latest fashion trends in Kenya.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
- [Folder Structure](#folder-structure)
- [Scripts](#scripts)
- [API Documentation](#api-documentation)
- [Database Schema](#database-schema)
- [License](#license)

---

## Project Overview

254Outfit is a full-featured eCommerce application that facilitates a marketplace for multiple vendors. Vendors can sign up to list their products, manage inventory, and view order histories. Customers can browse various products by category, view product details, add items to their carts, make purchases, and review past purchases. The goal of this platform is to streamline the buying and selling of the latest outfits in Kenya, making it convenient and accessible.

## Features

- **User Authentication**: Secure signup, login, and password reset functionality for vendors and customers.
- **Vendor Management**: Separate dashboards for vendors to manage their product listings and orders.
- **Product Listings**: Rich product detail pages with images, prices, descriptions, and stock levels.
- **Shopping Cart**: Add to cart, update quantities, and remove items from the cart.
- **Order Processing**: Secure checkout process with order summary and payment integration.
- **Review System**: Customers can review products they've purchased.
- **Responsive UI**: Mobile-first design, optimized for a seamless shopping experience across devices.

## Tech Stack

- **Frontend**: Next.js (React-based)
- **Backend**: Node.js, Hono (minimalist web framework)
- **Database**: PostgreSQL
- **Languages**: TypeScript
- **Styling**: TailwindCSS, Shadcn UI components
- **Form Validation**: Zod
- **Google API Integrations**: For user management, analytics, and other integrations

## Getting Started

### Prerequisites

To set up and run this project, you need to have the following installed:

- [Node.js](https://nodejs.org/) >= 16.x
- [PostgreSQL](https://www.postgresql.org/) >= 13
- [Git](https://git-scm.com/)
- [npm](https://npmjs.com/) (recommended) or yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/devalentineomonya/254Outfit.git
   cd 254Outfit
   ```

2. **Install dependencies**:
   ```bash
   yarn install
   ```

3. **Set up the database**:
   - Create a PostgreSQL database and configure the connection string in the `.env` file.
   - Run migrations to set up the required tables.

4. **Configure Environment Variables**:
   - Copy `.env.example` to `.env` and update with your database and API credentials.

### Environment Variables

The following environment variables are required for this project:

- `DATABASE_URL`: PostgreSQL connection URL.
- `GOOGLE_API_KEY`: Google API key for integration.
- `NODE_ENV`: The environment mode (development or production).

## Folder Structure

```plaintext
254Outfit
├── components       # Reusable React components
├── pages            # Next.js pages
├── public           # Public assets (e.g., images, fonts)
├── server           # Backend server setup with Hono
├── utils            # Utility functions
├── drizzle           # ORM configuration and migrations
├── .env             # Environment variables
├── next.config.js   # Next.js configuration
├── tsconfig.json    # TypeScript configuration
└── README.md
```

## Scripts

- `yarn dev`: Start the application in development mode.
- `yarn build`: Build the application for production.
- `yarn start`: Start the application in production mode.
- `yarn lint`: Run ESLint for code quality checks.
- `yarn test`: Run tests.

## API Documentation

The API for 254Outfit is built with Hono and exposes the following endpoints:

### Authentication

- `POST /api/auth/signup`: Register a new user (vendor or customer).
- `POST /api/auth/login`: Login with email and password.
- `POST /api/auth/logout`: Logout the current user.

### Products

- `GET /api/products`: Get all products.
- `POST /api/products`: Add a new product (vendor only).
- `GET /api/products/:id`: Get product details by ID.
- `PUT /api/products/:id`: Update a product (vendor only).
- `DELETE /api/products/:id`: Delete a product (vendor only).

### Cart

- `GET /api/cart`: Get current user's cart.
- `POST /api/cart`: Add an item to the cart.
- `DELETE /api/cart/:itemId`: Remove an item from the cart.

### Orders

- `POST /api/orders`: Create a new order.
- `GET /api/orders`: Get all orders for the current user.

### Reviews

- `POST /api/reviews`: Submit a review for a product.
- `GET /api/reviews/:productId`: Get all reviews for a product.

Refer to the [API documentation](docs/API.md) for detailed information on request and response formats.

## Database Schema

The database schema includes the following tables:

- **Users**: Stores user information including authentication details.
- **Vendors**: Stores information about vendors.
- **Products**: Stores product details, pricing, and stock information.
- **Orders**: Stores order information including order status.
- **Reviews**: Stores customer reviews and ratings for products.

**Example Schema**:

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  role ENUM('customer', 'vendor') NOT NULL
);

CREATE TABLE vendors (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id),
  business_name VARCHAR(255),
  business_description TEXT
);

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  vendor_id INT REFERENCES vendors(id),
  name VARCHAR(255) NOT NULL,
  description TEXT,
  price DECIMAL(10, 2) NOT NULL,
  stock INT NOT NULL
);

CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id),
  status ENUM('pending', 'completed', 'canceled') NOT NULL,
  total DECIMAL(10, 2) NOT NULL
);

CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id),
  product_id INT REFERENCES products(id),
  rating INT CHECK (rating >= 1 AND rating <= 5),
  comment TEXT
);
```

## License

This project is licensed under the MIT License.