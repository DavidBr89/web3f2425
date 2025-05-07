const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const cors = require("cors");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const coursesRouter = require("./routes/courses");
const loggerMiddleware = require("./middlewares/logger_middleware");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(
  cors({
    origin: ["https://hogent.be", "http://localhost:5173"],
  })
);

// app.use(express.static(path.join(__dirname, "public")));

// Application level middleware
// app.use(loggerMiddleware);

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/courses", coursesRouter);

module.exports = app;
