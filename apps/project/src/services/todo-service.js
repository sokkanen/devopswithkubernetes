import { v4 } from 'uuid'
import queries from '../db/queries.js'
import { executeQuery } from '../db/db.js'

const validateTodo = (todo) => {
    if (todo.length > 140 || todo.length === 0) {
        console.log(`Todo not valid: Length ${todo.length} characters`)
        const error = new Error()
        error.type = 'userError'
        throw error
    }
}

export const addTodo = async (todo) => {
    validateTodo(todo)
    const params = [v4(), todo, 0]
    console.log(`Inserting a new todo...`)
    const result = await executeQuery(queries.addTodo, params)
    console.log(`New todo inserted successfully.`)
    return result.rows[0]
}

export const setAsComplete = async (todo) => {
    console.log(`Setting todo id ${todo.id} as complete...`)
    const params = [todo.id]
    await executeQuery(queries.setAsComplete, params)
    console.log(`Todo id ${todo.id} set as complete successfully.`)
    return
}

export const getTodos = async () => {
    console.log('Fetching all todos')
    const todos = await executeQuery(queries.getTodos)
    console.log(`Found ${todos.rowCount} todos.`)
    return todos.rows
}