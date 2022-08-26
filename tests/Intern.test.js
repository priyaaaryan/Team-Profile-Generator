const Intern = require("../lib/Intern");

describe("Intern", () => {
    test("Can initialize Intern object", () => {
        const name = "priya";
        const id = 20;
        const email = "priya@gmail.com";
        const school = "UOttawa";
        const intern = new Intern(name, id, email, school);
        expect(typeof (intern)).toBe("object");
    });

    test("Cannot initialize Intern object with invalid school", () => {
        const name = "priya";
        const id = 20;
        const email = "priya@gmail.com";
        const school = 2;
        expect(() => {
            const intern = new Intern(name, id, email, school);
        }).toThrowError("School must be a string");
    });

    test("getRole() returns Intern", () => {
        const name = "priya";
        const id = 20;
        const email = "priya@gmail.com";
        const school = "UOttawa";
        const intern = new Intern(name, id, email, school);
        const role = "Intern";
        expect(intern.getRole()).toBe(role);
    });

    test("Can get school via getSchool()", () => {
        const name = "priya";
        const id = 20;
        const email = "priya@gmail.com";
        const school = "UOttawa";
        const intern = new Intern(name, id, email, school);
        expect(intern.getSchool()).toBe(school);
    });

});