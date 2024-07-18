const express = require("express");
const http = require("http");

const cors = require("cors");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");

// routes
const { userRoutes } = require("./routes/userRoutes");
const { goalRoutes } = require("./routes/goalRoutes");
const { userWorkoutRoutes } = require("./routes/userWorkoutType");
const { userFoodRoutes } = require("./routes/userFoodRoutes");

const app = express();
const server = http.createServer(app);

//  CORS setup
app.use(cors());

//  mongo connection
mongoose.Promise = global.Promise;
const MONGODB_URI =
  "mongodb+srv://bharani:bharani@cluster0.e52lpvf.mongodb.net/fitnessTrackerNew";

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//  body-parser setup
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());


userRoutes(app);
goalRoutes(app);
userWorkoutRoutes(app);
userFoodRoutes(app);

app.get("/", (req, res) => {
  res.send("Root route called!");
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
});