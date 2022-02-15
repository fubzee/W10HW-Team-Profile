const Employee = require('./Employee');

class Manager extends Employee 
{
    constructor(empName, id, role, email,officeNo) 
    {
        super(empName, id, role,email);
        this.officeNo=officeNo;
    }

    getofficeNo()
    {
        return this.officeNo;
    }  
}
module.exports = Manager