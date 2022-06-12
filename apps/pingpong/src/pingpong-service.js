import queries from './queries.js'
import { executeQuery } from './db.js' 

export const fetchPingPongs = async () => {
    const count = await executeQuery(queries.getPingPongs)
    return count.rows[0].count
}

export const incrementPingPongs = async () => {
    const result = await executeQuery(queries.incrementPingPongs)
    if (result.rowCount === 1) {
        console.log('Incrementing pings / pongs successful.')
    }
}