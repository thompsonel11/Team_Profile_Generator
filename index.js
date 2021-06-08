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
  }
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
          const Manager = new Manager(managerAnswers.name, managerAnswers.id, managerAnswers.email, managerAnswers.officeNumber);
        });
       } else if (roleAnswer.role === "Engineer") {
         console.log(roleAnswer.role)
         inquirer.prompt(engineerQuestions).then((engineerAnswers) => {
          const Engineer = new Engineer(engineerAnswers.name, engineerAnswers.id, engineerAnswers.email, engineerAnswers.gitHub);
        });
       } else if (roleAnswer.role === "Intern") {
         console.log(roleAnswer.role)
         inquirer.prompt(internQuestions).then((internAnswers) => {
          const Intern = new Intern(internAnswers.name, internAnswers.id, internAnswers.email, internAnswers.school);
        });
    }
});  
}
init();

// DYNAMICALLY CREATING BEGINNING OF HTML, CARDS FOR EACH EMPLOYEE, AND END OF HTML
const beginningHTML = () => {
    const HTML = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team</title>
    </head>
    <body>
        <header class = "myTeam">
            <div class = "container text-center">
                <h1>My Team</h1>
            </div>
        </header>
        <div class=container>
        <div class="row">`
fs.writeFile("./dist/index.html", HTML, (err) => err ? console.log(err) : '')
}

const managerCard = (Manager) => {
    const {name, id, email, number, role} = Manager
    const managerHTML = 
    `<div class = "column">
        <div class = "card">
            <div class = "cardContent">

                <div class="cardHeader">
                    <div class = "cardHeaderContent text-center">
                        <h4 class = "cardName">${name}</h4>
                        <p class = "cardRole">${role}</p>
                    </div>
                </div>

                <div class="content text-center">
                    <div class = "column"> ID: ${id} </div>
                    <div class = "column"> Email: ${email} </div>
                    <div class = "column"> Office Number: ${number} </div>
                </div>

            </div>
        </div>
    </div>`
    fs.appendFile('./dist/index.html', managerHTML, (err) => err ? console.log(err) : '')
}

    const engineerCard = (Engineer) => {
        const {name, id, email, gitHub, role} = Engineer
        const engineerHTML = 
        `<div class = "column">
            <div class = "card">
                <div class = "cardContent">
    
                    <div class = "cardHeader">
                        <div class = cardHeaderContent text-center">
                            <h4 class = "cardName">${name}</h4>
                            <p class = "cardRole">${role}</p>
                        </div>
                    </div>
    
                    <div class="content text-center">
                        <div class = "column"> ID: ${id} </div>
                        <div class = "column"> Email: ${email} </div>
                        <div class = "column"> GitHub Userame: ${gitHub}</div>
                    </div>
    
                </div>
            </div>
        </div>`
    fs.appendFile('./dist/index.html', engineerHTML, (err) => err ? console.log(err) : '')
}

const internCard = (Intern) => {
    const {name, id, email, school, role} = Intern
    const internHTML = 
    `<div class = "column">
        <div class = "card">
            <div class = "cardContent">

                <div class = "cardHeader">
                    <div class = cardHeaderContent text-center">
                        <h4 class = "cardName">${name}</h4>
                        <p class = "cardRole">${role}</p>
                    </div>
                </div>

                <div class="content text-center">
                    <div class = "column"> ID: ${id} </div>
                    <div class = "column"> Email: ${email} </div>
                    <div class = "column"> School: ${school}</div>
                </div>

            </div>
        </div>
    </div>`
    fs.appendFile('./dist/index.html', engineerHTML, (err) => err ? console.log(err) : '')
}

const endHtml = () => {
    const endHtml = `    
    </div>
    </body>
    
    </html>`
    fs.appendFile('./dist/index.html', endHtml, (err) => err ? console.log(err) : '')
}