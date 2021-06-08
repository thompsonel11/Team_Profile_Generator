const Employee = require("./Employee");

class Engineer extends Employee {
    constructor (name ,id ,email, gitHub) {
        super (name, id, email);
        this.gitHub = gitHub;
        this.role = this.getRole();
    }

    getGitHub () {
        return this.gitHub;
    }

    getRole () {
        return "Engineer";
    }
}

module.exports = Engineer;