import 'dotenv/config'
import express from 'express'
import { createTables } from './db/db.js'
import { getImage } from './services/image-service.js'
import { getTodos, addTodo } from './services/todo-service.js'

const app = express()
app.use(express.json())
const PORT = process.env.PORT ?? 8080
await createTables()

app.get('/api/image', async (_req, res) => {
    const image = await getImage()
    res.writeHead(200 ,{ 'Content-Type' : 'image/jpg' })
    res.end(image, 'utf-8')
})

app.get('/api/todos', async (_req, res) => {
    const todos = await getTodos()
    res.json(todos)
})

app.post('/api/todos', async (req, res) => {
    const added = await addTodo(req.body.todo)
    res.send(added)
})

app.use('*',  (req, res, next) => {
    console.log(`Unknown path ${req.baseUrl}`)
    res.status(404).send()
})

app.listen(PORT, () => {
    console.log(`Server started in port ${PORT}`)
})