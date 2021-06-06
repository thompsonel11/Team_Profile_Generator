class Manager {
    constructor (name ,id ,email, number) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.number = number;
    }

    getName () {
        return this.name;
    }

    getId () {
        return this.id;
    }

    getEmail () {
        return this.email;
    }

    getNumber () {
        return this.number;
    }

    getRole () {
        return "Manager";
    }
}

module.exports = Manager;