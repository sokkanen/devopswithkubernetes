import 'dotenv/config'
import express from 'express'

const app = express()
const PORT = process.env.PORT

app.use(express.static('public'))

app.get('/', (_req, res) => {
    res.send('Hello Todo-App!')
})

app.listen(PORT, () => {
    console.log(`Server started in port ${PORT}`)
})