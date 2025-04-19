import Result from '../models/Result.js';

export const submitResult = async (req, res) => {
  try {
    const result = await Result.create({ ...req.body, user: req.user });
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getResults = async (req, res) => {
  const results = await Result.find({ user: req.user }).populate("quiz", "title");
  res.json(results);
};
