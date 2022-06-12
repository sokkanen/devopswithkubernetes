const createPingPongTable = `
    CREATE TABLE IF NOT EXISTS "pingpong" (
	    "id" VARCHAR(36) NOT NULL,
	    "count" INTEGER NOT NULL,
	    PRIMARY KEY ("id")
    );`

const initializePingPongs = `
    INSERT INTO "pingpong" (id, count)
    VALUES ('pingpongs', 0)
    ON CONFLICT (id) DO NOTHING;
`

const incrementPingPongs = `
    UPDATE "pingpong"
    SET count = count + 1
    WHERE id = 'pingpongs';
`

const getPingPongs = `
    SELECT count FROM "pingpong" WHERE id = 'pingpongs';
`

export default { 
    createPingPongTable,
    initializePingPongs,
    incrementPingPongs,
    getPingPongs
}
