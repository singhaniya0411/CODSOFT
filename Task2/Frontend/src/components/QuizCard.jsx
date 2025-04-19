import React from "react";
import { Link } from "react-router-dom";

const QuizCard = ({ quiz }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{quiz.title}</h3>

      <p className="text-gray-600 mb-4 line-clamp-2">
        {quiz.description || "No description provided."}
      </p>

      <div className="flex justify-between items-center mb-4 text-sm text-gray-500">
        <span>
          {quiz.questionCount} questions • {quiz.timeLimit} min
        </span>
        {/* Optional stats, hide if undefined */}
        {(quiz.rating || quiz.plays) && (
          <div className="flex items-center gap-1">
            {quiz.rating && (
              <>
                <span className="text-yellow-500">★</span>
                <span className="text-gray-700">{quiz.rating}</span>
              </>
            )}
            {quiz.plays && (
              <span className="text-gray-500 ml-1">({quiz.plays})</span>
            )}
          </div>
        )}
      </div>

      <Link
        to={`/quiz/${quiz.id || quiz._id}`}
        className="block w-full text-center px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-500 transition-colors"
      >
        Take Quiz
      </Link>
    </div>
  );
};

export default QuizCard;
