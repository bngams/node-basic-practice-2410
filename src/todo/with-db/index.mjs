import { DataSource, EntitySchema } from "typeorm";
import TodoEntity from "../entities/todo.entity.mjs";
import TODOS from "../mocks/todo.mock.mjs";
import Todo from "../models/todo.mjs";
import db from "../datasource/db.mjs";

// data mock
const todos = TODOS; //.map(todo => todo.id = null);

// utiliser le manager ou repo pour persister des données
await db.manager.save(todos);

// utiliser un repo pour recupérer des données
const todoRepo = db.getRepository(Todo);
const dbTodos = await todoRepo.find();
console.log("Les todos de la db : ", dbTodos);
