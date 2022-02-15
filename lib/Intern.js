const Employee = require('./Employee');

class Intern extends Employee 
{
    constructor(empName, id, role, email, school) 
    {
        super(empName, id, role, email) 
        this.school = school;
    }
 
    getSchool()
    {
        return this.school;
    }
}

module.exports = Intern;
