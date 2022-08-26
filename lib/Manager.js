const Employee = require ("./Employee");

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email);

        officeNumber = Number(officeNumber);
        if (!Number.isInteger(officeNumber) || officeNumber < 0) {
            throw new Error("Office number must be a positive integer");
        }
        
        this.officeNumber = officeNumber;
        this.role = "Manager";
    }

    getRole() {
        return this.role;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;