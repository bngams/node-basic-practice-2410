import { csv2json } from 'json-2-csv';
import TODOS from '../mocks/todo.mock.mjs';
import fs from 'fs';

const loadFromCsv = (filename) => {
    filename = filename ?? 'todos.json';
    fs.promises.readFile(filename, { encoding: 'utf-8' })
        .then((content) => {
            try {
                const jsonData = csv2json(content);
                console.info('Success! Data is ', jsonData);
                // do something else...
            } catch(error) {
                const errorMsg = 'Error while parsing data';
                console.error(errorMsg, error)
                throw new Error(errorMsg)
            }
        }) 
        .catch((error) => console.error(`Error while reading file ${filename}`, error)); 
} 

export default loadFromCsv;