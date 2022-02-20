const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("Initialization", () => {
        it("should return an object containing a 'name' property when called with the 'new' keyword", () => {
        const obj = new Employee(`Scott`,100,`TA`,`scott@bootcamp.com`);

        expect(obj.empName).toEqual(`Scott`);
        });
        it("should return an object containing an 'ID' property when called with the 'new' keyword", () => {
            const obj = new Employee(`Doug`,101,`TA`,`doug@bootcamp.com`);
    
            expect(obj.id).toEqual(101);
        });
        it("should return an object containing a 'role' property when called with the 'new' keyword", () => {
            const obj = new Employee(`David`,999,`Lec`,`dave@bootcamp.com`);
    
            expect(obj.role).toEqual(`Lec`);
        });
        it("should return an object containing an 'email' property when called with the 'new' keyword", () => {
            const obj = new Employee(`Doug`,101,`TA`,`doug@bootcamp.com`);
    
            expect(obj.email).toEqual(`doug@bootcamp.com`);
        });
    });
    //getName()
    describe(`getName`, () => {
        it (`should return the employees name`, () => {
            const obj = new Employee(`David`,999,`Lec`,`dave@bootcamp.com`);

            expect(obj.getName()).toEqual(`David`);
        })
    })
    
    //getId() 
    describe(`getId`, () => {
        it (`should return the employees ID`, () => {
            const obj = new Employee(`David`,999,`Lec`,`dave@bootcamp.com`);

            expect(obj.getId()).toEqual(999);
        })
    })

    //getEmail() 
    describe(`getEmail`, () => {
        it (`should return the employees email address`, () => {
            const obj = new Employee(`David`,999,`Lec`,`dave@bootcamp.com`);

            expect(obj.getEmail()).toEqual(`dave@bootcamp.com`);
        })
    })
    
    //getRole() 
    describe(`getRole`, () => {
        it (`should return the employees role`, () => {
            const obj = new Employee(`David`,999,`Lec`,`dave@bootcamp.com`);

            expect(obj.getRole()).toEqual(`Lec`);
        })
    })
});    