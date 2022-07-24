import axios from 'axios'

const TIMESTAMP_URL = process.env.TIMESTAMP_URL || 'timestamper-svc'
const TIMESTAMP_PORT = process.env.TIMESTAMP_PORT || 8080

export const getTimeStamp = async () => {
    try {
        const response = await axios.get(`http://${TIMESTAMP_URL}:${TIMESTAMP_PORT}`)
        return response.data 
    } catch (error) {
        console.log(error)
        throw error
    }
}