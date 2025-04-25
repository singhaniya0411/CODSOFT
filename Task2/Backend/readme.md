# 🧠 Quick Genius - Backend (Node.js + Express.js + MongoDB)

**Quick Genius** is the backend service for the Quick Genius quiz platform. It handles user authentication, quiz management, result recording, and API routing — all powered by Node.js, Express.js, and MongoDB.

---

## 🚀 Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (Mongoose ODM)
- **Authentication**: JWT-based
- **Environment Variables**: dotenv
- **Error Handling**: Custom middleware

---

## 📁 Folder Structure

```
quick-genius-backend/
├── config/                 # Configuration files
│   └── db.js                # MongoDB connection setup
│
├── controllers/            # Route controllers
│   ├── quizController.js
│   ├── resultController.js
│   └── userController.js
│
├── middlewares/            # Middleware functions
│   └── user.js              # Authentication middleware
│
├── models/                 # Mongoose models
│   ├── Quiz.js
│   ├── Result.js
│   └── User.js
│
├── routes/                 # Express routers
│   ├── quizRoutes.js
│   ├── resultRoutes.js
│   └── userRoutes.js
│
├── utils/                  # Utility functions
│   └── appError.js          # Custom error handling class
│
├── env/                    # Environment files (e.g., .env)
│
├── server.js               # Entry point
├── package.json            # Dependencies
├── package-lock.json       # Lock file
└── README.md               # Documentation
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone <your-backend-repo-link-here>
cd quick-genius-backend
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Create a `.env` file

```env
PORT=5000
MONGODB_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-secret-key>
JWT_EXPIRES_IN=7d
```

### 4️⃣ Run the server

```bash
npm run dev
```

Server will run on: [http://localhost:5000](http://localhost:5000)

---

## ✨ Features

- 🔐 User Authentication (JWT tokens)
- 🧠 Quiz Creation and Management
- 📝 Result Saving and Retrieval
- 🛡️ Protected Routes
- 🎯 Centralized Error Handling

---

## 🛠 Deployment

### Build (if needed)

```bash
npm run build
```

### Deploy (Render/Heroku/Vercel)

Set environment variables and deploy using:
- Render
- Railway
- Vercel (Serverless Functions)
- Or any Node.js hosting service

---

## 📄 License

Licensed under the **MIT License**

---

## 🤝 Contributing

Contributions are welcome! Fork the repo and make a pull request.

---

## 💬 Questions?

Open an issue or reach out! 🚀
