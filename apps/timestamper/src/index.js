import express from 'express'
import { createTimestamp, getCurrent } from './timestamper.js'

const PORT = 3020
const app = express()
createTimestamp()

app.get('/', (_req, res) => {
    res.send(getCurrent())
})

app.listen(PORT, () => {
    console.log(`Timestamper listerning to port ${PORT}`)
})
