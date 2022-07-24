import express from 'express'
import { createTimestamp, getCurrent } from './timestamper.js'

const PORT = process.env.PORT || 8080
const app = express()
createTimestamp()

app.get('/', (_req, res) => {
    res.send(getCurrent())
})

app.listen(PORT, () => {
    console.log(`Timestamper listerning to port ${PORT}`)
})
