# 🧠 JobBoard - Backend (Node.js + Express + MongoDB)

This is the **backend server** for the **JobBoard** application, built using Node.js and Express. It handles authentication, job posting, updating, user roles, and communication with MongoDB for persistent data storage.

---

## 🚀 Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB + Mongoose
- **Authentication**: JWT (JSON Web Token)
- **Environment Config**: dotenv
- **CORS**: Enabled
- **Password Hashing**: bcryptjs

---

## 📁 Folder Structure

```
job-board-backend/
├── config/                  # DB config
│   └── db.js
│
├── controllers/            # Route controllers
│   ├── jobController.js
│   └── userController.js
│
├── middleware/             # Middleware functions
│   ├── authMiddleware.js
│   └── errorHandler.js
│
├── models/                 # Mongoose schemas
│   ├── Job.js
│   └── User.js
│
├── routes/                 # API routes
│   ├── authRoutes.js
│   ├── jobRoutes.js
│   └── userRoutes.js
│
├── .env                    # Environment variables
├── .gitignore
├── server.js               # Entry point
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/job-board-backend.git
cd job-board-backend
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Create `.env` file

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

### 4️⃣ Start the development server

```bash
npm run dev
```

The backend server will be live at:  
🔗 **http://localhost:5000**

---

## 📌 API Endpoints

### 🔐 Auth

- `POST /api/auth/register` – Register new user
- `POST /api/auth/login` – Login user and return token

### 👤 Users

- `GET /api/users/me` – Get logged-in user data

### 💼 Jobs

- `GET /api/jobs` – Get all jobs
- `GET /api/jobs/:id` – Get job by ID
- `POST /api/jobs` – Create new job (recruiter only)
- `PUT /api/jobs/:id` – Update job
- `DELETE /api/jobs/:id` – Delete job

> ⚠️ Some routes are protected and require a valid JWT in the Authorization header.

---

## 🛠 Deployment (Render/Other)

### Build & Deploy (Render)

1. Push your repo to GitHub
2. Go to [https://render.com](https://render.com)
3. Create new Web Service
4. Use `npm run dev` as start command
5. Add environment variables from `.env`

---

## 📜 License

This project is licensed under the **MIT License**

---

## 🤝 Contributing

Pull requests are welcome! Fork the repo and submit your improvements.

---

## 💬 Questions?

Feel free to open an issue or contact the maintainer 🚀
