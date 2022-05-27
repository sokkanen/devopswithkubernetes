import axios from 'axios'
import fs from 'fs'

const BASEPATH = './public/images'
const URL = 'https://picsum.photos/1200'

const fetchAndSaveImage = async (filename) => {
    const image = await axios.get(URL, { responseType: 'stream' })
    image.data.pipe(fs.createWriteStream(`${BASEPATH}/${filename}.jpg`))
}

const createFolderIfNotExists = () => {
    const exists = fs.existsSync(BASEPATH)
    exists ? null : fs.mkdirSync(BASEPATH) 
}

const readLocalImage = () => {
    const now = new Date().toISOString().split('T')[0]
    const imageFile = `img_${now}`
    const exists = fs.existsSync(`${BASEPATH}/${imageFile}.jpg`)
    return { exists: exists, filename: imageFile }
}

export const getDailyImage = async (_req, _res, next) => {
    const read = readLocalImage()
    if (read.exists) {
        console.log(`${read.filename} already exists.`)
        next()
    } else {
        try {
            createFolderIfNotExists()
            await fetchAndSaveImage(read.filename)
            console.log(`${read.filename} successfully saved.`)
        } catch (error) {
            console.log(error)
        } finally {
            next()
        }
    }
}




