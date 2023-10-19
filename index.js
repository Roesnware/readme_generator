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
                message: 'What is your name?',
                name: 'name',
            },
            {
                type: 'input',
                message: 'What is your location?',
                name: 'location',
            },
            {
                type: 'input',
                message: 'What is your bio?',
                name: 'bio',
            },
            {
                type: 'input',
                message: 'What is your linkedIn URL?',
                name: 'linkedIn',
            },
            {
                type: 'input',
                message: questions[],
                name: 'github',
            }
        ])
        .then((response) => {
            let input = { ...response };
            console.log(input);
        });
}

// Function call to initialize app
init();