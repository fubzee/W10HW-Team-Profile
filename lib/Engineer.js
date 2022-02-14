const Employee = require('./Employee');

class Engineer extends Employee 
{
    constructor(empName, ID, role, email, gitHub)  
    {        
        super(empName, ID, role, email);
        this.gitHub = gitHub;
        
    }
    getGithub()
    {
        return this.gitHub;
    }
}
       
module.exports = Engineer;
