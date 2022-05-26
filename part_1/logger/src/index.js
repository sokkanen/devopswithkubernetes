import express from 'express'
import { getLatest } from './reader.js'

const app = express()
const PORT = 3000

app.get('/latest', async (_req, res) => {
    const lastLine = await getLatest()
    res.send(lastLine)
})

app.listen(PORT, () => {
    console.log(`App is listening to ${PORT}.`)
})
