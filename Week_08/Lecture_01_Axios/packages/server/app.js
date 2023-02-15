import express from 'express'
import cors from 'cors'
import apiRoutes from './routes'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', apiRoutes)

app.all('*', (req, res) => {
  res.status(404).json({ message: "Resource Not Found" })
})

app.listen(8080, () => console.log("[Server] Listening on port 8080"))