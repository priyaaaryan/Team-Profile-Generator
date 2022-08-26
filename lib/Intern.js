const Employee = require("./Employee");

class Intern extends Employee {
    constructor (name, id, email, school) {
        super(name, id, email);

        if (typeof school !== "string") {
            throw new Error("School must be a string");
        }
        
        this.school = school;
        this.role = "Intern";
    }

    getRole() {
        return this.role;
    }

    getSchool() {
        return this.school;
    }
}

module.exports = Intern;