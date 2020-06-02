const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

// validation Email function to have User enter a valid Email Address
const validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

//helper funciton to get the badge and its color via a link (no ajax call is needed for this)
function getBadge(license, GH, color, link) {
    if (license !== 'None') {
        return `[![GitHub license](https://img.shields.io/badge/license-${license}-${color}.svg)](https://github.com/${GH}/${link})`
    } else {
        return ``
    }
}

// Prompt user function
function prompUser() {
    return inquirer.prompt([

        {
            type: "input",
            name: "github",
            message: "Enter your GitHub Username",
            default: 'mauricechouam'
        },

        // this Color is for the badge in order to personalyse 
        {
            type: "list",
            name: "color",
            message: "What's your favorite color?",
            choices: ["red", "green", "purple", "black", "magenta"]
          },
        {
            type: "input",
            name: "Projecttitle",
            message: "Enter the Project Title",
            default: 'README GENERATOR'
        },
        {
            type: "input",
            name: "Description",
            message: "Please write a short description of your project",
            default: 'README.md generator is a CLI app that is asking a user the series of questions and based on responses generates a README.md'
        },

        {
            type: "input",
            name: "installation",
            message: "What command should be run to install dependencies?",
            default: 'npm i'
        },
        {
            type: "input",
            name: "test",
            message: "What command should be run to  test your Programm?",
            default: "node index.js"
        },

        {
            type: "input",
            name: "usage",
            message: "What does the user need to know about using the repo?",
            default: 'It is an open project and everyone can contribute'
        },

        // the Licence will hepl to create the Badge
        {
            type: "list",
            name: "license",
            message: "What kind of license do you want ?",
            choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
        },

        {
            type: "input",
            name: "Contributing",
            message: "Write something About Contributing to the Repo"
        },
        {
            type: "input",
            name: "email",
            message: "Please type your email?",
            default: 'lansichouamou@gmail.com',
            validate: validateEmail
        },

    ])
}

// Function generateReadme
function generateReadme(answer) {
    return `
# ${answer.Projecttitle}
${getBadge(answer.license, answer.github, answer.color, answer.Projecttitle)}

 ## Project description
${answer.Description}

  ## Table of Contents ##
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Licence](#Wireframe)
  * [Contributing](#Contributing)
  * [Tests](#Tests)
  * [Question](#Question)

## Installation
To install necessary Dependencies, Run the following Command line :

\'\'\'
${answer.installation}
\'\'\'

## Usage
${answer.usage}

## Contributing 

${answer.Contributing}

 ## Tests
 In order to test This Application run the command line :
 \'\'\'
 ${answer.test}
 \'\'\'

 ## Question
My Contact :  [${answer.github}](https://github.com/mauricechouam) directly at ${answer.email}
}
  `;

    prompUser()
        .then(answer => {
            const md = generateReadme(answer);
            return writeFileAsync("README.md", md)
        })
        .then(() => console.log("successfully  generate README.md"))
        .catch(err => console.log(err));
}
