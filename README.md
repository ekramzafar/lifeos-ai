![Node.js](https://img.shields.io/badge/Backend-Node.js-green)
![React](https://img.shields.io/badge/Frontend-React-blue)
![Notion](https://img.shields.io/badge/Database-Notion-black)
![OpenAI](https://img.shields.io/badge/AI-OpenAI-orange)
![Gmail API](https://img.shields.io/badge/API-Gmail-red)
![License](https://img.shields.io/badge/License-MIT-brightgreen)
# 🚀 LifeOS AI – Notion-Powered AI Agent


## 🧠 Overview

LifeOS AI is an intelligent, AI-powered productivity system designed to transform Notion into a centralized operating system for managing your digital life.

In today’s workflow, information is fragmented across multiple platforms—emails, task managers, notes, and calendars. This fragmentation leads to inefficiency, missed deadlines, and constant context switching. Traditional AI tools operate in isolation and lack the ability to take meaningful actions across these systems.

LifeOS AI addresses this challenge by integrating multiple services into a unified, action-oriented workflow powered by AI.

The system connects Gmail, Notion, and an AI reasoning engine to create a seamless pipeline where information is not just analyzed, but acted upon automatically.

Key capabilities include:
- Extracting actionable insights from incoming emails
- Converting unstructured data into structured tasks
- Automatically creating and managing tasks inside Notion
- Generating intelligent daily plans based on priorities and deadlines

By using Notion as the central “brain”, LifeOS AI enables users to manage all their work in one place while AI handles the heavy lifting of understanding and organizing tasks.

This shifts AI from being a passive assistant to an active agent that can execute real-world workflows autonomously.

Ultimately, LifeOS AI demonstrates the future of productivity—where AI systems don’t just assist users, but operate alongside them to manage work efficiently and intelligently.

---

## 💡 Problem
Modern workflows are scattered across:
- Emails 📩
- Tasks 📋
- Notes 📝

Most AI tools lack real context and cannot act across multiple platforms.

---

## 🚀 Solution
LifeOS AI solves this by:
- Reading emails from Gmail
- Extracting actionable tasks
- Automatically creating tasks in Notion
- Generating intelligent daily plans

👉 Workflow:

---

## ⚙️ Features

- 📩 Email → Task Automation  
- 🤖 AI Task Planning  
- 📊 Notion Integration  
- 🚀 One-click workflow execution  
- 🧠 Smart daily planning  

---
## 📊 System Architecture
  📩 Gmail API
         ↓
  (Fetch Emails)
         ↓
    🤖 AI Engine

(Task Extraction & Planning)
         ↓
⚙️ Backend (Node.js)
         ↓
📊 Notion Database
(Task Creation & Storage)
         ↓
🎨 Frontend (React)
(User Dashboard & Controls)

## 🛠 Tech Stack

### Frontend:
- React.js  
- HTML / CSS  

### Backend:
- Node.js  
- Express.js  

### APIs & Integrations:
- Notion API  
- Gmail API  
- OpenAI API  

### Tools:
- Axios  
- dotenv  
- CORS  

---




---

## 🔐 Environment Variables

Create a `.env` file:
NOTION_API_KEY=your_key
NOTION_DATABASE_ID=your_database_id
OPENAI_API_KEY=your_key


⚠️ Do not share this file publicly

---

## ▶️ Run Locally

```bash
npm install
node server.js
## Frontend:

cd lifeos-ui
npm install
npm start
