require("dotenv").config();
const express = require("express");
const cors = require("cors");

const { getTasks } = require("./services/notion");
const { generatePlan } = require("./services/openai");
const { getEmails } = require("./services/gmail");
const { extractTasksFromEmails } = require("./services/openai");
const { createTask } = require("./services/notion");
const app = express(); // ✅ THIS WAS MISSING

app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

// Main route
app.get("/generate-day", async (req, res) => {
  try {
    const tasks = await getTasks();
    const plan = await generatePlan(tasks);

    res.json({ tasks, plan });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error generating plan");
  }
});
app.get("/process-emails", async (req, res) => {
  try {
    const emails = await getEmails();

    const tasks = emails.map((e) => ({
      title: e,
      status: "Todo",
    }));

    res.json({ emails, tasks });

  } catch (err) {
    console.error(err);
    res.status(500).send("Error processing emails");
  }
});
// Start server
app.listen(process.env.PORT || 5000, () => {
  console.log(`🚀 Server running on port ${process.env.PORT || 5000}`);
});