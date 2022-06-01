import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();
const PORT = process.env.PORT ?? 8090
const PROXY_URL = process.env.PROXY_URL ?? 'localhost'
const PROXY_PORT = process.env.PROXY_PORT ?? 8080

const PROXY_TARGET = `http://${PROXY_URL}:${PROXY_PORT}`

app.use(express.static('build'));

console.log(import.meta.url)

app.use('/api', createProxyMiddleware({
    target: PROXY_TARGET,
    changeOrigin: true,
    logLevel: 'debug'
}))

app.listen(PORT, () => {
  console.log(`todo front listening to port ${PORT}`)
});