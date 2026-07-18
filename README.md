# eCommerce Backend

## Project Description

This project is a simple eCommerce backend built using Node.js, Express.js, MongoDB, and Mongoose. It provides REST APIs to manage products and shopping carts.

---

## Features

- Product CRUD Operations
- Shopping Cart Management
- MongoDB Database Integration
- Data Validation using Mongoose Schemas
- Database Seeding
- RESTful API

---

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- Nodemon

---

## Installation

1. Clone the repository

```bash
git clone <repository-url>
```

2. Install dependencies

```bash
npm install
```

3. Create a `.env` file

```env
PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/ecommerceDB
```

4. Start the server

```bash
npm run dev
```

---

## Seed the Database

```bash
npm run seed
```

---

## API Endpoints

### Products

- GET `/products`
- POST `/products`
- PUT `/products/:id`
- DELETE `/products/:id`

### Cart

- POST `/cart`
- GET `/cart/:id`
- POST `/cart/:id/items`

---

## Author

Malak Ahmed
