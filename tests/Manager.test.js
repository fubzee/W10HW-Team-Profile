const Manager = require("../Manager");

describe("Manager", () => {
    describe("Initialization", () => {
        it("should return an object containing an 'officeNo' property when called with the 'new' keyword", () => {
        const obj = new Manager();
        expect(officeNo in obj).toEqual(true);
        });
        it("should return an object containing a 'role' property when called with the 'new' keyword", () => {
            const obj = new Manager();
            expect(role in obj).toEqual(true);
        });
    });
    describe("role", () => {
        it("should return a value Manager in the role property", () => {
        expect(role instanceof Manager).toEqual(Manager);
        });
    });
});