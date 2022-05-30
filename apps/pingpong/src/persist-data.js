import fs from 'fs'

const basePath = '../pongs'

const createFolderIfNotExists = () => {
    const exists = fs.existsSync(basePath)
    exists ? null : fs.mkdirSync(basePath) 
}

export const saveToFile = (entry) => {
    try {
        createFolderIfNotExists()
        fs.writeFileSync(`${basePath}/pongs.txt`, entry.toString(), "utf-8")
        console.log(`${entry} successfully saved.`)
    } catch (error) {
        console.log(error)
    }
}