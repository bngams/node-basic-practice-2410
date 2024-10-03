import { EntitySchema } from "typeorm";
import Category from "../models/category.mjs";

const CategoryEntity = new EntitySchema({
    name: "Category",
    target: Category,
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        name: {
            type: "varchar"
        }
    }
});
export default CategoryEntity