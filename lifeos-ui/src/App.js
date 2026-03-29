import React, { useState } from "react";
import axios from "axios";

function App() {
  const [plan, setPlan] = useState("");
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(false);

  const generateDay = async () => {
    setLoading(true);
    const res = await axios.get("http://localhost:5000/generate-day");
    setPlan(res.data.plan);
    setLoading(false);
  };

  const processEmails = async () => {
    setLoading(true);
    const res = await axios.get("http://localhost:5000/process-emails");
    setEmails(res.data.tasks);
    setLoading(false);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>🚀 LifeOS AI Dashboard</h1>

      <button onClick={generateDay}>Generate My Day</button>
      <button onClick={processEmails} style={{ marginLeft: "10px" }}>
        Process Emails → Notion
      </button>

      {loading && <p>Loading...</p>}

      <h2>🧠 AI Plan</h2>
      <pre>{plan}</pre>

      <h2>📩 Email Tasks</h2>
      <ul>
        {emails.map((task, index) => (
          <li key={index}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;