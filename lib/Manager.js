const Employee = require('./Employee');

class Manager extends Employee 
{
    constructor(empName, ID, role, email,officeNo) 
    {
        super(empName, ID, role,email);
        this.officeNo=officeNo;
    }

    getofficeNo()
    {
        return this.officeNo;
    }  
}
module.exports = Manager