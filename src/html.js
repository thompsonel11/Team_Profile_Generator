// Create functions to dynamically create html for each employee
function createManagerCard () {
    const managerName = $('<h3 class = "card-title">').text(managerName);
    const title = $('<h4 class = "card-title">').text("Manager");
    const managerId = $('<p class = "card-text">').text(managerId);
    const managerEmail = $('<p class = "card-text">').text(managerEmail);
    cardBody.append(managerName, title, managerID, managerEmail);
};

function createInternCard () {
    const internName = $('<h3 class = "card-title">').text(internName);
    const title = $('<h4 class = "card-title">').text("Intern");
    const internId = $('<p class = "card-text">').text(internId);
    const internEmail = $('<p class = "card-text">').text(internEmail);
    const internSchool = $('<p class = "card-text">').text(interSchool);
};

function createEngineerCard () {
    const engineerName = $('<h3 class = "card-title">').text(engineerName);
    const title = $('<h4 class = "card-title">').text("Engineer");
    const engineerId = $('<p class = "card-text">').text(engineerId);
    const engineerEmail = $('<p class = "card-text">').text(engineerEmail);
};