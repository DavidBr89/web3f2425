const loggerMiddleware = (req, res, next) => {
  console.log(req.ip);
  next();
  //   res.send("Middleware response");
};

module.exports = loggerMiddleware;
