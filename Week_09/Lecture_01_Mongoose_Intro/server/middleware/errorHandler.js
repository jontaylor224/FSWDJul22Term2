const errorHandler = (error, req, res, next) => {
  if (error.name === "ValidationError") {
    const errorsObject = {}
    for (let key of Object.keys(error.errors)) {
      errorsObject[key] = error.errors[key].properties.message
    }

    return res.status(422).json(errorsObject)
  }

  return res.status(500).json({ message: "Unhandled Server Error" })
}

export default errorHandler