# 🧠 Quick Genius - Frontend (React.js + Tailwind CSS)

**Quick Genius** is an interactive quiz application built with modern web technologies. It allows users to create, play, and view quizzes with a seamless and responsive UI.

---

## 🚀 Tech Stack

- **Framework**: React.js (Vite)
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **State Management**: Context API (optional if added later)
- **API Handling**: Axios (if API calls are planned)
- **Authentication**: JWT-based (if backend integration planned)

---

## 📁 Folder Structure

```
quick-genius-frontend/
├── public/                  # Static assets
│
├── src/
│   ├── components/          # Reusable components
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   └── QuizCard.jsx
│   │
│   ├── pages/               # Application pages
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── QuizCreate.jsx
│   │   ├── QuizList.jsx
│   │   ├── QuizPlay.jsx
│   │   ├── QuizResults.jsx
│   │   └── SignUp.jsx
│   │
│   ├── App.jsx              # Root component
│   ├── main.jsx             # Entry point
│   ├── App.css              # Global CSS
│   ├── index.css            # Tailwind imports
│
├── .env                     # Environment variables
├── package.json             # Project dependencies
├── tailwind.config.js       # Tailwind configuration
├── vite.config.js           # Vite configuration
└── README.md                # Documentation
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone <your-repo-link-here>
cd quick-genius-frontend
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

- 🧩 Create, Play, and View Quizzes
- 🔐 Authentication (Login/SignUp)
- 🎨 Beautiful and Responsive UI
- 🏎️ Fast Vite-powered development
- 📱 Mobile Friendly Design

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
