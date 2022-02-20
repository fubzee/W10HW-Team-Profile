const Manager = require("../lib/Manager.js");

describe("Manager", () => {
    describe("Initialization", () => {
        it("should return an object containing an 'officeNo' property when called with the 'new' keyword", () => {
        const obj = new Manager(`David`,999,`Lec`,`dave@bootcamp.com`,`+61-1234567`);
        expect(obj.officeNo).toEqual(`+61-1234567`);
        });
    });

    //getofficeNo
    describe(`getOffice`, () => {
        it (`should return the Manager's office no`, () => {
            const obj = new Manager(`David`,999,`Lec`,`dave@bootcamp.com`,`+61-1234567`);
            expect(obj.getofficeNo()).toEqual(`+61-1234567`);
        })
    });
});
