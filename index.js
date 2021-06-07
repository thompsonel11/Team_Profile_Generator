// Create functions for employee questions

const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const path = require("path");
const RESULT = path.resolve(__dirname, "result");
const html = path.join(RESULT, "index.html")
const render = require("./src/html.js");

const roleQuestion = [
  {
    type: "list",
    name: "role",
    message: "Which type of team member would you like to add?",
    choices: ["Manager", "Engineer", "Intern"],
  }
];

function continueOn () {
  inquirer.prompt([
  {
    type: "list",
    name: "moreEmployees",
    message: "Would you like to add another team member?",
    choices: ["yes", "no"],
  }]).then((answer)=> {
    if (answer.moreEmployees == "yes") {
      roleQuestion;
    }
    else {
      generateTeam ();
    }
  })
}

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

const employeeData = [];

function init() {
  inquirer.prompt(roleQuestion).then((roleAnswer) => {
    switch (roleAnswer.role)
    {
    case "Manager":
      inquirer.prompt(managerQuestions).then((managerAnswers) => {
        const manager = new Manager(managerAnswers.name, managerAnswers.id, managerAnswers.email, managerAnswers.officeNumber);
        employeeData.push(manager)
        continueOn();
      });

    break;
    
    case "Engineer":
      inquirer.prompt(engineerQuestions).then((engineerAnswers) => {
        const engineer = new Engineer(engineerAnswers.name, engineerAnswers.id, engineerAnswers.email, engineerAnswers.gitHub);
        employeeData.push(engineer)
        continueOn();
      });
      
    break;

    case "Intern":
      inquirer.prompt(internQuestions).then((internAnswers) => {
        const intern = new Intern(internAnswers.name, internAnswers.id, internAnswers.email, internAnswers.school);
        employeeData.push(intern)
        continueOn();
      });
    
    break; 

    default:
        generateTeam();
    }

      });
    }
init();


function generateTeam () {
  if (!fs.existsSync(RESULT)){
    fs.mkdirSync(RESULT)
  }
  else {
    fs.writeFileSync(html, employeeData,"utf-8")
  }
} 
