import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const questionSchema = new Schema({
  text: { type: String, required: true },
  type: {
    type: String,
    enum: ['multiple-choice', 'true-false', 'short-answer'],
    required: true
  },
  options: {
    type: [String],
    required: function () {
      return this.type === 'multiple-choice';
    }
  },
  correctAnswer: {
    type: Schema.Types.Mixed,
    required: true
  }
}, { timestamps: true });


const quizSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  timeLimit: { type: Number, required: true }, // in minutes
  questions: { type: [questionSchema], required: true },
  createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
  isPublic: { type: Boolean, default: true },
}, {
  timestamps: true
});

const Quiz = model('Quiz', quizSchema);
export default Quiz;
