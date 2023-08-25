const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");
const { error } = require("console");

// starting the app
const app = express();
// setting up the environment
const port = process.env.PORT || 3000;
const nodeEnv = process.env.nodeENV || "development";

// setting up environment for the app
app.set("port", port);
app.set("env", nodeEnv);

// using middlewares
app.use(morgan("tiny"));
app.use(bodyParser.json());

// importing the routes middleware
app.use("/", require(path.join(__dirname, "router")));

// setting 404 for empty requests
app.use((req, res, next) => {
  const err = new Error(`Requested ${req.method} ${req.url} Not Found!`);
  err.status = 404;
  next(err);
});

// sending a response for the error
app.use((req, res, nex) => {
  console.error(err);
  res.status(err.status);
  res.send({
    error: {
      message: err.message,
    },
  });
});

// setting up the port for the listen
app.listen(port, () => {
  console.log(
    `App runs on port ${app.get("port")} | environment : ${app.get("env")}`
  );
});
