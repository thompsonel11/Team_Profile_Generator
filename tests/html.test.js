const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const managerCard = require("../src/html").managerCard
const engineerCard = require("../src/html").engineerCard
const internCard = require("../src/html").internCard

function stripWhitespace(input) {
    return input.replace(/\s/g, '') //This replaces all whitespace characters with nothing
  }

describe("HTML", () => {
    it ("should return correct manager HTML", () => {
        const manager = new Manager ('Liz', '12345', 'test@email.com', '123-456-6789')    
    const expected = `<div class = "column">
        <div class = "card">
            <div class = "cardContent">

                <div class="cardHeader">
                    <div class = "cardHeaderContent text-center">
                        <h4 class = "cardName">Liz</h4>
                        <p class = "cardRole">Manager</p>
                    </div>
                </div>

                <div class="content text-center">
                    <div class = "column"> ID: 12345 </div>
                    <div class = "column"> Email: test@email.com </div>
                    <div class = "column"> Office Number: 123-456-6789 </div>
                </div>

            </div>
        </div>
    </div>`
    const result = managerCard (manager)
    expect(stripWhitespace(result)).toEqual(stripWhitespace(expected)) 
    })      
    it ("should return correct engineer HTML", () => {
        const engineer = new Engineer ('Liz', '12345', 'test@email.com', 'test1234')    
    const expected = `<div class = "column">
    <div class = "card">
        <div class = "cardContent">

            <div class = "cardHeader">
                <div class = cardHeaderContent text-center">
                    <h4 class = "cardName">Liz</h4>
                    <p class = "cardRole">Engineer</p>
                </div>
            </div>

            <div class="content text-center">
                <div class = "column"> ID: 12345 </div>
                <div class = "column"> Email: test@email.com </div>
                <div class = "column"> GitHub Userame: test1234</div>
            </div>

            </div>
        </div>
    </div>`
    const result = engineerCard (engineer)
    expect(stripWhitespace(result)).toEqual(stripWhitespace(expected)) 
    })      
    it ("should return correct intern HTML", () => {
        const intern = new Intern ('Liz', '12345', 'test@email.com', 'ECU')    
    const expected = `<div class = "column">
    <div class = "card">
        <div class = "cardContent">

            <div class = "cardHeader">
                <div class = cardHeaderContent text-center">
                    <h4 class = "cardName">Liz</h4>
                    <p class = "cardRole">Intern</p>
                </div>
            </div>

            <div class="content text-center">
                <div class = "column"> ID: 12345 </div>
                <div class = "column"> Email: test@email.com </div>
                <div class = "column"> School: ECU</div>
            </div>

            </div>
        </div>
    </div>`
    const result = internCard (intern)
    expect(stripWhitespace(result)).toEqual(stripWhitespace(expected)) 
    })     
})
