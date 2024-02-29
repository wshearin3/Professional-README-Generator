// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');

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
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();