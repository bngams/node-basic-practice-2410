import TodoHttpService from "../http-services/todo.service.mjs";

const todoHttp = new TodoHttpService();

// mode async => je recois une Promise
todoHttp.find().then((data) => console.log(data.json()))
// mode sync => je vais recevoir des donnees
console.log(todoHttp.findSync());

todoHttp.findOne(1)

todoHttp.findWithCallback(async (data) => {
    console.log('data callback', await data.json());
})

