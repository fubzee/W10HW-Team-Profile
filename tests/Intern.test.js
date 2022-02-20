const Intern = require("../lib/Intern.js");

describe("Intern", () => {
    describe("Initialization", () => {
        it(`should return an object containing a school property when called with the new keyword`, () => {
        const obj = new Intern(`Scott`,100,`TA`,`scott@bootcamp.com`,`My School Name`);
        expect(obj.school).toEqual(`My School Name`);
        });
        
    });
    // getSchool()
    describe(`get School`, () => {
        it(`should return a value Intern in the school property`, () => {
            const obj = new Intern(`Scott`,100,`TA`,`scott@bootcamp.com`,`My School Name`);
            expect(obj.getSchool()).toEqual(`My School Name`);
        });
    });
}); 
