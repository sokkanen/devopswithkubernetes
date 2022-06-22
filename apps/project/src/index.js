import 'dotenv/config'
import express from 'express'
import 'express-async-errors'
import { createTables } from './db/db.js'
import { getImage } from './services/image-service.js'
import { todoRouter } from './routers/todo-router.js'


const app = express()
app.use(express.json())
const PORT = process.env.PORT ?? 8080
await createTables()

app.get('/api/image', async (_req, res) => {
    const image = await getImage()
    res.writeHead(200 ,{ 'Content-Type' : 'image/jpg' })
    res.end(image, 'utf-8')
})

app.use('/api/todos', todoRouter)

app.use('*',  (req, res, next) => {
    console.log(`Unknown path ${req.baseUrl}`)
    res.status(404).send()
})

app.listen(PORT, () => {
    console.log(`Server started in port ${PORT}`)
})