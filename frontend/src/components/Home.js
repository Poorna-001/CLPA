import { useState } from "react";

function Home() {
    const [interest, setInterest] = useState("");
    const [level, setLevel] = useState("");
    const [responseText, setResponseText] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        console.log("📤 Submitting Data:", { interest, level });

        try {
            const response = await fetch("http://localhost:5000/api/get-learning-suggestions", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ userInterest: interest, skillLevel: level })
            });

            console.log("🔄 Response Status:", response.status);
            const data = await response.json();
            console.log("📥 Response Data:", data);

            if (response.ok) {
                setResponseText(data.suggestion);
            } else {
                setResponseText("Error: " + (data.error || "Unknown error occurred"));
            }
        } catch (error) {
            setResponseText("Error fetching AI response!");
            console.error("❌ Error:", error);
        }
    };

    return (
        <div>
            <h1>Get Learning Path</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={interest} onChange={(e) => setInterest(e.target.value)} placeholder="Enter Interest" />
                <input type="text" value={level} onChange={(e) => setLevel(e.target.value)} placeholder="Enter Skill Level" />
                <button type="submit">Get Learning Path</button>
            </form>
            <p>{responseText}</p>
        </div>
    );
}

export default Home;
