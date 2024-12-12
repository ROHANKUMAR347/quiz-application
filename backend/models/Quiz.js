const mongoose = require("mongoose");

const QuizSchema = new mongoose.Schema({
  title: String,
  questions: [
    {
      questionText: String,
      type: { type: String, enum: ["single", "multiple", "true/false"] },
      options: [String],
      correctAnswers: [String],
    },
  ],
});

module.exports = mongoose.model("Quiz", QuizSchema);
