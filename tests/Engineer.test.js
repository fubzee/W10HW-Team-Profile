const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should return an object containing a 'github' property when called with the 'new' keyword", () => {
        const obj = new Engineer(`Scott`,100,`TA`,`scott@bootcamp.com`,`github.io`);
        expect(obj.gitHub).toEqual('github.io');
        });
    });
 //   getGithub()
     describe(`getGithub`, () => {
        it (`should return the Engineers GitHub address`, () => {
            const obj = new Engineer(`Scott`,100,`TA`,`scott@bootcamp.com`,`github.io`);
            expect(obj.getGithub()).toEqual(`github.io`);
        })
    });
});
   