// Create functions to dynamically create html for each employee entered
// -----------------------------------------------------------------------
// Manager HTML 

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
//  NEED TO FIND A WAY TO APPEND TO index.HTML   
}
// -----------------------------------------------------------------------
// Intern HTML 

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
//  NEED TO FIND A WAY TO APPEND TO index.HTML   
}

// -----------------------------------------------------------------------
// Engineer HTML 

const engineerCard = (Engineer) => {
    const {name, id, email, gitHub, role} = Engineer
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
                    <div class = "column"> GitHub Userame: ${gitHub}</div>
                </div>

            </div>
        </div>
    </div>`
//  NEED TO FIND A WAY TO APPEND TO index.HTML   
}