const Manager = require("../lib/Manager");

describe("Manager", () => {
    test("Can initialize Manager object", () => {
        const name = "priya";
        const id = 20;
        const email = "priya@gmail.com";
        const officeNumber = 22;
        const manager = new Manager(name, id, email, officeNumber);
        expect(typeof (manager)).toBe("object");
    });

    test("Cannot initialize Manager object with negative officeNumber", () => {
        const name = "priya";
        const id = 20;
        const email = "priya@gmail.com";
        const officeNumber = -22;
        expect(() => {
            const manager = new Manager(name, id, email, officeNumber);
        }).toThrowError("Office number must be a positive integer");
    });

    test("Cannot initialize Manager object with invalid officeNumber", () => {
        const name = "priya";
        const id = 20;
        const email = "priya@gmail.com";
        const officeNumber = "not a number";
        expect(() => {
            const manager = new Manager(name, id, email, officeNumber);
        }).toThrowError("Office number must be a positive integer");
    });

    test("getRole() returns Manager", () => {
        const name = "priya";
        const id = 20;
        const email = "priya@gmail.com";
        const officeNumber = 22;
        const manager = new Manager(name, id, email, officeNumber);
        const role = "Manager";
        expect(manager.getRole()).toBe(role);
    });

    test("Can get office number via getOffice()", () => {
        const name = "priya";
        const id = 20;
        const email = "priya@gmail.com";
        const officeNumber = 22;
        const manager = new Manager(name, id, email, officeNumber);
        expect(manager.getOfficeNumber()).toBe(officeNumber);
    });

});