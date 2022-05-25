import { v4 } from 'uuid'

const OUTPUT = v4()

const main = () => {
    setInterval(() => {
        const now = new Date()
        console.log(`${now.toISOString()}: ${OUTPUT}`)
    }, 5000);
}

main()