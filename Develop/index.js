// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "username",
        message: "Enter Your Github Username"
    },
    {
        type: "input",
        name: "email",
        message: "Enter Your Email Address"
    },
    {
        type: "input",
        name: "title",
        message: "What's Your Projects Name?"
    },
    {
        type: "input",
        name: "description",
        message: "Enter A Descrition For Your Project"
    },
    {
        type: "input",
        name: "installation",
        message: "Enter Your Projects Installation Instructions"
    },
    {
        type: "input",
        name: "usage",
        message: "Enter Usage Info"
    },
    {
        type: "input",
        name: "contribution",
        message: "Enter Your Project Contribution Guidelines"
    },
    {
        type: "input",
        name: "tests",
        message: "Enter Test Instructions"
    },
    {
        type: "checkbox",
        message: "Licensing Options",
        name: "license",
        choices: [
            "None",
            "Apache2.0",
            "GNU Public v3.0",
            "MIT",
        ]
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        } else {
            console.log("You did it!")
        }
    })

}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function (data) {
            writeToFile("README.md", generateMarkdown(data));
            console.log(data)

        })
}

// Function call to initialize app
init();
