# Simple Node.js To-Do App

This is a sample Node.js project built using Express.js. It serves as a basic "To-Do" application and is designed to help you understand how Node.js and Express.js work together in a real-world scenario.

> **Note**: I did not originally create the idea for this project — it was cloned from [link](https://github.com/john-smilga/node-express-course/tree/main/03-task-manager). However, I use this project frequently in my own work and you're welcome to use or modify it as needed.

## Features

- Basic CRUD operations for a to-do list
- Express.js server setup
- MongoDB Atlas integration
- Environment-based configuration using `.env`

## Getting Started

Follow these steps to run the project locally:

### 1. Clone the Repository

```bash
git clone "repo-url"
cd "repo-name"
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a .env file in the root directory and add your MongoDB Atlas URI:
```env
MONGO_URI=your_mongodb_connection_string
```
> **Note**:Make sure you have a valid MongoDB Atlas account and a working connection URI.

### 4. Start the Server

Run the command and the app starts up on the port 5000 of the local machine server.
```bash
npm start
```
