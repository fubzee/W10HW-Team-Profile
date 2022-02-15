const inquirer = require(`inquirer`);
// const intern = require(`./Intern`);
// const manager = require(`./Manager`);
// const engineer = require(`./Engineer`);

class Employee {

    constructor (empName, id, role, email){  
      this.empName = empName
      this.id = id
      this.role = role
      this.email = email
    }


    getName() {
        return this.name;
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