import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white shadow-inner mt-12">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
        <p className="mb-4 md:mb-0">
          © 2025{" "}
          <span className="font-semibold text-blue-600">QuickGenius</span>. All
          rights reserved.
        </p>
        <div className="flex space-x-4">
          <Link to="/" className="hover:text-blue-600 transition-colors">
            Home
          </Link>
          <Link to="/quizzes" className="hover:text-blue-600 transition-colors">
            Quizzes
          </Link>
          <Link to="/create" className="hover:text-blue-600 transition-colors">
            Create Quiz
          </Link>
          <Link to="/login" className="hover:text-blue-600 transition-colors">
            Login
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
