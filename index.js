// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require( "./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the name of your project?",
        name: "projectTitle"
    },
    {
        type: "input",
        message: "Please provide a brief description of your project.",
        name: "description"
    },
    {
        type: "input",
        message: "Please provide relevant installation instructions for your project.",
        name: "installation"
    },
    {
        type: "input",
        message: "What is the usage of your project?",
        name: "usage"
    },
    {
        type: "input",
        message: "Who contributed when making this project?",
        name: "contributions"
    },
    {
        type: "input",
        message: "What tests are relevant to this project?",
        name: "tests"
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
    {
        type: "list",
        message: "Please choose a license or select 'No License'",
        name: "license",
        choices: [
            "No License", "MIT", "Apache", "BSD", "GPL"
        ]
    },
];

// TODO: Create a function to write README file
function writeToFile(READMEContent) {
    fs.writeFileSync('README.md', generateMarkdown(READMEContent), READMEContent);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const READMEContent = writeToFile(answers);
    })
}

// Function call to initialize app
init();