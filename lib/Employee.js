const inquirer = require(`inquirer`);


class Employee {

    constructor (empName, id, role, email){  
      this.empName = empName
      this.id = id
      this.role = role
      this.email = email
    }


    getName() {
        return this.empName;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }
    
    getRole() {
        return this.role;
    }
}    

module.exports = Employee;