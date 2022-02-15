const Employee = require('./Employee');

class Engineer extends Employee 
{
    constructor(empName, id, role, email, gitHub)  
    {        
        super(empName, id, role, email);
        this.gitHub = gitHub;
        
    }
    getGithub()
    {
        return this.gitHub;
    }
}
       
module.exports = Engineer;
