const Employee = require("./Employee");

class Manager extends Employee {
    constructor (name ,id ,email, number) {
        super(name, id, email);
        this.number = number;
        this.role = this.getRole();
    }

    getNumber () {
        return this.number;
    }

    getRole () {
        return "Manager";
    }
}

module.exports = Manager;