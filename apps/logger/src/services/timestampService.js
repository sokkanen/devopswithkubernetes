import axios from 'axios'

const URL = 'timestamper-svc'
const TIMESTAMP_PORT = 80

export const getTimeStamp = async () => {
    try {
        const response = await axios.get(`http://${URL}:${TIMESTAMP_PORT}`)
        return response.data 
    } catch (error) {
        console.log(error)
        throw error
    }
}