import { DataSource, EntitySchema } from "typeorm";

// 1. créer une classe
// (un model)
class Post {
    constructor(id, title, text) {
        this.id = id;
        this.title = title;
        this.text = text;
    } 
} 

// 2. créer une entité à partir du modèle
// new EntitySchema(ConfigurationEntiteJSON)
const PostEntity = new EntitySchema({
    name: 'Post',
    target: Post,
    columns: {
        id: {
            type: 'int',
            primary: true,
            generated: true,
        },
        title: {
            type: 'varchar',        
        },
        text: {
            type: 'text',            
        } 
    } 
});

// 3. créer une connexion à la DB 
const db = new DataSource({
    type: "sqlite",
    database: "db-typeorm.sqlite3",
    synchronize: true, // ask type typeORM to create tables, manage schema
    entities: [PostEntity] 
});

// 4. initialiser la connexion
await db.initialize();

// 5. persister un obj en base avec le manager
// => l'objet le plus générique de typeORM pour executer des actions sur la db
const post = new Post(null, 'My first post', 'My content...');
await db.manager.save(post);
console.log(`Id du nouveau post: ${post.id}`);

// 6. utiliser les repositories
const postRepo = await db.getRepository(Post);
const result = await postRepo.find(); // select all
console.log('Les posts: ', result);