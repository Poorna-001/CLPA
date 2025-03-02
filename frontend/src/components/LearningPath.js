import React, { useState } from "react"; // ✅ Import React
// ❌ Removed incorrect import
// import LearningPath from ".LearningPath";

const LearningPath = () => {
  // ✅ Correctly define the component
  const [userInterest, setUserInterest] = useState("");
  const [skillLevel, setSkillLevel] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await fetch(
        "http://localhost:5000/api/get-learning-suggestions",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userInterest, skillLevel }),
        }
      );

      if (!res.ok) {
        throw new Error("Server responded with an error");
      }

      const data = await res.json();
      setResponse(data.suggestion);
    } catch (error) {
      console.error("❌ Fetch Error:", error);
      setResponse("Error fetching AI response!");
    }
  };

  return (
    <div>
      <h2>Cloud-Based Personalized Learning Assistant</h2>
      <form onSubmit={handleSubmit}>
        <label>Enter Your Learning Interest:</label>
        <input
          type="text"
          value={userInterest}
          onChange={(e) => setUserInterest(e.target.value)}
          placeholder="e.g., Web Development"
          required
        />

        <label>Skill Level:</label>
        <select
          value={skillLevel}
          onChange={(e) => setSkillLevel(e.target.value)}
          required
        >
          <option value="">Select Level</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>

        <button type="submit">Get Learning Path</button>
      </form>

      <h3>AI-Generated Learning Path:</h3>
      <p>{response}</p>
    </div>
  );
};

export default LearningPath;
