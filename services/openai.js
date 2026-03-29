const axios = require("axios");

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

async function generatePlan(tasks) {
  const prompt = `
You are a productivity assistant.

Tasks:
${JSON.stringify(tasks, null, 2)}

Give:
1. Top 3 priorities
2. Suggested schedule
3. Short advice
`;

  const response = await axios.post(
    "https://api.openai.com/v1/chat/completions",
    {
      model: "gpt-4o-mini",
      messages: [
        { role: "user", content: prompt }
      ],
    },
    {
      headers: {
        "Authorization": `Bearer ${OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
    }
  );

  return response.data.choices[0].message.content;
}



async function extractTasksFromEmails(emails) {
  return emails.map((email) => ({
    title: email,
    status: "Todo",
  }));
}

module.exports = { generatePlan, extractTasksFromEmails };