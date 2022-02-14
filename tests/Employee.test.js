const Employee = require("../Employee");

describe("Employee", () => {
    describe("Initialization", () => {
        it("should return an object containing a 'name' property when called with the 'new' keyword", () => {
        const obj = new Employee();

        expect(empName in obj).toEqual(true);
        });
        it("should return an object containing an 'ID' property when called with the 'new' keyword", () => {
            const obj = new Employee();
    
            expect(ID in obj).toEqual(true);
        });
        it("should return an object containing a 'role' property when called with the 'new' keyword", () => {
            const obj = new Employee();
    
            expect(role in obj).toEqual(true);
        });
        it("should return an object containing an 'email' property when called with the 'new' keyword", () => {
            const obj = new Employee();
    
            expect(email in obj).toEqual(true);
        });
    }); 
    describe("role", () => {
        it("should return a value Employee in the role property", () => {
        expect(role instanceof Employee).toEqual(Employee);
        });
    });
});    