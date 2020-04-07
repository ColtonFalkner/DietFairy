require("dotenv").config();

const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const dbConnection = require("./db"); // loads our connection to the mongo database
const passport = require("./passport");
const cors = require("cors");
const path = require("path");
const axios = require("axios");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  session({
    secret: process.env.APP_SECRET || "test-secret",
    store: new MongoStore({ mongooseConnection: dbConnection }),
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
} else {
  app.use(express.static("public"));
}

app.use("/auth", require("./auth"));

app.get("/api/getRecipe", async (req, res) => {
  const { q, from, to } = req.query;
  const url = `https://api.edamam.com/search?q=${q}&app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}&from=${from}&to=${to}`;
  try {
    let result = await axios.get(url);
    res.json(result.data);
  } catch (error) {
    console.log("Error: ", error);
  }
});

// ====== Error handler ====
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500);
});
const PORT = process.env.PORT || 3001;

app.listen({ port: PORT }, () => {
  console.log(`Server ready at http://localhost:${PORT}`);
});
