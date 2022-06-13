import { v4 } from 'uuid'
import queries from '../db/queries.js'
import { executeQuery } from '../db/db.js'

export const addTodo = async (todo) => {
    const params = [v4(), todo, 0]
    console.log(`Inserting a new todo...`)
    const result = await executeQuery(queries.addTodo, params)
    console.log(`New todo inserted successfully.`)
    return result.rows[0]
}

export const getTodos = async () => {
    console.log('Fetching all todos')
    const todos = await executeQuery(queries.getTodos)
    console.log(`Found ${todos.rowCount} todos.`)
    return todos.rows
}