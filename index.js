// TODO: Include packages needed for this application
const inq = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = ["What is this app is for?", "How do users use the app?", "How do users install it?", "How can users report issues?", "How can other devs make contributions?"];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // make a file from input 
    fs.writeFile(fileName, data, function (err) {
        console.log(err)
    }
    )
}

// TODO: Create a function to initialize app
function init() {
    // inquirer var prompt then get response
    inq
        .prompt([
            {
                type: 'input',
                message: questions[0],
                name: 'purpose',
            },
            {
                type: 'input',
                message: questions[1],
                name: 'use',
            },
            {
                type: 'input',
                message: questions[2],
                name: 'install',
            },
            {
                type: 'input',
                message: questions[3],
                name: 'report',
            },
            {
                type: 'input',
                message: questions[4],
                name: 'contribute',
            }
        ])
        .then((response) => {
            let input = { ...response };
            console.log(input);
        });
}

// Function call to initialize app
init();