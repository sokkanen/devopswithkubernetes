import express from 'express'
import { saveToFile } from './persist-data.js'

const app = express()
const PORT = 3010
let calls = 0

app.get('*', (_req, res) => {
    calls += 1
    res.send(`pong ${calls}\n`)
    //saveToFile(calls)
})

app.listen(PORT, () => {
    console.log(`Ping pong is listerning to ${PORT}`)
})