import axios from 'axios'
import { SSL_OP_EPHEMERAL_RSA } from 'constants'
import fs from 'fs'
import { pipeline } from 'stream/promises';

const BASEPATH = './public/images'
const URL = 'https://picsum.photos/1200'

const fetchAndSaveImage = async (imagePath) => {
    const imagePromise = new Promise(async (resolve, reject) => {
        const writer = fs.createWriteStream(imagePath)
        const response = await axios.get(URL, { responseType: 'stream' })
        const img = response.data.pipe(writer).on('close', () => {
            console.log('File saved.')
            const image = readLocalImage(imagePath)
            return resolve(image)
        })
    })
    return await imagePromise
}

const createFolderIfNotExists = () => {
    const exists = fs.existsSync(BASEPATH)
    exists ? null : fs.mkdirSync(BASEPATH) 
}

const readLocalImage = (imagePath) => {
    console.log('Fetching locally stored image..')
    return fs.readFileSync(imagePath)
}

export const getImage = async () => {
    const now = new Date().toISOString().split('T')[0]
    const imageName = `img_${now}`
    const imagePath = `${BASEPATH}/${imageName}.jpg`
    if (fs.existsSync(imagePath)) {
        console.log(`${imageName} found.`)
        return readLocalImage(imagePath)
    } else {
        createFolderIfNotExists()
        return await fetchAndSaveImage(imagePath)
    }
}




