import { Router } from 'express';
import userMiddleware from '../middlewares/user.js';
import { createQuiz, getPublicQuizzes, getQuizById } from '../controllers/quizController.js';

const quizRouter = Router();


quizRouter.post('/create', createQuiz);
quizRouter.get('/allquiz', getPublicQuizzes);
quizRouter.get('/:id', getQuizById);

export default quizRouter;
