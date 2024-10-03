import inquirer from 'inquirer';
import saveToCsv from './save.mjs';
import loadFromCsv from './load.mjs';

inquirer
  .prompt([
    {
        type: 'input',
        name: 'action',
        message: 'What do you want to do? (save/load):',
        validate: function (input) {
          if (input.trim() !== 'save' && input.trim() !== 'load') {
            return 'Choose a correct action';
          }
          return true;
        }
    },
    {
        type: "input",
        name: "filename",
        message: "Filename to use:",
        validate: function (input) {
            if (input.trim() === '' || !input.trim().includes('.csv')) {
              return 'Choose a correct filename';
            }
            return true;
        }
    }
  ])
  .then((answers) => {
    switch (answers.action) {
        case 'save':
            // await??
            saveToCsv(answers.filename);
            break;
        case 'load':
                loadFromCsv(answers.filename);
                break;
        default:
            console.error('Not a valid action');
            break;
    }
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });