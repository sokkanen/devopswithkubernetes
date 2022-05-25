import { v4 } from 'uuid'

let current = ''
const OUTPUT = v4()

const log = () => {
    setInterval(() => {
        const now = new Date()
        current = `${now.toISOString()}: ${OUTPUT}`
    }, 5000);
}

log()

export const getCurrent = () => {
    return current
}