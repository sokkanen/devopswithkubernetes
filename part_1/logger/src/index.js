import express from 'express'
import { getCurrent } from './logger.js'

const app = express()
const PORT = 3000

app.get('/current', (_req, res) => {
    res.send(getCurrent())
})

app.listen(PORT, () => {
    console.log(`App is listening to ${PORT}.`)
})
