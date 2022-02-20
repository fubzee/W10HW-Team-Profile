const Employee = require('../lib/Employee.js');

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
