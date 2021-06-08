const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");
const managerCard = require("../src/html").managerCard

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
    expect(result).toEqual(expected)
    })      
    it ("should return correct engineer HTML", () => {
        const manager = new Manager ('Liz', '12345', 'test@email.com', '123-456-6789')    
    const expected = `ENTER HTML`
    const result = managerCard (manager)
    expect(result).toEqual(expected)
    })      
    it ("should return correct intern HTML", () => {
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
    expect(result).toEqual(expected)
    })      
})

