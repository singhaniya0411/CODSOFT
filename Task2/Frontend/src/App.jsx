import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import QuizList from "./pages/QuizList";
import QuizCreate from "./pages/QuizCreate";
import QuizPlay from "./pages/QuizPlay";
import QuizResults from "./pages/QuizResults";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Signup from "./pages/SignUp";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <ToastContainer autoClose={3000} position="top-right" />
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quizzes" element={<QuizList />} />
            <Route path="/create" element={<QuizCreate />} />
            <Route path="/quiz/:id" element={<QuizPlay />} />
            <Route path="/results/:id" element={<QuizResults />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
