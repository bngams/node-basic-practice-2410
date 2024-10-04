import config from "../env.config.mjs";

class TodoHttpService {

    apiUrl = `${config.apiBaseUrl}/todos`;

    find() {
        return fetch(this.apiUrl)
    } 

    async findSync() {
        const response = await fetch(this.apiUrl);
        // if(response.status !== 200) throw new Error(...)
        return await response.json();
    } 

    findAndDoSomething() {
        fetch(this.apiUrl).then((data) => console.log(data));
    } 
    
    findWithCallback(callback) {
        fetch(this.apiUrl).then(callback);
    }

    findOne(id) {
        return fetch(`${this.apiUrl}/${id}`)
    } 
} 
export default TodoHttpService;