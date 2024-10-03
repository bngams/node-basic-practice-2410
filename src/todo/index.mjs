// importer la classe

// 1. si on a écrit directement: export class Todo
// import { Todo, ... } from './todo.mjs';

// 2. si on a écrit export default Todo;
import TODOS from './mocks/todo.mock.mjs';

// définir notre tableau de todos
const todos = TODOS;

// afficher les tâches à faire (!completed ou completed === fasle)
console.log(todos.filter(todo => !todo.completed))