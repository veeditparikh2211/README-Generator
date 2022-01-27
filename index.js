// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require('inquirer');

const generateMarkdown = require("./utils/generateMarkdown");



// TODO: Create an array of questions for user input
const questions = [{
        type: 'input',
        name: 'Title',
        message: 'What is the title of your project? ',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('You need to enter a project name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Provide a description of the project',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('You need to enter a project description!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'Table of Contents',
        message: 'Table of Contents'
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'What steps you use to install the project',

    },
    {
        type: 'input',
        name: 'Usage',
        message: 'What is this project used for ?',

    },

    {
        type: 'input',
        name: 'License',
        message: 'What type of license is been used ?',

    },
    {
        type: 'input',
        name: 'Contributing',
        message: 'Who all contributed to this project.',

    },
    {
        type: 'list',
        name: 'Screenshot',
        message: 'Screenshot of the README Generator',
        choices: [
            `Yes`, `No`
        ]

    },
    {
        type: 'input',
        name: 'Test',
        message: 'Which commands were used to create and test this project.',

    },
    {
        type: 'input',
        name: 'Questions',
        message: 'Feel free to ask any questions.',

    },
    {
        type: 'input',
        name: 'Username',
        message: 'Please provide your Github username.',

    },
    {
        type: 'input',
        name: 'Email',
        message: 'Please provide your email address.',

    },
    {
        type: 'input',
        name: 'Git',
        message: 'Please provide your Github link.',

    },

];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {


    fs.writeFile(fileName, data, function(err) {
        console.log(fileName);
        console.log(data);
        if (err) {
            console.log(err);
        } else {
            console.log("success");
        }
    })

};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(data) {
        writeToFile("README.md", generateMarkdown(data));
        console.log(data);
    })
}


// Function call to initialize app
init();