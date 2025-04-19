import React, { useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const QuizResults = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();

  const {
    score = 0,
    total = 10,
    userAnswers = [],
    quizData = { questions: [] },
    timeSpent = 0,
  } = state || {};

  const percentage = Math.round((score / total) * 100);
  const minutes = Math.floor(timeSpent / 60);
  const seconds = timeSpent % 60;

  const getResultData = () => {
    if (percentage >= 90) {
      return {
        text: "Outstanding!",
        color: "text-emerald-600",
        bg: "bg-emerald-100",
        bar: "bg-emerald-500",
      };
    } else if (percentage >= 75) {
      return {
        text: "Great Job!",
        color: "text-green-600",
        bg: "bg-green-100",
        bar: "bg-green-500",
      };
    } else if (percentage >= 60) {
      return {
        text: "Good Work!",
        color: "text-blue-600",
        bg: "bg-blue-100",
        bar: "bg-blue-500",
      };
    } else if (percentage >= 50) {
      return {
        text: "Keep Improving!",
        color: "text-amber-600",
        bg: "bg-amber-100",
        bar: "bg-amber-500",
      };
    } else {
      return {
        text: "Try Again!",
        color: "text-red-600",
        bg: "bg-red-100",
        bar: "bg-red-500",
      };
    }
  };

  const result = getResultData();

  const submitResultToBackend = async () => {
    try {
      const resultData = {
        quizId: id,
        score,
        total,
        percentage,
        timeSpent,
        userAnswers,
      };

      const response = await axios.post(
        "http://localhost:4000/api/result/submit",
        resultData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.status === 200) {
        toast.success("Results saved successfully!", {
          position: "top-center",
          autoClose: 3000,
        });
      }
    } catch (error) {
      console.error("Error submitting result", error);
      toast.error("Results couldn't be saved", {
        position: "top-center",
      });
    }
  };

  useEffect(() => {
    if (!state) {
      navigate(`/quiz/${id}`, { replace: true });
      return;
    }
    submitResultToBackend();
  }, []);

  const normalizeAnswer = (answer) => {
    if (
      answer === true ||
      answer === 1 ||
      answer === "1" ||
      answer === "True" ||
      answer === "true"
    ) {
      return true;
    } else if (
      answer === false ||
      answer === 0 ||
      answer === "0" ||
      answer === "False" ||
      answer === "false"
    ) {
      return false;
    }
    return answer;
  };

  const getAnswerDisplay = (question, answer) => {
    const normalized = normalizeAnswer(answer);

    if (question.type === "true-false") {
      return normalized === true ? "True" : "False";
    } else if (question.type === "short-answer") {
      return answer || "No answer provided";
    } else if (Array.isArray(question.options)) {
      if (
        typeof normalized === "number" &&
        normalized >= 0 &&
        normalized < question.options.length
      ) {
        return question.options[normalized];
      }
      return "No answer provided";
    }
    return answer || "No answer provided";
  };

  const isAnswerCorrect = (question, userAnswer, correctAnswer) => {
    if (question.type === "short-answer") {
      const user = (userAnswer || "").toString().trim().toLowerCase();
      const correct = (correctAnswer || "").toString().trim().toLowerCase();
      return user === correct;
    }
    return normalizeAnswer(userAnswer) === normalizeAnswer(correctAnswer);
  };

  if (!quizData.questions || quizData.questions.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center p-6 bg-white rounded-lg shadow-md max-w-md">
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            Results Not Available
          </h2>
          <p className="text-gray-600 mb-4">
            Please complete the quiz first to see your results.
          </p>
          <button
            onClick={() => navigate(`/quiz/${id}`)}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Take Quiz
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <ToastContainer />
      <div className="max-w-4xl mx-auto">
        {/* Results Summary Card */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
          <div className={`${result.bg} p-6 text-center`}>
            <div className="flex justify-center mb-4">
              <div
                className={`w-24 h-24 rounded-full flex items-center justify-center ${result.color} border-4 border-white shadow-lg`}
              >
                <span className="text-3xl font-bold">{percentage}%</span>
              </div>
            </div>
            <h2 className={`text-3xl font-bold mb-2 ${result.color}`}>
              {result.text}
            </h2>
            <p className="text-gray-700 text-lg">
              You scored <span className="font-bold">{score}</span> out of{" "}
              <span className="font-bold">{total}</span> questions correctly
            </p>
            {timeSpent > 0 && (
              <p className="text-gray-600 mt-2">
                Time taken: {minutes}m {seconds}s
              </p>
            )}
          </div>

          <div className="p-6 border-t border-gray-200">
            <div className="mb-2 flex justify-between text-sm text-gray-600">
              <span>Your Progress</span>
              <span>{percentage}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className={`h-3 rounded-full ${result.bar}`}
                style={{ width: `${percentage}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Questions Breakdown */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-2xl font-bold text-gray-800">
              Detailed Results
            </h3>
            <p className="text-gray-600">Review your answers below</p>
          </div>

          <div className="divide-y divide-gray-200">
            {quizData.questions.map((question, index) => {
              const userAnswerRaw = userAnswers?.[index];
              const correctAnswerRaw = question.correctAnswer;
              const isCorrect = isAnswerCorrect(
                question,
                userAnswerRaw,
                correctAnswerRaw
              );

              const userAnswerDisplay = getAnswerDisplay(
                question,
                userAnswerRaw
              );
              const correctAnswerDisplay = getAnswerDisplay(
                question,
                correctAnswerRaw
              );

              return (
                <div key={index} className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="text-sm font-medium text-gray-500">
                        Question {index + 1}
                      </span>
                      <h4 className="text-lg font-medium text-gray-800">
                        {question.text}
                      </h4>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold ${
                        isCorrect
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {isCorrect ? "Correct" : "Incorrect"}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-gray-500 mb-1">
                        Your Answer:
                      </p>
                      <div
                        className={`p-3 rounded-lg ${
                          isCorrect
                            ? "bg-green-50 text-green-800"
                            : "bg-red-50 text-red-800"
                        }`}
                      >
                        {userAnswerDisplay}
                      </div>
                    </div>

                    {!isCorrect && (
                      <div>
                        <p className="text-sm font-medium text-gray-500 mb-1">
                          Correct Answer:
                        </p>
                        <div className="p-3 rounded-lg bg-green-50 text-green-800">
                          {correctAnswerDisplay}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="p-6 border-t border-gray-200 flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => navigate(`/quiz/${id}`)}
              className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Retake Quiz
            </button>
            <button
              onClick={() => navigate("/quizzes")}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md"
            >
              Browse More Quizzes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizResults;
