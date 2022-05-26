import { v4 } from 'uuid'
import fs from 'fs'

const OUTPUT = v4()
const basePath = '../files'

const createFolderIfNotExists = () => {
    const exists = fs.existsSync(basePath)
    exists ? null : fs.mkdirSync(basePath) 
}

const saveToFile = (entry) => {
    try {
        createFolderIfNotExists()
        fs.appendFileSync(`${basePath}/entries.txt`, entry, "utf-8")
        console.log(`${entry} successfully saved.`)
    } catch (error) {
        console.log(error)
    }
}

const createTimestamp = () => {
    setInterval(() => {
        const now = new Date()
        const entry = `${now.toISOString()}: ${OUTPUT}\n`
        saveToFile(entry)
    }, 5000);
}

createTimestamp()