const Employee = require('./Employee');

class Intern extends Employee 
{
    constructor(empName, ID, role, email, school) 
    {
        super(empName, ID, role, email) 
        this.school = school;
    }
 
    getSchool()
    {
        return this.school;
    }
}

module.exports = Intern;
