const Intern = require("../Intern");

describe("Intern", () => {
    describe("Initialization", () => {
        it("should return an object containing a 'school' property when called with the 'new' keyword", () => {
        const obj = new Intern();
        expect(school in obj).toEqual(true);
        });
        it("should return an object containing a 'role' property when called with the 'new' keyword", () => {
            const obj = new Intern();
            expect(role in obj).toEqual(true);
        });
    });
    describe("role", () => {
        it("should return a value Intern in the role property", () => {
        expect(role instanceof Intern).toEqual(Intern);
        });
    });
}); 
