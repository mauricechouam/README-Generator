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
            name: "userstory",
            message: "Enter the User Story"
        },
        {
            type: "input",
            name: "installation",
            message: "Give few step how to install your application "
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

// Function generateReadme
function generateReadme(answer) {
    return `
  # ${answer.Projecttitle}

  ## Table of Contents ##
  * [Project_descriptiion](#Project_descriptiion)
  * [Installation](#Installation)
  * [User_Story](#User_Story)
  * [Usage]#(Usage)
  * [Licence](#Wireframe)
  * [Tasks](#Tasks)
  * [Roles](#Roles)
  
  ## User Story ##
  
  AS A concerned citizen of the world, looking out for myself and my loved ones.
  I WANT to get up to date information on the spread of COVID-19 in my area.
  SO THAT I can make safe plans for shopping, working and living in my community.
  
  
  ## Roles ##
  
  * Chase - Map & Global Stats API, Frontend & CSS styling.
  * David - News, Testing & additional Stats API, plus some CSS.
  * Maurice - Map API, Frontend & CSS styling. 
  
 
  ## Future-Development ##
  
  * Update Map API to display more information.
  * Add diagrams to sync with statistics.
  * Developement desktop application.
  
  ## Sources ##
  
  - Moment.JS :  Parse, validate, manipulate, and display dates and times
  - Popper.js :  Popover positioning engine, in conjunction with Bootstrap.js
  - JQueryUI.js : Interactions and animations, in conjunction with jQuery.js
  - The Nerdy Dev : You Tuber Whose Video helped us create our MapBox panel
  
  
  `;
  }
  
