// Create functions for employee questions

const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

const roleQuestion = [
  {
    type: "list",
    name: "role",
    message: "Which type of team member would you like to add?",
    choices: ["Manager", "Engineer", "Intern"],
  },
];

const managerQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is the managers name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is the managers ID?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the managers email?",
  },
  {
    type: "input",
    name: "officeNumber",
    message: "What is the managers office phone number?",
  },
];

const engineerQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is the engineers name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is the engineers ID?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the engineers email?",
  },
  {
    type: "input",
    name: "gitHub",
    message: "what is the engineers GitHub username?",
  },
];

const internQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is the interns name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is the interns ID?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the interns email?",
  },
  {
    type: "input",
    name: "school",
    message: "What is the interns school?",
  },
];

function init() {
  inquirer.prompt(roleQuestion).then((roleAnswer) => {
    if (roleAnswer.role === "Manager") {
      console.log(roleAnswer.role)
      inquirer.prompt(managerQuestions).then((managerAnswers) => {
        const manager = new Manager(managerAnswers.name, managerAnswers.id, managerAnswers.email, managerAnswers.officeNumber);
      });
     } else if (roleAnswer.role === "Engineer") {
       console.log(roleAnswer.role)
       inquirer.prompt(engineerQuestions).then((engineerAnswers) => {
        const engineer = new Engineer(engineerAnswers.name, engineerAnswers.id, engineerAnswers.email, engineerAnswers.gitHub);
      });
     } else if (roleAnswer.role === "Intern") {
       console.log(roleAnswer.role)
       inquirer.prompt(internQuestions).then((internAnswers) => {
        const intern = new Intern(internAnswers.name, internAnswers.id, internAnswers.email, internAnswers.school);
      });
    }
  });
}

init();
