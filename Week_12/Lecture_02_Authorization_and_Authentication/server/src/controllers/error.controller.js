export const errorHandler = (error, req, res, next) => {
  if (error.name === "UnauthorizedErro") {
    return res.status(401).json({ message: "You must be logged in" });
  }
  if (error.name === "ValidationError") {
    const errs = {};
    for (let key of Object.keys(error.errors)) {
      errs[key] = error.errors[key].properties.message;
    }

    return res.status(422).json({ message: "Invalid submission", error: errs });
  }
  return res.sendStatus(500);
};
