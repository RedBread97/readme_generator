// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'prompt',
        message: 'What is the name of the project?',
        name: 'title',
    },
    {
        type:'input',
        message: 'What is the project about?please be as descriptive as possible.',
        name: 'description',
    },
    {
        type:'input',
        message: 'Table of Contents',
        name: 'table of contents',
    },
    {
        type:'input',
        message: 'What installation is needed to run this application?',
        name: 'installation',
    },
    {
        type:'input',
        message: 'How is the app used?',
        name: 'usage',
    }, {
        type:'input',
        message: 'What license is used?',
        name: 'license',
    },
    {
        type:'input',
        message: 'Who contributed to the project?',
        name: 'contributors',
    },
    {
        type:'input',
        message: 'What is your Github username?',
        name: 'username',
    },
    {
        type:'input',
        message: 'contact info?',
        name: 'contact',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        } else{
            console.log("You did it!")
        }
    })
    
}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data){
        writeFile("README.mn", generateMarkdown(data));
        console.log(data)
    
    })
}

// Function call to initialize app
init();
