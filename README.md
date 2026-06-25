# 🔐 Authentication Backend (Practice Project)

A beginner-friendly backend authentication project built while learning backend development with **Node.js**, **Express.js**, **MongoDB**, **JWT**, and **Cookies**.

This project focuses on understanding how authentication works in real-world applications using JSON Web Tokens and secure HTTP cookies.

---

## 🚀 Features

- 👤 User Registration
- 🔑 User Login
- 🍪 JWT stored in HTTP Cookies
- 🔒 Protected Routes using Middleware
- 🚪 User Logout
- 🔐 Password Hashing with bcrypt
- 📦 MongoDB Database Integration
- ⚡ REST API Architecture

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (jsonwebtoken)
- bcrypt
- cookie-parser
- dotenv
- Nodemon

---

## 📂 Project Structure

```text
authentication-backend/
│
├── node_modules/
│
├── src/
│   ├── controllers/
│   │   └── auth.controller.js
│   │
│   ├── db/
│   │   └── db.js
│   │
│   ├── models/
│   │   └── user.model.js
│   │
│   ├── routes/
│   │   ├── auth.routes.js
│   │   └── post.routes.js
│   │
│   └── app.js
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── server.js
```

---

## 📁 Folder Structure

| Folder/File | Description |
|--------------|-------------|
| `controllers/` | Contains request handling logic. |
| `db/` | MongoDB database connection configuration. |
| `models/` | Mongoose schemas and models. |
| `routes/` | API route definitions. |
| `app.js` | Express application configuration. |
| `server.js` | Entry point of the application. |
| `.env` | Environment variables. |

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/Bishal-Sutradhar/authentication-backend.git
```

### 2. Navigate to the project folder

```bash
cd authentication-backend
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create a `.env` file

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 5. Start the development server

```bash
npm run dev
```

---

## 📌 API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/register` | Register a new user |
| POST | `/login` | Login user |
| GET | `/profile` | Access protected route |
| POST | `/logout` | Logout user |

> **Note:** Update these endpoints according to your project structure.

---

## 🔐 Authentication Flow

1. User registers with an email and password.
2. Password is securely hashed using **bcrypt**.
3. User logs in with valid credentials.
4. Server generates a **JWT (JSON Web Token)**.
5. JWT is stored inside an **HTTP-only Cookie**.
6. Protected routes verify the token using authentication middleware.
7. User logs out by clearing the authentication cookie.

---

## 📚 What I Learned

During this project, I learned:

- Building REST APIs with Express.js
- MongoDB integration using Mongoose
- JWT Authentication
- Cookie-based Authentication
- Password Hashing with bcrypt
- Express Middleware
- Environment Variables using dotenv
- Backend Project Structure

---

## 🎯 Purpose

This repository is part of my backend development learning journey. The goal is to understand authentication from scratch before building full-stack MERN applications.

---

## 🚀 Future Improvements

- Email Verification
- Forgot Password
- Password Reset
- Refresh Tokens
- Role-Based Authentication
- User Profile Update
- File Upload
- Request Validation
- Rate Limiting
- Unit Testing

---

## 🤝 Contributing

This project is created for learning purposes. Suggestions and improvements are always welcome.

---

## 📄 License

This project is licensed under the MIT License.
