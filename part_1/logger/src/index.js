import express from 'express'
import { readLatestFromFile } from './reader.js'

const app = express()
const PORT = 3000

app.get('/latest', async (_req, res) => {
    const lastLine = await readLatestFromFile('../files', 'entries.txt')
    const pongs = await readLatestFromFile('../pongs', 'pongs.txt')
    res.send(`${lastLine}.\nPing / Pongs: ${pongs}\n`)
})

app.listen(PORT, () => {
    console.log(`App is listening to ${PORT}.`)
})
