const express = require("express");
const router = express.Router();
const { generateLearningPath } = require("../config/openaiConfig");

router.post("/get-learning-suggestions", async (req, res) => {
    const { userInterest, skillLevel } = req.body;
    if (!userInterest || !skillLevel) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    try {
        const suggestion = await generateLearningPath(userInterest, skillLevel);
        res.json({ suggestion });
    } catch (error) {
        console.error("AI Request Failed:", error);
        res.status(500).json({ error: "AI request failed" });
    }
});

module.exports = router;
