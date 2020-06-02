const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

// validator() repeats question if user leaves it blank
const validator = (val) => {
    if (val !== "") {
        return true;
    }
}

// Prompt user function
function prompUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "what you Name?"
        },
        {
            type: "input",
            name: "github",
            message: "Enter your GitHub Username"
        },
        {
            type: "input",
            name: "Projecttitle",
            message: "Enter the Project Title"
        },
        {
            type: "input",
            name: "Description",
            message: "Enter the Project Description"
        },
       
        {
            type: "input",
            name: "usage",
            message: "Write Usage"
        },
        {
            type: "input",
            name: "License",
            message: "what the Licence?"
        },
        {
            type: "input",
            name: "Contributing",
            message: "Write your Contribution"
        },
        {
            type: "input",
            name: "Questions",
            message: "Enter your Github email "
        },

    ])
}

function generateReadme(answer) {
    return `
  # ${answer.title}
  
  `;
  }
  
  module.exports = generateMarkdown;