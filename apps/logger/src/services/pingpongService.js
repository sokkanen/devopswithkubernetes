import axios from 'axios'

const PINGPONG_URL = process.env.PINGPONG_URL || 'pingpong-svc'
const PINGPONG_PORT = process.env.PINGPONG_PORT || 8080

export const getPingPongs = async () => {
    try {
        const response = await axios.get(`http://${PINGPONG_URL}:${PINGPONG_PORT}`)
        return response.data
    } catch (error) {
        console.log(error)
        throw error
    }
}

export const checkHealth = async () => {
    try {
        const response = await axios.get(`http://${PINGPONG_URL}:${PINGPONG_PORT}/health`)
        return true
    } catch (error) {
        console.log(error)
        return false
    }
}