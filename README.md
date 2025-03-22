# TSEEP

A full-stack application with a React frontend and a Node.js backend. This project includes user authentication, API integration, and a responsive UI.

---

## Features

- **Frontend**: Built with React, designed using Tailwind CSS or any other UI library.
- **Backend**: Built with Node.js and Express.js, using MongoDB for database storage.
- **Authentication**: JWT-based authentication for secure user login and registration.
- **Environment Variables**: Configurable settings for frontend and backend.

---

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) (v8 or higher)
- [MongoDB](https://www.mongodb.com/) (or MongoDB Atlas for cloud-based database)

---

## Getting Started

### 1. Clone the Repository

git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

### 2. Set Up the Frontend

1.Navigate to the `ui` folder:
cd ui
2.Install dependencies:
npm install
3.Create a .env file in the ui folder and add the following environment variable:
VITE_REACT_APP_BASEURL=http://localhost:3000
4.Start the frontend development server:
npm run dev

### 2. Set Up the Backend

1.Navigate to the backend folder:
cd backend
2.Install dependencies:
npm install
3.Create a .env file in the backend folder and add the following environment variables:

FRONT_END_URL=http://localhost:5173
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.qvfs0.mongodb.net/<dbname>
PORT=3000
JWT_SECRET=your_jwt_secret_key

4Start the backend server:
npm start

### Deployed Links
Frontend: quiz-app-rest-frontend.vercel.app
Backend:  quiz-app-rest-backend.vercel.app