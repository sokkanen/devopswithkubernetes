const createTodosTable = `
    CREATE TABLE IF NOT EXISTS "todos" (
        "id" VARCHAR(36) NOT NULL,
        "todo" VARCHAR(140) NOT NULL,
	    "completed" INTEGER,
	    PRIMARY KEY ("id")
    );`

const addTodo = `
    INSERT INTO "todos" (id, todo, completed)
    VALUES ($1, $2, $3) RETURNING id, todo, completed;
`

const getTodos = `
    SELECT * FROM "todos";
`

const setAsComplete = `
    UPDATE "todos"
    SET completed = 1
    WHERE id = $1;
`

export default { 
    createTodosTable,
    addTodo,
    getTodos,
    setAsComplete
}
