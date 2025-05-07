const authMiddleware = (req, res, next) => {
  const isAuthenticated = true;

  if (isAuthenticated) {
    next();
  } else {
    res.sendStatus(401);
  }
};
