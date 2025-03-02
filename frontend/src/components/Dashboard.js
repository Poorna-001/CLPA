import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const location = useLocation();
  const { interest, skillLevel } = location.state || {};
  const [learningPath, setLearningPath] = useState("");

  useEffect(() => {
    if (interest && skillLevel) {
      axios
        .post("http://localhost:5000/api/get-learning-suggestions", {
          userInterest: interest,
          skillLevel: skillLevel,
        })
        .then((response) => setLearningPath(response.data.suggestion))
        .catch((error) => console.error("Error fetching data:", error));
    }
  }, [interest, skillLevel]);

  return (
    <div className="dashboard">
      <h1>Personalized Learning Path</h1>
      {learningPath ? <p>{learningPath}</p> : <p>Loading...</p>}
    </div>
  );
};

export default Dashboard;
