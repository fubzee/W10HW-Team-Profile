const inquirer = require(`inquirer`);
const fs = require('fs');
var jsdom = require("jsdom");
var JSDOM = jsdom.JSDOM;

const Intern = require(`./lib/Intern`);
const Manager = require(`./lib/Manager`);
const Engineer = require(`./lib/Engineer`);

var employees = [];
var empName = ``;
var empId = ``
var empEmail = ``;
var empDetail = ``;
var empRole = ``;
var employeepart = `;`

const promptUser = () => 
{      
    return inquirer.prompt
    ([
        { 
            type: `input`,
            message: `What is the employee's name ?`,
            name: `empName`,
            validate: (value) => 
            {
                if (value) {
                    return true;
                } else {
                    return `Please enter's the employee's name`;
                }
            }
        },
        {
            type: `input`,
            message: `What is the employer's ID ?`,
            name: `ID`,
            validate: (value) => 
            {
                if (value) {
                    return true;
                } else {
                    return `Please enter your employee's ID`;
                }
            }
        },
        {
            type: `input`,
            message: `What is the email address of the employee ?`,
            name: `email`,
            validate: (value) => 
            {
                if (value) {
                    return true;
                } else {
                    return `Please enter the email of the employee`;
                }
            }
        },
        {
            type: `list`,
            name: `role`,
            message: `What is the employee's role ?`,
            choices: [`Manager`, `Engineer`,`Intern`],
            validate: (value) => 
            {
                if (value) {
                    return true;
                } else {
                    return `Please select your team member's role`;
                }
            }
        },
        {
            type: `input`,
            name: `school`,
            message: `What is the name of the intern's school ?`,
            when: (input) => input.role === "Intern",
            validate: (value) => 
            {
                if (value) {
                    return true;
                } else {
                    return `Please enter the name of the intern's school`;
                }
            }
        },
        {
            type: `input`,
            name: `officeNo`,
            message: `What is the manager's office number ?`,
            when: (input) => input.role === "Manager",
            validate: (value) => 
            {
                if (value) {
                    return true;
                } else {
                    return `Please enter the office number for the manager role`;
                }
            },
        },
        { 
            type: `input`,
            name: `gitHub`,
            message: `What is the engineer's github link?`,
            when: (input) => input.role === "Engineer",
            validate: (value) => 
            {
                if (value) {
                    return true;
                } else {
                    return `Please enter the Engineer's githib link`;
                }
            }
        },
        { 
            type: `list`,
            name: `addEmp`,
            choices: [`Yes`, `No`],
            message: `Do you want to add another Employee?`,
            validate: (value) => 
            {
                if (value) {
                    console.log(value);
                    return true;
                } else {
                    return `Please make a selection`;
                }
            }
        },
    ])
};


const init = () =>
{
    promptUser()
    // Use writeFileSync method to use promises instead of a callback function
    .then (answers => 
        {
        console.log(answers);
        switch(answers.role){
            case `Manager`:
                employees.push(new Manager(answers.empName,answers.ID,answers.role,answers.email,answers.officeNo,));
                break;
            case `Engineer`:
                employees.push(new Engineer(answers.empName,answers.ID,answers.role,answers.email,answers.gitHub));
                break;
            case `Intern`:
                employees.push(new Intern(answers.empName,answers.ID,answers.role,answers.email,answers.school));
            }
        switch(answers.addEmp){
            case `Yes`: init();
            break;
            case `No` : createHTML(employees);
            } 
        }
    )
    .catch ((error) => 
    {
        if (error) {
            console.log (`Error in environments`,error);
        }
    })
}

const createHTML = ({employees}) => 
{
    createEmployeepart(employees)
    .then((employeepart) => fs.writeFileSync('./dist/index.html', generatedHTML(employeepart)))
    .then(() => console.log('Successfully wrote to index.html'))
    .catch ((error) => 
    {
        if (error) {
            console.log (`Error in environments`,error)
        }
    })
};

function createEmployeepart(employees) {

    employeepart = () => {
 
    console.log(`Gen HTML ` , employees)

    global.document = new JSDOM(generatedHTML).window.document;
    console.log ("HTML", employees.length, employees);
    
    let newcontainerDiv = document.createElement(`div`);
    newcontainerDiv.className = `container`;
    
    let newrowDiv = document.createElement(`div`);
    newrowDiv.className = `row col-xs-3`;
    newcontainerDiv.appendChild(newrowDiv);
    
    for (i=1;i<employees.length;i++) 
    {
        if (Intern)
        {
            empName = Intern.empName[i];
            empId = Intern.Id[i];
            empEmail = Intern.email[i];
            empDetail = Intern.school[i];
            empRole = `Intern`;
        }
        else
        {
            if (Engineer)
            {
                empName = Engineer.empName[i];
                empId = Engineer.Id[i];
                empEmail = Engineer.email[i];
                empDetail = Engineer.gitHub[i];
                empRole = `Engineer`;
            }
            else
            {
                Manager.empName[i];
                empId = Manager.Id[i];
                empEmail = Manager.email[i];
                empDetail = Manager.OfficeNo[i];
                empRole = `Manager`;
            }
        }
  
    }

        let newemployeeDiv = document.createElement(`div`)
        newemployeeDiv.id = `employee`;
        newemployeeDiv.className = 'container'
        newrowDiv.appendChild(newemployeeDiv);

        let newbannerDiv = document.createElement(`div`)
        newbannerDiv.id = `banner`;
        newbannerDiv.className = `banner row`;
        newbannerDiv.style.backgroundColor = '#06aed5';
        newemployeeDiv.appendChild(newbannerDiv);

        let newnameDiv = document.createElement(`div`)
        newnameDiv.id = `name`;
        newnameDiv.className = `banner_field`;
        newbannerDiv.append(newnameDiv);
        newnameDiv.innerHTML = empName;

        let newroleDiv = document.createElement(`div`)
        newroleDiv.id = `role`;
        newroleDiv.className = `banner_field`;
        newbannerDiv.append(newroleDiv);
        newroleDiv.innerHTML = empRole;

        let newcontentDiv = document.createElement(`div`)
        newcontentDiv.id = `content`;
        newcontentDiv.className = `content col`;
        newemployeeDiv.appendChild(newcontentDiv);

        let newidDiv = document.createElement(`div`)
        newidDiv.id = `ID`;
        newidDiv.className = `content_field`;
        newcontentDiv.appendChild(newidDiv);
        newidDiv.innerHtml = empId;

        let newemailDiv = document.createElement(`div`)
        newemailDiv.id = `email`
        newemailDiv.className = `content_field`;
        newcontentDiv.appendChild(newemailDiv);
        newemailDiv.innerHTML = empEmail;

        let newdetailDiv = document.createElement(`div`)
        newdetailDiv.id = `detail`;
        newdetailDiv.className = `content_field`;
        newcontentDiv.appendChild(newdetailDiv);
        newdetailDiv.innerHTML = empDetail;

        document.body.appendChild(newcontainerDiv);
        console.log(createEmployeepart);
    }
};

const generatedHTML = ( { employeepart } ) =>

        `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            
            />
            <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
            integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
            crossorigin="anonymous"
            />
            <link
            href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
            rel="stylesheet"
            />
            <link rel="stylesheet" href="style.css" />
            <title>Team Profile</title>
        </head>
        <header class="jumbotron">
            <h1 attribute = "title" id = "title" class="display-3"> Team</h1>
        </header>
        <body>
        ${employeepart}
        </body>
        </html>`;
    
init();

