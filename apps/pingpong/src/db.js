// Straight from my old project

import pg from 'pg'
import dotenv from 'dotenv'
import queries from './queries.js'

const isProd = process.env.NODE_ENV === 'prod'

!isProd && dotenv.config()

const { APP_PG_HOST, APP_PG_USER, APP_PG_DB, APP_PG_PASSWORD, APP_PG_PORT } = process.env

export const pool = new pg.Pool({
    host: APP_PG_HOST,
    user: APP_PG_USER,
    database: APP_PG_DB,
    password: APP_PG_PASSWORD,
    port: APP_PG_PORT,
    ssl: false
})

// Parameters are expected to be passed as an array of primitives
export const executeQuery = async (query, parameters) => {
    const client = await pool.connect()
    try {
        const result = await client.query(query, parameters)
        return result
    } catch (error) {
        console.error(error.stack)
        error.type = 'dbError'
        throw error
    } finally {
        client.release()
    }
}

export const testDbConnection = async () => {
    try {
        await executeQuery('SELECT NOW();')
        return true
    } catch (error) {
        return false
    }
}

export const createTables = async () => {
    const connected = await testDbConnection()
    if (connected) {
        await Promise.all([
            await executeQuery(queries.createPingPongTable),
            await executeQuery(queries.initializePingPongs)
        ])
        console.log('Tables initialized successfully.')
    }
}
