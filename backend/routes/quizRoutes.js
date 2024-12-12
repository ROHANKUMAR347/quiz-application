const express = require("express");
const Quiz = require("../models/Quiz");

const router = express.Router();

router.get("/", async (req, res) => {
  const quizzes = await Quiz.find({}, "title");
  res.json(quizzes);
});

router.get("/:id/questions", async (req, res) => {
  const quiz = await Quiz.findById(req.params.id, "questions");
  if (!quiz) return res.status(404).json({ error: "Quiz not found" });
  res.json(quiz.questions);
});

module.exports = router;
