import mongoose from "mongoose";


const resultSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  quiz: { type: mongoose.Schema.Types.ObjectId, ref: "Quiz" },
  score: Number,
  answers: [String],
  submittedAt: { type: Date, default: Date.now }
});



const resultModel = mongoose.models.result || mongoose.model("Result", resultSchema);
export default resultModel;