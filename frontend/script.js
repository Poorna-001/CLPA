document
  .getElementById("learningForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const interest = document.getElementById("interest").value;
    const level = document.getElementById("level").value;

    try {
      const response = await fetch(
        "http://localhost:5000/api/get-learning-suggestions",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userInterest: interest, skillLevel: level }),
        }
      );

      const data = await response.json();
      document.getElementById("response").innerText = data.suggestion;
    } catch (error) {
      document.getElementById("response").innerText =
        "Error fetching AI response!";
      console.error("Error:", error);
    }
  });
