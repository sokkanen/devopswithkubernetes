import express from 'express'

const app = express()
const PORT = 3010
let calls = 0

app.get('*', (_req, res) => {
    res.send(`pong ${calls}`)
    calls += 1
})

app.listen(PORT, () => {
    console.log(`Ping pong is listerning to ${PORT}`)
})