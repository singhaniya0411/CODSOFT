import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Welcome to <span className="text-blue-600">QuickGenius!</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              Take a quiz to test your knowledge or create your own to challenge
              others. Let the fun and learning begin!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/quizzes"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-300 text-center transform hover:scale-105"
              >
                Browse Quizzes
              </Link>
              <Link
                to={localStorage.getItem("token") ? "/create" : "/login"}
                className="px-8 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold rounded-lg transition duration-300 text-center transform hover:scale-105"
              >
                Create Quiz
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center mt-10 lg:mt-0">
            <img
              src="/hero.jpeg"
              className="rounded-xl shadow-xl w-full max-w-lg transform hover:scale-105 transition duration-300"
              alt="QuickGenius Hero"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
