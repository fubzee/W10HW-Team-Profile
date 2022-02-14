const Engineer = require("../Engineer");

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should return an object containing a 'github' property when called with the 'new' keyword", () => {
        const obj = new Engineer();
        expect(github in obj).toEqual(true);
        });

        it("should return an object containing a 'role' property when called with the 'new' keyword", () => {
            const obj = new Employee();
            expect(role in obj).toEqual(true);
        });
    });
    describe("role", () => {
        it("should return a value Engineer in the role property", () => {
        expect(role instanceof Engineer).toEqual(Engineer);
        });
    });
}); 
