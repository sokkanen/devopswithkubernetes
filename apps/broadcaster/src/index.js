import Express from "express"
import { connectAndSubscribe } from "./nats-client.js"

const app = Express()
app.use(Express.json())
const PORT = process.env.PORT || 8080

app.get('/healthz', (_req, res) => {
    res.send('OK')
})

app.use('*', (req, res) => {
    res.status(404).send('Unknown endpoint')
})

app.listen(PORT, async () => {
    console.log(`Broadcaster is listening to ${PORT}.`)
    await connectAndSubscribe()
})

