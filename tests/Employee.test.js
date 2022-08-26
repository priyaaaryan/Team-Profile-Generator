const Employee = require("../lib/Employee");

describe("Employee", () => {
    it("Can initialize Employee object", () => {
        const name = "priya";
        const id = 20;
        const email = "priya@gmail.com";
        const employee = new Employee(name, id, email);
        expect(typeof (employee)).toBe("object");
    });

    it("Can set name via constructor arguments", () => {
        const name = "priya";
        const id = 20;
        const email = "priya@gmail.com";
        const employee = new Employee(name, id, email);
        expect(employee.name).toBe(name);
        expect(employee.id).toBe(id);
        expect(employee.email).toBe(email);
    });

    it("Cannot intialize Employee object with invalid name", () => {
        const name = 10;
        const id = 20;
        const email = "priya@gmail.com";
        expect(() => {
            const employee = new Employee(name, id, email);
        }).toThrowError("Name must be a string");
    });

    it("Cannot intialize Employee object with invalid id", () => {
        const name = "priya";
        const id = "not a number";
        const email = "priya@gmail.com";
        expect(() => {
            const employee = new Employee(name, id, email);
        }).toThrowError("ID must be a positive integer");
    });

    it("Cannot intialize Employee object with invalid email", () => {
        const name = "priya";
        const id = 20;
        const email = 21;
        expect(() => {
            const employee = new Employee(name, id, email);
        }).toThrowError("Email must be a string");
    });

    it("Can get name via getName()", () => {
        const name = "priya";
        const id = 20;
        const email = "priya@gmail.com";
        const employee = new Employee(name, id, email);
        expect(employee.getName()).toBe(name);
    });

    it("Can get id via getId()", () => {
        const name = "priya";
        const id = 20;
        const email = "priya@gmail.com";
        const employee = new Employee(name, id, email);
        expect(employee.getId()).toBe(id);
    });

    it("Can get email via getEmail()", () => {
        const name = "priya";
        const id = 20;
        const email = "priya@gmail.com";
        const employee = new Employee(name, id, email);
        expect(employee.getEmail()).toBe(email);
    });



    it("getRole() should return \"Employee\"", () => {
        const name = "priya";
        const id = 20;
        const email = "priya@gmail.com";
        const employee = new Employee(name, id, email);
        const role = "Employee";
        expect(employee.getRole()).toBe(role);
    });

});