// Create functions for employee questions

const inquirer = require('inquirer');
const fs = require('fs');
const employee = require('lib/Employee.js');
const manager = require('lib/Manager.js');
const engineer = require('lib/Intern.js');
const intern = require('lib/Intern.js');

const roleQuestion = [
  {
      type: 'list',
      name: 'role',
      message: "Which type of team member would you like to add?",
      choices: ['Manager', 'Engineer', 'Intern'],
  }
];

const managerQuestions = [
    {
      type: 'input',
      name: 'name',
      message: 'What is the managers name?',
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is the managers ID?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the managers email?',
    },
    {
      type: 'input',
      name: 'number ',
      message: 'what is the managers office phone number?',
    }]

  const engineerQuestions = [
    {
      type: 'input',
      name: 'name',
      message: 'What is the engineers name?',
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is the engineers ID?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the engineers email?',
    },
    {
      type: 'input',
      name: 'gitHub',
      message: 'what is the engineers GitHub username?',
    }]

  const internQuestions = [
    {
      type: 'input',
      name: 'name',
      message: 'What is the interns name?',
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is the interns ID?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the interns email?',
    },
    {
      type: 'input',
      name: 'gitHub',
      message: 'what is the interns school?',
    }]
      

// HELP - INITIALIZE QUESTIONS AND SEND ANSWERS TO HMTL FIELDS 
function init (){
  inquirer.prompt(roleQuestion)
    .then((roleAnswer) => {
        if (roleAnswer.role === 'Manager')  {
          inquirer.prompt(managerQuestions)
            .then((managerAnswers) => {
              const manager = new Manager
            }
            )
        }
        else if (roleAnswer.role === 'Engineer') {

        }
        else if (roleAnswer.role === 'Intern') {

        }

    }
    )
}

init();


