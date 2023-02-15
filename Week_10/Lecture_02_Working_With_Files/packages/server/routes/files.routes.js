import { Router } from 'express'
import path from 'path'
import fileUpload from 'express-fileupload'

const filesRoutes = Router()

filesRoutes.post('/', fileUpload(), async (req, res, next) => {
  console.log('why?')
  console.log(req.files)
  try {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).json({ error: "No files uploaded." })
    }

    console.log("Files:", req.files)

    // Any files submitted MUST have the name "superAwesomeFile"
    const { superAwesomeFile } = req.files

    const serverPath = `images/${superAwesomeFile.name}`
    const uploadPath = path.join(__dirname, `../public/${serverPath}`)

    superAwesomeFile.mv(uploadPath, (err) => {
      if (err) {
        res.status(500).json(err)
      }

      res.json({ path: `/${serverPath}` })
    })

  } catch (error) {
    next(error)
  }
})

export default filesRoutes