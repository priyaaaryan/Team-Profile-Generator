class Employee {
    constructor (name, id, email) {
        if (typeof name !== "string") {
            throw new Error("Name must be a string");
        }

        id = Number(id);
        if (!Number.isInteger(id) || id < 0) {
            throw new Error("ID must be a positive integer");
        }

        if (typeof email !== "string") {
            throw new Error("Email must be a string");
        }

        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee";
    }

    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return "Employee";
    }
}

module.exports = Employee;