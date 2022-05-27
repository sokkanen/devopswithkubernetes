import 'dotenv/config'
import express from 'express'
import { getDailyImage } from './image-service.js'

const app = express()
const PORT = process.env.PORT

app.use(getDailyImage)
app.use('/', express.static('public'))

app.listen(PORT, () => {
    console.log(`Server started in port ${PORT}`)
})