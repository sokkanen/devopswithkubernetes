import axios from 'axios'

export const getTodos = async () => {
    /*return [
        { todo: 'testiTodo', completed: false },
        { todo: 'tokaTodo', completed: false },
        { todo: 'valmisTodo', completed: true }
    ]*/
    return await performRequest('GET', '/api/todos')
}

export const addTodo = async (todo) => {
    const added = await performRequest('POST', '/api/todos', { todo })
    return added
}

export const setAsComplete = async (todo) => {
    const response = await performRequest('PUT', '/api/todos', { todo })
    return response.data
}

const performRequest = async (method, url, data = undefined) => {
    try {
        const response = await axios.request({
            method: method,
            url: url,
            data: data,
            headers: { 'content-type': 'application/json' }
        })
        return response.data
    } catch (error) {
        throw error
    }
}