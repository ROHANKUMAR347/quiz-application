const express = require("express");
const { authenticateAdmin } = require("../middleware/auth");
const Score = require("../models/Score");

const router = express.Router();

router.get("/leaderboard", authenticateAdmin, async (req, res) => {
  const scores = await Score.find()
    .populate("user", "username")
    .sort({ score: -1 })
    .limit(10);
  res.json(scores.map((s) => ({ username: s.user.username, score: s.score })));
});

module.exports = router;
