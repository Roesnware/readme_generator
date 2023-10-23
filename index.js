// TODO: Include packages needed for this application
const inq = require("inquirer");
const fs = require("fs");
const MarkdownGenerator = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = ["What is the title of your app", "Project pitch:", "What is this app is for?", "What did you learn in this project?", "How do users use the app?", "How do users install it?", "How can users test this?", "How can users report issues?", "How can other devs make contributions?", "What is your github username?", "What is your email?"];

const licenseList = ["MIT", "Eclipse Public License 1.0", "Mozilla Public License 2.0", "ISC"];

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
                name: 'title',
            },
            {
                type: 'input',
                message: questions[1],
                name: 'pitch',
            },
            {
                type: 'input',
                message: questions[2],
                name: 'purpose',
            },
            {
                type: 'input',
                message: questions[3],
                name: 'learn',
            },
            {
                type: 'input',
                message: questions[4],
                name: 'use',
            },
            {
                type: 'input',
                message: questions[5],
                name: 'install',
            },
            {
                type: 'input',
                message: questions[6],
                name: 'test',
            },
            {
                type: 'input',
                message: questions[7],
                name: 'report',
            },
            {
                type: 'input',
                message: questions[8],
                name: 'contribute',
            },
            {
                type: 'input',
                message: questions[9],
                name: 'github',
            },
            {
                type: 'input',
                message: questions[10],
                name: 'email',
            },
            {
                type: 'list',
                message: 'Which license did you use?',
                choices: licenseList,
                name: 'license'
            }
        ])
        .then((response) => {
            // spread repsonse to obj 
            let input = { ...response };
            //console.log(input);

            // build data
            let data = MarkdownGenerator(input);

            // call write func
            writeToFile("README.md", data);
        });
}

// Function call to initialize app
init();