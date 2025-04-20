# 💼 JobBoard - Frontend (React.js + Tailwind CSS)

**JobBoard** is a responsive job listing platform built using modern web technologies. This frontend app allows job seekers to browse and apply for jobs, while recruiters can manage listings with ease.

---

## 🚀 Tech Stack

- **Framework**: React.js (Vite)
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **State Management**: Context API
- **API Handling**: Axios
- **Authentication**: JWT-based

---

## 📁 Folder Structure

```
job-board-frontend/
├── public/                  # Static assets
│
├── src/
│   ├── components/          # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── PostJob.jsx
│   │   └── ApplyJob.jsx
│   │
│   ├── pages/               # Application pages
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Blog.jsx
│   │   ├── SignUp.jsx
│   │   ├── CandidateDashboard.jsx
│   │   ├── EmployerDashboard.jsx
│   │   ├── JobDetails.jsx
│   │   ├── CreateJob.jsx
│   │   ├── JobList.jsx
│   │   └── Contact.jsx
│   │
│   ├── context/             # Auth context
│   │   └── Context.jsx
│   │
│   ├── App.jsx              # Root component
│   └── main.jsx             # Entry point
│
├── .env                     # Env variables
├── package.json             # Dependencies
├── tailwind.config.js       # Tailwind config
├── vite.config.js           # Vite config
└── README.md                # Documentation
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/singhaniya0411/CODSOFT.git
cd Task1
cd frontend
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Create `.env` file

```env
VITE_BACKEND_URL=http://localhost:5000
```

### 4️⃣ Run the app

```bash
npm run dev
```

Visit: [http://localhost:5173](http://localhost:5173)

---

## ✨ Features

- 🧑‍💼 Recruiter dashboard
- 👥 Job seeker experience
- 🔐 Protected routes with JWT
- 📄 Job post & edit forms
- 📱 Responsive design

---

## 🛠 Deployment

### Build

```bash
npm run build
```

### Deploy (Vercel)

```bash
vercel deploy
```

### Deploy (Netlify)

```bash
netlify deploy --prod
```

---

## 📄 License

Licensed under the **MIT License**

---

## 🤝 Contributing

Contributions are welcome! Fork the repo and make a pull request.

---

## 💬 Questions?

Open an issue or reach out! 🚀
