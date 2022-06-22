import express from 'express'
import { getTodos, addTodo } from '../services/todo-service.js'

export const todoRouter = express.Router()

todoRouter.get('/', async (_req, res) => {
    const todos = await getTodos()
    res.json(todos)
})

todoRouter.post('/', async (req, res) => {  
    const added = await addTodo(req.body.todo)
    res.send(added)
})

todoRouter.use((_error, _req, res, _next) => {
    res.status(400).send('Todo length must be between 1 and 140 characters.')
})