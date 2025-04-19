import { Router } from 'express';
import { submitResult, getResults } from '../controllers/resultController.js';

const resultrouter = Router();

resultrouter.post('/submit',  submitResult);
resultrouter.get('/get',  getResults);

export default resultrouter;
