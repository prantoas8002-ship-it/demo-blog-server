# 🚀 Demo Blog Server

A simple Blog REST API built with **Node.js**, **Express.js**, and **MongoDB**. This project includes user authentication using JWT, password hashing with bcrypt, protected routes, and blog management functionality.

## 📖 Overview

This project was created to practice backend development concepts such as:

* REST API Development
* User Authentication
* JWT Authorization
* Password Hashing
* MongoDB Integration
* Express Middleware
* Backend Security Basics

## ✨ Features

* User Registration
* User Login
* JWT Authentication
* Password Hashing with Bcrypt
* Create Blog Posts
* View All Blog Posts
* Protected Routes
* Rate Limiting
* MongoDB Database Integration

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT (JSON Web Token)
* Bcrypt
* Dotenv
* Express Rate Limit

## 📂 Project Structure

```text
demo-blog-server/
│
├── controller.js
├── middleware.js
├── model.js
├── routes.js
├── server.js
├── package.json
└── .env
```

## ⚙️ Installation

### Clone the Repository

```bash
git clone https://github.com/prantoas8002-ship-it/demo-blog-server.git
```

### Navigate to the Project Folder

```bash
cd demo-blog-server
```

### Install Dependencies

```bash
npm install
```

### Create a .env File

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### Start the Server

```bash
npm run dev
```

or

```bash
node server.js
```

## 🔗 API Endpoints

### Authentication

#### Register User

```http
POST /api/register
```

Example Request:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "123456"
}
```

#### Login User

```http
POST /api/login
```

Example Request:

```json
{
  "email": "john@example.com",
  "password": "123456"
}
```

### Blog Routes

#### Get All Blogs

```http
GET /api/blog
```

#### Create Blog

```http
POST /api/blog
```

Header:

```http
Authorization: Bearer YOUR_JWT_TOKEN
```

Example Request:

```json
{
  "title": "My First Blog",
  "content": "This is my first blog post."
}
```

## 🔒 Security Features

* JWT-based Authentication
* Password Hashing with Bcrypt
* Environment Variables with Dotenv
* Rate Limiting for API Protection

## 🎯 What I Learned

Through this project I learned:

* Building REST APIs with Express.js
* Working with MongoDB and Mongoose
* Authentication using JWT
* Password Security using Bcrypt
* Middleware Implementation
* Structuring Backend Applications
* Basic API Security Practices

## 🚀 Future Improvements

* Role-Based Authorization (Admin/User)
* Refresh Tokens
* Pagination
* Search & Filter Blogs
* File Upload Support
* Redis Caching
* API Documentation with Swagger
* Deployment to Cloud Platforms

## 👨‍💻 Author

Pranto Ghosh

GitHub: https://github.com/prantoas8002-ship-it

## 📄 License

This project is created for learning and educational purposes.
