import fs from 'fs'
import readline from 'readline'

const basePath = '../files'

const readLatest = () => {
    const file = `${basePath}/entries.txt`
    const exists = fs.existsSync(file)
    if (exists) {
        return new Promise((resolve, reject) => {
            const read = readline.createInterface({
                input: fs.createReadStream(file, 'utf-8'),
                crlfDelay: Infinity
            })
            let lastLine = ''
            read.on('line', (line) => {
                lastLine = line
            })
            read.on('error', reject)
            read.on('close', () => {
                resolve(`${lastLine}\n`)
            })
        })
    }
    console.log(`${file} does not exist. :(`)
}

export const getLatest = () => {
    return readLatest()
}