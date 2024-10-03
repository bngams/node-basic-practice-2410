import { DataSource, EntitySchema } from "typeorm";
import CategoryEntity from "./entities/category.entity.mjs";
import PostEntity from "./entities/post.entity.mjs";
import Post from "./models/post.mjs";
import Category from "./models/category.mjs";

// créer une connexion à la DB 
const db = new DataSource({
    type: "sqlite",
    database: "db-typeorm.sqlite3",
    synchronize: true, // ask type typeORM to create tables, manage schema
    entities: [PostEntity, CategoryEntity] 
});

// initialiser la connexion
await db.initialize();

const category1 = new Category(null, "TypeScript");
const category2 = new Category(null, "Programming");

// utiliser le manager pour persister des données
await db.manager.save([category1, category2]);
console.log("Les categories :", category1, category2);

// utiliser un repo pour persister des données
const post = new Post();
post.title = "Control flow based type analysis";
post.text = "TypeScript 2.0 implements a control flow-based type analysis for local variables and parameters.";
post.categories = [category1, category2];

const postRepository = db.getRepository(Post);
await postRepository.save(post);

// utiliser un repo pour recupérer des données
const posts = await postRepository.find();
console.log("Les posts : ", posts);

const postsWithCategories = await postRepository.find({relations: ['categories']});
console.log("Les posts avec categories : ", postsWithCategories);