# MERN Token Distribution System

A full-stack MERN application for managing agents, uploading CSV files, validating them, distributing tasks evenly among agents, and tracking assigned data.

🔗 **Live Demo**: [https://mern-token-distribution.vercel.app](https://mern-token-distribution.vercel.app)

---

## 📌 Features

### 🔐 Admin
- JWT-based secure login system.
- Admin dashboard with controls for agent and task management.

### 👨‍💼 Agents
- Add, edit, and manage agents with:
  - Name
  - Email
  - Mobile number (with country code)
  - Password

### 📁 CSV Upload
- Upload CSV/XLSX/XLS files.
- Validation for file type and data structure.
- Auto-distributes tasks to 5 agents:
  - If items are not divisible by 5, remaining tasks are distributed sequentially.

### 📊 Task Management
- View tasks distributed to each agent.
- All data is stored in MongoDB.
- Tasks include:
  - First Name
  - Phone Number
  - Notes

---

## 🛠️ Tech Stack

- **Frontend**: React.js (Create React App), Tailwind CSS, Axios
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (with Mongoose)
- **Authentication**: JWT

---

## 🚀 How to Run Locally

### Backend

```bash
git clone https://github.com/your-username/mern-token-distribution.git
cd backend
npm install
npm run dev
