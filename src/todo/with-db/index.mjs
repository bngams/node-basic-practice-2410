import { DataSource, EntitySchema } from "typeorm";
import TodoEntity from "../entities/todo.entity.mjs";
import TODOS from "../mocks/todo.mock.mjs";
import Todo from "../models/todo.mjs";

// créer une connexion à la DB 
const db = new DataSource({
    type: "sqlite",
    database: "db-todos.sqlite3",
    synchronize: true, // ask type typeORM to create tables, manage schema
    entities: [TodoEntity] 
});

// initialiser la connexion
await db.initialize();

// data mock
const todos = TODOS; //.map(todo => todo.id = null);

// utiliser le manager ou repo pour persister des données
await db.manager.save(todos);

// utiliser un repo pour recupérer des données
const todoRepo = db.getRepository(Todo);
const dbTodos = await todoRepo.find();
console.log("Les todos de la db : ", dbTodos);
