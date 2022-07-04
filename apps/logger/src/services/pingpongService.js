import axios from 'axios'

const URL = 'pingpong-svc'
const PINGPONGPORT = 80

export const getPingPongs = async () => {
    try {
        const response = await axios.get(`http://${URL}:${PINGPONGPORT}`)
        return response.data
    } catch (error) {
        console.log(error)
        throw error
    }
}

export const checkHealth = async () => {
    try {
        const response = await axios.get(`http://${URL}:${PINGPONGPORT}/health`)
        return true
    } catch (error) {
        console.log(error)
        return false
    }
}