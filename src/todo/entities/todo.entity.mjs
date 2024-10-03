import { EntitySchema } from "typeorm";
import Todo from "../models/todo.mjs";

const TodoEntity = new EntitySchema({
    name: "Todo",
    target: Todo,
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        title: {
            type: "varchar"
        },
        completed: {
            type: "boolean"
        },
        userId: {
            type: "int"
        }
    }
});
export default TodoEntity;