import express from 'express'
import { fetchPingPongs, incrementPingPongs } from './pingpong-service.js'
import { createTables, testDbConnection } from './db.js' 

const app = express()
const PORT = 3010

app.get('/health', async (_req, res) => {
    const appReady = await testDbConnection()
    appReady ?
    res.status(200).send('OK') :
    res.status(500).send()
})

app.get('*', async (_req, res) => {
    await incrementPingPongs()
    const calls = await fetchPingPongs()
    res.send(`pong ${calls}\n`)
})

app.use((error, req, res, next) => {
    if (error.type === 'dbError') {
        appReady = false
        res.status(500).send()
    } else {
        next(error)
    }
})

createTables()

app.listen(PORT, () => {
    console.log(`Ping pong is listerning to ${PORT}`)
})