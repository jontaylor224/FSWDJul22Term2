const errorHandler = (error, req, res, next) => {
  if (error.name === "ValidationError") {
    const valErr = {}

    for (let key of Object.keys(error)) {
      if (error.errors[key].properties && error.errors[key].properties.message) {
        valErr[key] = error.errors[key].properties.message
      } else {
        return res.status(422).json({ error: "Invalid submission" })
      }
    }
    return res.status(422).json(valErr)
  } else if (error.name === "NotFoundError") {
    return res.status(404).json({ error: "Resource not found." })
  }

  return res.status(500).json(error)
}

export default errorHandler