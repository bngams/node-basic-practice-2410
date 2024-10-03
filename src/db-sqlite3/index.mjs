import sqlite3 from 'sqlite3';

// mode verbose => DB LOGS
sqlite3.verbose();

// 1. me connecter a la db
// creer chaine de connexion
const db = new sqlite3.Database(':memory:'); // :memory: (temporaire en mémoire) or filename

// 2. travailler avec la db
db.run('CREATE TABLE post (title TEXT)', (error) => {
    if(error) {
        console.error('Error on creation', error);
        throw new Error(error);
    };
    db.run('INSERT INTO post VALUES ("My tittle")', (error) => {
        if(error) {
            console.error('Error on insert', error);
            throw new Error(error);
        } 
        // ...
        db.each('SELECT * FROM post', (error, res) => {
            if(error) {
                console.error('Error on select', error);
                throw new Error(error);
            } 
            console.log('Mon résultat : ', res);
        })
    }); 
});