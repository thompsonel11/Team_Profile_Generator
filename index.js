// Create functions to have questions for engineer, intern, manager (not employee)
// inquirer .prompt .... 
const inquirer = require('inquirer');
const fs = require('fs');

const managerQuestions = [
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of your project?',
    },
    {
      type: 'input',
      name: 'projectDescription',
      message: 'Please provide a short description of the what, why and how of your project.',
    },
    {
      type: 'input',
      name: 'link',
      message: 'Please provide a link for your project.',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter your email address here.',
    }]



// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(error) {
        console.log('fileName:', fileName)
        console.log('data:', data)
        if (error) {
            return console.log(error)
        }
    }
    )}

// Create function to initialize program 
function init (){
    inquirer.prompt(questions)
        .then(function(data) {
            writeToFile("README.md", generateMarkdown(data));
            console.log(data)
    }
    )
}

init();


