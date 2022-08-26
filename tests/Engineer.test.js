const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    test("Can initialize Engineer object", () => {
        const name = "priya";
        const id = 20;
        const email = "priya@gmail.com";
        const githubURL = "priya-github";
        const engineer = new Engineer(name, id, email, githubURL);
        expect(typeof (engineer)).toBe("object");
    });

    test("Can set GitHUb account via constructor", () => {
        const name = "priya";
        const id = 20;
        const email = "priya@gmail.com";
        const github = "priya-github";
        const employee = new Engineer(name, id, email, github);
        expect(employee.github).toBe(github);
    });

    test("Cannot set GitHUb account via constructor with invalid account", () => {
        const name = "priya";
        const id = 20;
        const email = "priya@gmail.com";
        const github = 5;
        expect(() => {
            const employee = new Engineer(name, id, email, github);
        }).toThrowError("Github URL must be a string");
    });

    test("getRole() returns Engineer", () => {
        const role = "Engineer";
        const name = "priya";
        const id = 20;
        const email = "priya@gmail.com";
        const github = "priya-github";
        const employee = new Engineer(name, id, email, github);
        expect(employee.getRole()).toBe(role);
    });

    test("Can get GitHub username via getGithubURL()", () => {
        const name = "priya";
        const id = 20;
        const email = "priya@gmail.com";
        const github = "priya-github";
        const employee = new Engineer(name, id, email, github);
        expect(employee.getGithubURL()).toBe(github);
    });

});