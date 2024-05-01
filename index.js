// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
    type: 'input',
    name: 'title',
    message: 'What is the title of the project?',
    validate: (answer) => {
        if (answer === '') {
            return 'Please enter a valid entry';
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the project description?',
        validate: (answer) => {
            if (answer === '') {
                return 'Please enter a valid entry';
            } else {
                return true;
            }
        }
    },
    {
      type: 'input',
      name: 'installation',
      message: 'How is the project installed?',
      validate: (answer) => {
          if (answer === '') {
              return 'Please enter a valid entry';
          } else {
              return true;
          }
      }
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How is the project used?',
    validate: (answer) => {
        if (answer === '') {
            return 'Please enter a valid entry';
        } else {
            return true;
        }
    }
},
{
  type: 'input',
  name: 'contribution',
  message: 'What are the contribution guidelines',
  validate: (answer) => {
      if (answer === '') {
          return 'Please enter a valid entry';
      } else {
          return true;
      }
  }
},
{
  type: 'input',
  name: 'test',
  message: 'What are the test instructions?',
  validate: (answer) => {
      if (answer === '') {
          return 'Please enter a valid entry';
      } else {
          return true;
      }
  }
},
{
  type: 'list',
  name: 'license',
  message: 'Choose a license',
  choices: [
    'MIT License',
    'Apache License 2.0',
    'GNU General Public License v3.0',
    'BSD 3-Clause License',
    'ISC License',
    'Creative Commons Attribution 4.0 International (CC BY 4.0)',
    'The Unlicense',
    'Boost Software License 1.0',
    'Mozilla Public License 2.0',
    'GNU Lesser General Public License v3.0 (LGPLv3)'
  ],
  default: 'MIT License'
},
{
  type: 'input',
  name: 'gitHub',
  message: 'What is your gitHub user name?',
  validate: (answer) => {
      if (answer === '') {
          return 'Please enter a valid entry';
      } else {
          return true;
      }
  }
},
{
  type: 'input',
  name: 'email',
  message: 'What is your email address?',
  validate: (answer) => {
      if (answer === '') {
          return 'Please enter a valid entry';
      } else {
          return true;
      }
  }
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();

inquirer
  .prompt(questions)
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers);

  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });