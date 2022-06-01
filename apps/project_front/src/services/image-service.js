import axios from 'axios'

export const getImage = async () => {
    try {
        const res = await axios.get('/api/image', {responseType: 'blob'})
        console.log('image fetched.')
        const imageUrl = URL.createObjectURL(res.data);
        return imageUrl
    } catch (error) {
        console.error(error)
        return null
    }
}