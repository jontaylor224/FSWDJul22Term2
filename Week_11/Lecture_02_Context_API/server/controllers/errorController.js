import createHttpError from "http-errors";

export const errorHandler = (error, req, res, next) => {
  switch (error.name) {
    case "AccessDeniedError":
      return res
        .status(403)
        .json({ error: "You do not have access to that resource" });
    case "DuplicateEmailError":
      return res.status(422).json({
        error: "Validation error",
        errors: { email: "Email already registered." },
      });
    case "UnauthorizedError":
      return res.status(401).json({ error: "You must be signed in" });
    case "NotFoundError":
      return res.status(404).json({ error: "Resource not found" });
    case "ValidationError":
      const validationErrors = {
        error: "Validation error",
        errors: {},
      };
      for (let key of Object.keys(error.errors)) {
        if (
          error.errors[key].properties &&
          error.errors[key].properties.message
        ) {
          validationErrors.errors[key] = error.errors[key].properties.message;
        }
      }

      return res.status(422).json(validationErrors);
    default:
      return res.status(500).json({ error: "Unresolved error" });
  }
};

export const catchRoute = (req, res, next) => {
  next(createHttpError(404, { name: "NotFoundError" }));
};
