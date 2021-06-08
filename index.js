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
          initialAddMore ()
        });
       } else if (roleAnswer.role === "Engineer") {
         console.log(roleAnswer.role)
         inquirer.prompt(engineerQuestions).then((engineerAnswers) => {
          const Engineer = new Engineer(engineerAnswers.name, engineerAnswers.id, engineerAnswers.email, engineerAnswers.gitHub);
          initialAddMore ()
        });
       } else if (roleAnswer.role === "Intern") {
         console.log(roleAnswer.role)
         inquirer.prompt(internQuestions).then((internAnswers) => {
         const Intern = new Intern(internAnswers.name, internAnswers.id, internAnswers.email, internAnswers.school);
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
            endHTML();
        }
})}


// DYNAMICALLY CREATING CARDS FOR EACH EMPLOYEE, AND END OF HTML + APPEND

const managerCard = (manager) => {
    const managerHTML = 
    `<div class = "column">
        <div class = "card">
            <div class = "cardContent">

                <div class="cardHeader">
                    <div class = "cardHeaderContent text-center">
                        <h4 class = "cardName">${managerAnswers.name}</h4>
                        <p class = "cardRole">${managerAnswers.role}</p>
                    </div>
                </div>

                <div class="content text-center">
                    <div class = "column"> ID: ${managerAnswers.id} </div>
                    <div class = "column"> Email: ${managerAnswers.email} </div>
                    <div class = "column"> Office Number: ${managerAnswers.number} </div>
                </div>

            </div>
        </div>
    </div>`
    fs.appendFile('./dist/index.html', managerHTML, (err) => err ? console.log(err) : '')
}

    const engineerCard = (engineer) => {
        const engineerHTML = 
        `<div class = "column">
            <div class = "card">
                <div class = "cardContent">
    
                    <div class = "cardHeader">
                        <div class = cardHeaderContent text-center">
                            <h4 class = "cardName">${engineerAnswers.name}</h4>
                            <p class = "cardRole">${engineerAnswers.role}</p>
                        </div>
                    </div>
    
                    <div class="content text-center">
                        <div class = "column"> ID: ${engineerAnswers.id} </div>
                        <div class = "column"> Email: ${engineerAnswers.email} </div>
                        <div class = "column"> GitHub Userame: ${engineerAnswers.gitHub}</div>
                    </div>
    
                </div>
            </div>
        </div>`
    fs.appendFile('./dist/index.html', engineerHTML, (err) => err ? console.log(err) : '')
}

const internCard = (intern) => {
    const internHTML = 
    `<div class = "column">
        <div class = "card">
            <div class = "cardContent">

                <div class = "cardHeader">
                    <div class = cardHeaderContent text-center">
                        <h4 class = "cardName">${internAnswers.name}</h4>
                        <p class = "cardRole">${internAnswers.role}</p>
                    </div>
                </div>

                <div class="content text-center">
                    <div class = "column"> ID: ${internAnswers.id} </div>
                    <div class = "column"> Email: ${internAnswers.email} </div>
                    <div class = "column"> School: ${internAnswers.school}</div>
                </div>

            </div>
        </div>
    </div>`
    fs.appendFile('./dist/index.html', internHTML, (err) => err ? console.log(err) : '')
}

const endHtml = () => {
    const endHTML = `    
    </div>
    </body>
    
    </html>`
    fs.appendFile('./dist/index.html', endHTML, (err) => err ? console.log(err) : '')
}

managerCard();
engineerCard();
internCard();
endHtml();