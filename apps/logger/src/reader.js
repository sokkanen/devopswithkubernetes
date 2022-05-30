import fs from 'fs'
import readline from 'readline'

export const readLatestFromFile = (basePath, file) => {
    const dest = `${basePath}/${file}`
    const exists = fs.existsSync(dest)
    if (exists) {
        return new Promise((resolve, reject) => {
            const read = readline.createInterface({
                input: fs.createReadStream(dest, 'utf-8'),
                crlfDelay: Infinity
            })
            let lastLine = ''
            read.on('line', (line) => {
                lastLine = line
            })
            read.on('error', reject)
            read.on('close', () => {
                resolve(`${lastLine}`)
            })
        })
    }
    console.log(`${dest} does not exist. :(`)
}