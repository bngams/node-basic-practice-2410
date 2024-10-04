// créer une connexion à la DB 
const db = new DataSource({
    type: "sqlite",
    database: "db-todos.sqlite3",
    synchronize: true, // ask type typeORM to create tables, manage schema
    entities: [TodoEntity] 
});

// initialiser la connexion
await db.initialize();

export default db;