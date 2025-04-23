# 💼 JobBoard - Full Stack Job Portal (MERN)

**JobBoard** is a full-stack job listing platform where job seekers can explore and apply to jobs, and recruiters can post and manage job listings. It features user authentication, role-based dashboards, job application tracking, and a responsive UI.

---

## 🚀 Tech Stack

### 🖥 Frontend

- **Framework**: React.js (Vite)
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **State Management**: Context API
- **API Handling**: Axios
- **Authentication**: JWT-based

### ⚙️ Backend

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB + Mongoose
- **Authentication**: JWT (JSON Web Token)
- **Password Hashing**: bcryptjs
- **Environment Config**: dotenv

---

## 📁 Folder Structure

```
CODSOFT/
├── Task1/
│   ├── backend/                   # Backend (Node.js + Express)
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── .env
│   │   ├── server.js
│   │   └── package.json
│   │
│   └── frontend/                  # Frontend (React + Vite)
│       ├── public/
│       ├── src/
│       │   ├── components/
│       │   ├── pages/
│       │   ├── context/
│       │   ├── App.jsx
│       │   └── main.jsx
│       ├── .env
│       ├── package.json
│       ├── tailwind.config.js
│       └── vite.config.js
```

---

## ⚙️ Installation & Setup

### 🔧 Backend Setup

```bash
git clone https://github.com/singhaniya0411/CODSOFT.git
cd CODSOFT/Task1/backend
npm install
```

Create a `.env` file inside `backend`:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

Start the server:

```bash
npm run dev
```

Server will run at: [http://localhost:5000](http://localhost:5000)

---

### 🎨 Frontend Setup

```bash
cd CODSOFT/Task1/frontend
npm install
```

Create a `.env` file inside `frontend`:

```env
VITE_BACKEND_URL=http://localhost:5000
```

Run the frontend:

```bash
npm run dev
```

Frontend available at: [http://localhost:5173](http://localhost:5173)

---

## ✨ Features

- 🔐 JWT-based Auth (Register/Login)
- 👥 Role-based dashboards: Candidate & Employer
- 🧑‍💼 Recruiters can post, edit, and delete jobs
- 👨‍💻 Applicants can view and apply to jobs
- 📱 Fully responsive UI
- 🧾 RESTful API with secure routes
- 📄 Tailwind-powered modern UI

---

## 📌 Backend API Endpoints

### 🔐 Auth

- `POST /api/auth/register` – Register new user  
- `POST /api/auth/login` – Login user and get JWT  

### 💼 Jobs

- `GET /api/jobs` – Get all jobs  
- `GET /api/jobs/:id` – Get job by ID  
- `POST /api/jobs` – Create job (Recruiter only)  
- `PUT /api/jobs/:id` – Update job  
- `DELETE /api/jobs/:id` – Delete job  

> ⚠️ Protected routes require a valid `Authorization: Bearer <token>`

---

## 🚀 Deployment Guide

### 📦 Backend (Render)

1. Push `backend/` to GitHub
2. Go to [Render](https://render.com/)
3. Create new Web Service
4. Use `npm run dev` as Start command
5. Add required `.env` variables

### 🌐 Frontend (Vercel or Netlify)

**Vercel**

```bash
vercel deploy
```

**Netlify**

```bash
netlify deploy --prod
```

Update `VITE_BACKEND_URL` in `.env` accordingly (use Render's live backend URL)

---

## 📜 License

Licensed under the **MIT License**.

---

## 🤝 Contributing

Contributions are welcome! Fork the repository, make your changes, and submit a pull request 🙌

---

## 💬 Questions?

Open an issue or reach out to the maintainer 🚀

---
