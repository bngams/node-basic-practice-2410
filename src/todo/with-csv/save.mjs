import { json2csv } from 'json-2-csv';
import TODOS from '../mocks/todo.mock.mjs';
import fs from 'fs';

const csvData = json2csv(TODOS);

const saveToCsv = (filename) => {
    filename = filename ?? 'todos.json';
    fs.promises.writeFile(filename, csvData)
        .then(() => console.log('Data saved to ', filename))
} 

export default saveToCsv;

