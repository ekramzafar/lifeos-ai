const axios = require("axios");

const NOTION_API_KEY = process.env.NOTION_API_KEY;
const DATABASE_ID = process.env.NOTION_DATABASE_ID;

const headers = {
  Authorization: `Bearer ${NOTION_API_KEY}`,
  "Notion-Version": "2022-06-28",
  "Content-Type": "application/json",
};

// 🔹 Get tasks from Notion
async function getTasks() {
  const res = await axios.post(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    {},
    { headers }
  );

  return res.data.results.map((page) => ({
    title: page.properties.Name.title[0]?.plain_text || "Untitled",
    status: page.properties.Status?.select?.name || "No Status",
    deadline: page.properties.Deadline?.date?.start || "No Deadline",
  }));
}

// 🔥 Create new task in Notion
async function createTask(task) {
  const res = await axios.post(
    "https://api.notion.com/v1/pages",
    {
      parent: { database_id: DATABASE_ID },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: task.title,
              },
            },
          ],
        },
        Status: {
          select: {
            name: "Todo",
          },
        },
      },
    },
    { headers }
  );

  return res.data;
}

module.exports = { getTasks, createTask };