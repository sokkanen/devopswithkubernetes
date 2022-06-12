import express from 'express'
import { fetchPingPongs, incrementPingPongs } from './pingpong-service.js'
import { createTables } from './db.js' 

const app = express()
const PORT = 3010

app.get('*', async (_req, res) => {
    await incrementPingPongs()
    const calls = await fetchPingPongs()
    res.send(`pong ${calls}\n`)
})

createTables() && app.listen(PORT, () => {
    console.log(`Ping pong is listerning to ${PORT}`)
})