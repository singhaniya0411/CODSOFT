import { useState } from "react";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";

const QuizCreate = () => {
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState("");
  const initialQuestion = {
    text: "",
    type: "multiple-choice",
    options: ["", "", "", ""],
    correctAnswer: "0",
  };

  const [quizData, setQuizData] = useState({
    title: "",
    description: "",
    category: "general",
    timeLimit: 10,
    questions: [initialQuestion],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setQuizData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleQuestionChange = (index, field, value) => {
    const updatedQuestions = [...quizData.questions];
    updatedQuestions[index][field] = value;

    // Reset values based on type
    if (field === "type") {
      if (value === "multiple-choice") {
        updatedQuestions[index].options = ["", "", "", ""];
        updatedQuestions[index].correctAnswer = "0";
      } else if (value === "true-false") {
        updatedQuestions[index].options = [];
        updatedQuestions[index].correctAnswer = "True";
      } else if (value === "short-answer") {
        updatedQuestions[index].options = [];
        updatedQuestions[index].correctAnswer = "";
      }
    }

    setQuizData((prev) => ({
      ...prev,
      questions: updatedQuestions,
    }));
  };

  const handleOptionChange = (questionIndex, optionIndex, value) => {
    const updatedQuestions = [...quizData.questions];
    updatedQuestions[questionIndex].options[optionIndex] = value;
    setQuizData((prev) => ({
      ...prev,
      questions: updatedQuestions,
    }));
  };

  const addQuestion = () => {
    setQuizData((prev) => ({
      ...prev,
      questions: [...prev.questions, { ...initialQuestion }],
    }));
  };

  const removeQuestion = (index) => {
    setQuizData((prev) => ({
      ...prev,
      questions: prev.questions.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/quizzes/create",
        quizData
      );
      console.log("Quiz created successfully:", response.data);
      setSuccessMessage("✅ Quiz created successfully!");

      setQuizData({
        title: "",
        description: "",
        category: "general",
        timeLimit: 10,
        questions: [{ ...initialQuestion }],
      });
    } catch (error) {
      console.error("Error creating quiz:", error);
      alert("An error occurred while creating the quiz.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Create a New Quiz
      </h1>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Quiz Info */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Quiz Information</h2>
          <div className="space-y-4">
            <input
              type="text"
              name="title"
              value={quizData.title}
              onChange={handleInputChange}
              placeholder="Quiz Title"
              required
              className="w-full px-4 py-2 border rounded-lg"
            />
            <textarea
              name="description"
              value={quizData.description}
              onChange={handleInputChange}
              placeholder="Description"
              rows={3}
              className="w-full px-4 py-2 border rounded-lg"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select
                name="category"
                value={quizData.category}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg"
              >
                <option value="general">General Knowledge</option>
                <option value="science">Science</option>
                <option value="history">History</option>
                <option value="geography">Geography</option>
                <option value="entertainment">Entertainment</option>
                <option value="others">Others</option>
              </select>
              <input
                type="number"
                name="timeLimit"
                value={quizData.timeLimit}
                onChange={handleInputChange}
                min={1}
                placeholder="Time Limit (minutes)"
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Questions */}
        {quizData.questions.map((question, qIndex) => (
          <div key={qIndex} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Question {qIndex + 1}</h2>
              {quizData.questions.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeQuestion(qIndex)}
                  className="text-red-600 hover:text-red-800"
                >
                  Remove
                </button>
              )}
            </div>

            <div className="space-y-4">
              <input
                type="text"
                value={question.text}
                onChange={(e) =>
                  handleQuestionChange(qIndex, "text", e.target.value)
                }
                placeholder="Question text"
                required
                className="w-full px-4 py-2 border rounded-lg"
              />

              <select
                value={question.type}
                onChange={(e) =>
                  handleQuestionChange(qIndex, "type", e.target.value)
                }
                className="w-full px-4 py-2 border rounded-lg"
              >
                <option value="multiple-choice">Multiple Choice</option>
                <option value="true-false">True/False</option>
                <option value="short-answer">Short Answer</option>
              </select>

              {/* MCQ */}
              {question.type === "multiple-choice" && (
                <div className="space-y-2">
                  {question.options.map((option, oIndex) => (
                    <div key={oIndex} className="flex items-center gap-2">
                      <input
                        type="radio"
                        name={`correct-answer-${qIndex}`}
                        checked={question.correctAnswer === String(oIndex)}
                        onChange={() =>
                          handleQuestionChange(
                            qIndex,
                            "correctAnswer",
                            String(oIndex)
                          )
                        }
                      />
                      <input
                        type="text"
                        value={option}
                        onChange={(e) =>
                          handleOptionChange(qIndex, oIndex, e.target.value)
                        }
                        className="flex-grow px-3 py-1 border rounded"
                        required
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* True/False */}
              {/* True/False */}
              {question.type === "true-false" && (
                <div className="flex gap-4">
                  {["True", "False"].map((val) => (
                    <label
                      key={val}
                      className={`flex items-center gap-2 px-3 py-2 border rounded cursor-pointer ${
                        question.correctAnswer === val
                          ? "bg-blue-100 border-blue-500"
                          : "border-gray-300"
                      }`}
                    >
                      <input
                        type="radio"
                        name={`correct-answer-${qIndex}`}
                        checked={question.correctAnswer === val}
                        onChange={() =>
                          handleQuestionChange(qIndex, "correctAnswer", val)
                        }
                        className="accent-blue-500"
                      />
                      <span>{val.charAt(0).toUpperCase() + val.slice(1)}</span>
                    </label>
                  ))}
                </div>
              )}

              {/* Short Answer */}
              {question.type === "short-answer" && (
                <input
                  type="text"
                  value={question.correctAnswer}
                  onChange={(e) =>
                    handleQuestionChange(
                      qIndex,
                      "correctAnswer",
                      e.target.value
                    )
                  }
                  placeholder="Correct short answer"
                  className="w-full px-3 py-2 border rounded"
                  required
                />
              )}
            </div>
          </div>
        ))}

        {/* Controls */}
        <div className="flex justify-between">
          <button
            type="button"
            onClick={addQuestion}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
          >
            Add Question
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
          >
            Create Quiz
          </button>
        </div>
      </form>

      {successMessage && (
        <div className="mt-8 flex flex-col items-center space-y-4 animate-fade-in">
          <div className="flex items-center space-x-2">
            <svg
              className="w-6 h-6 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="text-green-600 font-semibold text-lg">
              {successMessage}
            </span>
          </div>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200 shadow-md"
          >
            Back to Home
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizCreate;
