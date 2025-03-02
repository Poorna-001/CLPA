import React from "react";
import LearningPath from "./components/LearningPath"; // ✅ Correct import

function App() {
  return (
    <div>
      <h1>Welcome to CPLA</h1>
      <LearningPath /> {/* ✅ Using the LearningPath component */}
    </div>
  );
}

export default App;
