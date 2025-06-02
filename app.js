const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/error-handler");
// require('./db/connect');

require("dotenv").config();
const port = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// static files
app.use(express.static("./public"));

// routes
app.use("/api/v1/tasks", tasks);
app.use(notFound);

// error handler
app.use(errorHandler);

const startServer = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log("SUCCESSFULLY CONNECTED TO DATABASE...");
    app.listen(port, console.log(`listening on the port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

startServer();
