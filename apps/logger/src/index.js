import express from 'express'
import 'express-async-errors'

import { readLatestFromFile } from './reader.js'
import { getPingPongs, checkHealth } from './services/pingpongService.js'
import {¬†getTimeStamp } from './services/timestampService.js'

const app = express()
const PORT = 3000
const MESSAGE = process.env.MESSAGE ?? 'No message. :('

app.get('/', async (_req, res) => {
    //const lastLine = await readLatestFromFile('../files', 'entries.txt')
    //const pongs = await readLatestFromFile('../pongs', 'pongs.txt')
    const pongs = await getPingPongs()
    const timeStamp = await getTimeStamp()
    res.send(`${MESSAGE}\n${timeStamp}Ping / Pongs: ${pongs}`)
})

app.get('/health', async (_req, res) => {
    const pingPongReady = await checkHealth()
    pingPongReady ?
    res.send('OK') :
    res.status(500).send()
})

app.use((_err, _req, res, _next) => {
    console.log('Oh no! An error occurred. :(')
    res.status(500).send('')
})

app.listen(PORT, () => {
    console.log(`App is listening to ${PORT}.`)
})
