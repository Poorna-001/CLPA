const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000; // Your backend runs on this port

// Middleware
app.use(cors()); // Allows frontend to communicate with backend
app.use(bodyParser.json()); // Parses JSON request body

// API Endpoint
app.post("/api/get-learning-suggestions", async (req, res) => {
  console.log("📩 Request received:", req.body);

  const { userInterest, skillLevel } = req.body;

  if (!userInterest || !skillLevel) {
    return res.status(400).json({ error: "Missing fields" });
  }

  // Mock AI-generated response (Replace this with actual AI logic)
  const suggestion = `Based on your interest in ${userInterest} and ${skillLevel} level, start with XYZ course.`;

  res.json({ suggestion });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
