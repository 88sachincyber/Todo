**This is a simple Todo List application built using the MERN stack (MongoDB, Express, React, Node.js). You can add, view, and manage tasks easily with a responsive frontend and backend API.
**
🌟 Features
Add tasks
View all tasks
Clean UI
RESTful API backend
MongoDB for persistent storage

🛠️ Tech Stack
Frontend: React, Axios, CSS, React Icons
Backend: Node.js, Express.js, MongoDB (Mongoose)
Database: MongoDB (local)

🚀 Getting Started
Prerequisites
Make sure you have these installed on your system:
Node.js and npm
MongoDB (running locally)
Git (optional)

📂 Folder Structure
project-root/
├── backend/          # Express + MongoDB (Mongoose)
│   ├── Models/
│   │   └── Todo.js
│   └── index.js
└── frontend/         # React app
    ├── src/
    │   ├── App.jsx
    │   ├── Home.jsx
    │   ├── Create.jsx
    │   └── App.css
    └── package.json

🔧 Backend Setup (Node.js + Express + MongoDB)
Open a terminal and navigate to the backend/ directory.
Install backend dependencies:
npm install
Make sure MongoDB is running locally on mongodb://127.0.0.1:27017/.
Start the server:
node index.js
The server will run on:
http://localhost:3001

🎨 Frontend Setup (React)
Open another terminal and navigate to the frontend/ directory.
Install frontend dependencies:
npm install
Start the React app:
npm run dev
The app will run on:
http://localhost:5173 (or another Vite port)

🤝 Contributing
Feel free to submit issues or pull requests. If you have suggestions or improvements, you're welcome!

