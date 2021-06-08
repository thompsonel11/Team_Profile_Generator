const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const managerCard = require("./src/html").managerCard
const engineerCard = require("./src/html").engineerCard
const internCard = require("./src/html").internCard

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

const employeeCards = [];

function init() {
    inquirer.prompt(roleQuestion).then((roleAnswer) => {
      if (roleAnswer.role === "Manager") {
        console.log(roleAnswer.role)
        inquirer.prompt(managerQuestions).then((managerAnswers) => {
          const htmlManager = new Manager(managerAnswers.name, managerAnswers.id, managerAnswers.email, managerAnswers.officeNumber);
          employeeCards.push(managerCard(htmlManager));
          initialAddMore ()
        });
       } else if (roleAnswer.role === "Engineer") {
         console.log(roleAnswer.role)
         inquirer.prompt(engineerQuestions).then((engineerAnswers) => {
          const htmlEngineer = new Engineer(engineerAnswers.name, engineerAnswers.id, engineerAnswers.email, engineerAnswers.gitHub);
          employeeCards.push(engineerCard(htmlEngineer));
          initialAddMore ()
        });
       } else if (roleAnswer.role === "Intern") {
         console.log(roleAnswer.role)
         inquirer.prompt(internQuestions).then((internAnswers) => {
          const htmlIntern = new Intern(internAnswers.name, internAnswers.id, internAnswers.email, internAnswers.school);
          employeeCards.push(internCard(htmlIntern));
          initialAddMore ()
        });
    }
});  
}
init();

function initialAddMore () {
    inquirer.prompt([{
        type: "confirm",
        name: "addMore",
        message: "Would you like to add more team members?",
        default: true,
    }])
    .then((answer) => {
        if (answer.addMore) {
            init();
        }
        else {
            buildHtml();
        }
})}



const buildHtml = () => {
    const html = `    
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    </head>
    <body>
        <header class = "myTeam">
            <div class = "container text-center bg-gradient bg-danger text-white">
                <h1>My Team</h1>
            </div>
        </header>
        <div class=container>
        ${employeeCards.map(card => (`
          <div class="row">
            ${card}
          </div>
        `))}
    </body>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
    crossorigin="anonymous"></script>
    </html>`
    fs.writeFileSync('./dist/index.html', html, (err) => err ? console.log(err) : '')
}