const inquirer = require(`inquirer`);
// const intern = require(`./Intern`);
// const manager = require(`./Manager`);
// const engineer = require(`./Engineer`);

class Employee {
    constructor (empName, ID, role, email){  
      this.empName = empName
      this.ID = ID
      this.role = role
      this.email = email
    }


    getName() {
        return this.name;
    }

    getId() {
        return this.ID;
    }

    getEmail() {
        return this.email;
    }
    
    getRole() {
        return this.role;
    }
}    

module.exports = Employee;