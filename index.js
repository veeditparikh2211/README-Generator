// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require('inquirer');

const generateMarkdown = require("./utils/generateMarkdown");



// TODO: Create an array of questions for user input
const questions = [{
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username ',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'name',
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
        name: 'description',
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
        type: 'checkbox',
        name: 'languages',
        message: 'What did you this project with? ',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'What steps you use to install the project',

    },
    {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link to your project. (Required)',
        validate: linkInput => {
            if (linkInput) {
                return true;
            } else {
                console.log('You need to enter a project GitHub link!');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'feature',
        message: 'Would you like to feature this project?',
        default: false
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