let todos = []

export const getTodos = async () => {
    return todos
}

export const addTodo = async (todo) => {
    todos = todos.concat(todo)
    return todo
}