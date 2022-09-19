require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const port = process.env.PORT || 3001;

//Routes
const userRoutes = require("./api/UserRoutes");
const accountRoutes = require("./api/AccountRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use("/users", userRoutes);
app.use("/account", accountRoutes);

mongoose
  .connect(process.env.MONGODB, { useUnifiedTopology: true })
  .then(() => {
    app.listen(port, () => {
      console.log("app Running");
    });
  })
  .catch((err) => console.log(err));
