import axios from 'axios'

export const getTodos = async () => {
    return await performRequest('GET', '/api/todos')
}

export const addTodo = async (todo) => {
    return await performRequest('POST', '/api/todos', { todo })
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
        console.error(error)
        return null
    }
}