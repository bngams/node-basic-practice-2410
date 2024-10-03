class Todo {
    /**
     * Todo object
     * @param {number} id 
     * @param {number} userId 
     * @param {string} title 
     * @param {boolean} completed 
     */
    constructor(id, userId, title, completed) {
        this.id = id;
        this.userId = userId;
        this.title = title;
        this.completed = completed;
    } 
} 

// => export unique ds un fichier 
export default Todo;