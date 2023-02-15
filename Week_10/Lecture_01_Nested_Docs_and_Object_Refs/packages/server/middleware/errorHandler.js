const errorHandler = (error, req, res, next) => {
  console.log(error.name)


  if (error.name === "ValidationError") {
    const valErr = {}

    for (let key of Object.keys(error.errors)) {
      if (error.errors[key].properties) {
        valErr[key] = error.errors[key].properties.message
      } else {
        valErr[key] = `${key} cannot be a ${error.errors[key].valueType}`
      }
    }

    return res.status(422).json(valErr)
  } else if (error.name === "NotFoundError") {
    return res.status(404).json({ error: "Resource not found." })
  } else if (error.name === "CastError") {
    // console.log(error.errors)

    return res.status(422).json({ error: "Cast error" })
  }

  return res.status(500).json({ error: "Unexpected server error." })
}

export default errorHandler