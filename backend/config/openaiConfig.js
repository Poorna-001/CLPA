const OpenAI = require("openai");
require("dotenv").config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Fetch API key from .env
});

const generateLearningPath = async (interest, level) => {
  const prompt = `Suggest a personalized learning path for a ${level} level student interested in ${interest}.`;
  const response = await openai.completions.create({
    model: "gpt-4",
    prompt: prompt,
    max_tokens: 200,
  });
  return response.choices[0].text.trim();
};

module.exports = { generateLearningPath };
