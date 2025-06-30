# Password Manager

A full-stack password manager application built with React (frontend), Express.js (backend), and MongoDB (database).

## Features
- Add, view, and delete saved passwords
- Modern, responsive UI with React
- RESTful API with Express.js
- MongoDB for secure data storage
- CORS enabled for frontend-backend communication

## Folder Structure
```
password_manager/
├── backend/         # Express.js server and API
│   ├── server.js
│   ├── package.json
│   └── ...
├── frontend/        # React app
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
└── README.md        # Project documentation
```

## Getting Started

### Prerequisites
- Node.js and npm installed
- MongoDB Atlas account or local MongoDB instance

### Backend Setup
1. Navigate to the `backend` folder:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file in the `backend` folder with your MongoDB URI:
   ```env
   MONGO_URI=your_mongodb_connection_string
   ```
4. Start the backend server:
   ```sh
   npm start
   ```
   The server will run on `http://localhost:3000`.

### Frontend Setup
1. Navigate to the `frontend` folder:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the React development server:
   ```sh
   npm run dev
   ```
   The app will run on `http://localhost:5173` (or similar).

## Usage
- Open the frontend in your browser.
- Add, view, and delete passwords using the UI.
- All data is securely stored in MongoDB.

## API Endpoints
- `GET /` - Fetch all passwords
- `POST /` - Add a new password
- `DELETE /:id` - Delete a password by ID

## Technologies Used
- React
- Express.js
- MongoDB
- Node.js

## License
This project is licensed under the MIT License.
