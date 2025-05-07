const express = require("express");
const loggerMiddleware = require("../middlewares/logger_middleware");
const router = express.Router();

router.use(loggerMiddleware);

// In deze file komt je eigenlijk in vanaf het pad "/courses"

router.get("/", (req, res) => {
  console.log(req.query);

  if (req.query.locale === "nl") {
    return res.send("Vakken: [....]");
  }
  res.send("Courses: [....]");
});

// router.get("/test", (req, res) => {
//   res.send("Test");
// });

router.get("/test", (req, res) => {
  res.send("Test");
});

router.get("/:courseId", (req, res, next) => {
  const { courseId } = req.params;

  if (typeof Number.parseInt(courseId) !== "number") {
    next();
  }

  res.send("Course met id: ....");
});

// router.all("*", (req, res) => {
//   res.send("Fallback");
// });

module.exports = router;
