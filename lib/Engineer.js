const Employee = require("./Employee");

class Engineer extends Employee {
    constructor (name, id, email, githubURL) {
        super(name, id, email);

        if (typeof githubURL !== "string") {
            throw new Error("Github URL must be a string");
        }
        
        this.github = githubURL;
        this.role = "Engineer";
    }

    getRole() {
        return this.role;
    }

    getGithubURL() {
        return this.github;
    }
}

module.exports = Engineer;