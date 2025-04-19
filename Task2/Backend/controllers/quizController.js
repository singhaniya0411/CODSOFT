import Quiz from "../models/Quiz.js";

const createQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.create({ ...req.body, createdBy: req.user });
    res.status(201).json({ msg: "QUIZ CREATED" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getPublicQuizzes = async (req, res) => {
  try {
    // Fetch all public quizzes
    const quizzes = await Quiz.find({ isPublic: true }).populate('createdBy', 'username');

    return res.json(quizzes);


  } catch (error) {
    console.error('Error fetching public quizzes:', error);
    return res.status(500).json({ message: 'Server error while fetching public quizzes' });
  }
};
const getQuizById = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) {
      return res.status(404).json({ message: 'Quiz not found' });
    }
    res.json(quiz);
  } catch (error) {
    console.error('Error fetching quiz:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
export { createQuiz, getPublicQuizzes, getQuizById }