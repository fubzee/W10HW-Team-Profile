const inquirer = require(`inquirer`);
const fs = require('fs');
var jsdom = require("jsdom");
var JSDOM = jsdom.JSDOM;

const Intern = require(`./lib/Intern`);
const Manager = require(`./lib/Manager`);
const Engineer = require(`./lib/Engineer`);
const { isObject, supportedPropertyNames } = require('jsdom/lib/jsdom/living/generated/utils');
const internal = require('stream');

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

function createHTML (employees){
    console.log (employees);
    generatedHTML(employees)
    }

function generatedHTML(employees) 
{
        //  Setting up the header and meta data
        console.log ('received data',employees);
        fs.writeFile(`./dist/index.html`, `<!DOCTYPE html>`, (err) =>
        err ? console.error(err) : console.log('Success!'));
        fs.appendFileSync(`./dist/index.html`, `<html lang="en"`, (err) =>
        err ? console.error(err) : console.log('Success!'));
        fs.appendFileSync(`./dist/index.html`, `<head>`, (err) =>
        err ? console.error(err) : console.log('Success!'));
        fs.appendFileSync(`./dist/index.html`,` <meta charset="UTF-8" />`, (err) =>
        err ? console.error(err) : console.log('Success!'));
        fs.appendFileSync(`./dist/index.html`, `<meta name="viewport" content="width=device-width, initial-scale=1.0" />`, (err) =>
        err ? console.error(err) : console.log('Success!'));
        fs.appendFileSync(`./dist/index.html`, `<meta http-equiv="X-UA-Compatible" content="ie=edge" />`, (err) =>
        err ? console.error(err) : console.log('Success!'));
        fs.appendFileSync(`./dist/index.html`,`<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>`, (err) =>
        err ? console.error(err) : console.log('Success!'));
        fs.appendFileSync(`./dist/index.html`,`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css"/>`, (err) =>
        err ? console.error(err) : console.log('Success!'));
        fs.appendFileSync(`./dist/index.html`,`<link rel="stylesheet" href="https:maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css"/>`, (err) =>
        err ? console.error(err) : console.log('Success!'));
        fs.appendFileSync(`./dist/index.html`,`<link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet"/>`, (err) =>
        err ? console.error(err) : console.log('Success!'));
        fs.appendFileSync(`./dist/index.html`,`<link rel="stylesheet" href="style.css"/>`, (err) =>
        err ? console.error(err) : console.log('Success!'));
        fs.appendFileSync(`./dist/index.html`,`<title> Team Profile </title>`, (err) =>
        err ? console.error(err) : console.log('Success!'));
        fs.appendFileSync(`./dist/index.html`, `</head>`, (err) =>
        err ? console.error(err) : console.log('Success!'));
//      Jumbotron/header
        fs.appendFileSync(`./dist/index.html`,`<body>`, (err) =>
        err ? console.error(err) : console.log('Success!'));
        fs.appendFileSync(`./dist/index.html`,`<header class="jumbotron">`, (err) =>
        err ? console.error(err) : console.log('Success!'));
        fs.appendFileSync(`./dist/index.html`,`<h1 id = "title" class="display-5"> Team Profile</h1>`, (err) =>
        err ? console.error(err) : console.log('Success!'));
        fs.appendFileSync(`./dist/index.html`,`</header >`, (err) =>
        err ? console.error(err) : console.log('Success!'));

        fs.appendFileSync(`./dist/index.html`,`<Section class="employee">`, (err) =>
        err ? console.error(err) : console.log('Success!'));
        fs.appendFileSync(`./dist/index.html`, `<div class="container">`, (err) =>
        err ? console.error(err) : console.log('Success!'));
        fs.appendFileSync(`./dist/index.html`, `<div class = "row" >`, (err) =>
        err ? console.error(err) : console.log('Success!'));

        for ( i=1; i <= employees.length; i++) 
        {
         console.log(i, employees.length);

            fs.appendFileSync(`./dist/index.html`,`<div class="col-sm-3">`, (err) =>
            err ? console.error(err) : console.log('Success!'));
            fs.appendFileSync(`./dist/index.html`,` <div class = "resultContainer shadow-lg">`, (err) =>
            err ? console.error(err) : console.log('Success!'));

            if (Object.Intern)

            {
                empName = Intern.empName;
                empId = Intern.id;
                empEmail = Intern.email;
                empDetail = Intern.school;
                empRole = `Intern`;
                fs.appendFileSync(`./dist/index.html`, `<div class = "banner_green" >`, (err) =>
                err ? console.error(err) : console.log('Success!'));
                fs.appendFileSync(`./dist/index.html`,`<i class="bi bi-mortarboard-fill"></i><p id="empRole" class="banner_field">${empRole}</p>`, (err) =>
                err ? console.error(err) : console.log('Success!'));
            }
            else
            {
                if (Object.Engineer)
                {
                    empName = Engineer.empName;
                    empId = Engineer.id;
                    empEmail = Engineer.email;
                    empDetail = Engineer.gitHub;
                    empRole = `Engineer`;
                    fs.appendFileSync(`./dist/index.html`, `<div class = "banner_blue" i class="bi bi-robot">`, (err) =>
                    err ? console.error(err) : console.log('Success!'));
                    fs.appendFileSync(`./dist/index.html`,`<i class="bi bi-robot"></i><p id="empRole" class="banner_field">${empRole}</p>`, (err) =>
                    err ? console.error(err) : console.log('Success!'));
                }
                else
                {
                    empName = Manager.empName;;
                    empId = Manager.id;
                    empEmail = Manager.email;
                    empDetail = Manager.OfficeNo;
                    empRole = `Manager`;
                    fs.appendFileSync(`./dist/index.html`, `<div class = "banner_purple">`, (err) =>
                    err ? console.error(err) : console.log('Success!'));
                    fs.appendFileSync(`./dist/index.html`,`<i class="bi bi-person-lines-fill"></i><p id="empRole" class="banner_field">${empRole}</p>`, (err) =>
                    err ? console.error(err) : console.log('Success!'));
                }
            }    


            fs.appendFileSync(`./dist/index.html`,`<p id="empName" class="banner_field">${empName}</p>`, (err) =>
            err ? console.error(err) : console.log('Success!'));
            fs.appendFileSync(`./dist/index.html`,`</div>`, (err) =>
            err ? console.error(err) : console.log('Success!'));
            fs.appendFileSync(`./dist/index.html`,`<div class ="resultBox">`, (err) =>
            err ? console.error(err) : console.log('Success!'));
            fs.appendFileSync(`./dist/index.html`,`<p id="empId" class = "content_field">${empId}</p>`, (err) =>
            err ? console.error(err) : console.log('Success!'));
            fs.appendFileSync(`./dist/index.html`,`<i class="bi bi-envelope"></i><a href=mailto:" ${empEmail}</a><p id="empEmail" class = "content_field"></p>`, (err) =>
            err ? console.error(err) : console.log('Success!'));
          
            if (Object.Intern){

                fs.appendFileSync(`./dist/index.html`,`<p id="empDetail"class = "content_field">${empDetail}</p>`, (err) =>
                err ? console.error(err) : console.log('Success!'));  
            }
            else
            {
                if (Object.Engineer){
                    fs.appendFileSync(`./dist/index.html`,`<i class="bi bi-github"></i><p id="empDetail" class = "content_field"><link href="${empDetail}"/></p>`, (err) =>
                    err ? console.error(err) : console.log('Success!'));  
                }
                else{
                    fs.appendFileSync(`./dist/index.html`,`<i class="bi bi-telephone"></i><p id="empDetail"class = "content_field">${empDetail}</p>`, (err) =>
                    err ? console.error(err) : console.log('Success!')); 
                }
            }

            // fs.appendFileSync(`./dist/index.html`,`<p id="empDetail"class = "content_field">${empDetail}</p>`, (err) =>
            // err ? console.error(err) : console.log('Success!'));
            fs.appendFileSync(`./dist/index.html`,`</div>`, (err) =>
            err ? console.error(err) : console.log('Success!'));
            fs.appendFileSync(`./dist/index.html`,`</div>`, (err) =>
            err ? console.error(err) : console.log('Success!'));
            fs.appendFileSync(`./dist/index.html`,`</div>`, (err) =>
            err ? console.error(err) : console.log('Success!'));
            // fs.appendFileSync(`./dist/index.html`,`</div>`, (err) =>
            // err ? console.error(err) : console.log('Success!'));
        }
    // Footer 
        fs.appendFileSync(`./dist/index.html`,`</div>`, (err) =>
        err ? console.error(err) : console.log('Success!'));
        fs.appendFileSync(`./dist/index.html`,`</div>`, (err) =>
        err ? console.error(err) : console.log('Success!'));
        fs.appendFileSync(`./dist/index.html`,`</div>`, (err) =>
        err ? console.error(err) : console.log('Success!'));
        fs.appendFileSync(`./dist/index.html`, `</Section>`, (err) =>
        err ? console.error(err) : console.log('Success!'));
        fs.appendFileSync(`./dist/index.html`, `</body>`, (err) =>
        err ? console.error(err) : console.log('Success!'));
        fs.appendFileSync(`./dist/index.html`, `<br>  `, (err) =>
        err ? console.error(err) : console.log('Success!'));
        fs.appendFileSync(`./dist/index.html`, `<br>  `, (err) =>
        err ? console.error(err) : console.log('Success!'));
        fs.appendFileSync(`./dist/index.html`, `<footer>`, (err) =>
        err ? console.error(err) : console.log('Success!'));
        fs.appendFileSync(`./dist/index.html`, `<p> </p> `, (err) =>
        err ? console.error(err) : console.log('Success!'));
        fs.appendFileSync(`./dist/index.html`, `</footer>`, (err) =>
        err ? console.error(err) : console.log('Success!'));
        fs.appendFileSync(`./dist/html.`,`</html>`, (err) =>
        err ? console.error(err) : console.log('Success!'));
    
} 
    
init();   
        
        
        
        
        
   
        





//         `<!DOCTYPE html>
//         <html lang="en">
//         <head>
//             <meta charset="UTF-8" />
//             <meta name="viewport" content="width=device-width, initial-scale=1">
//             <meta http-equiv="X-UA-Compatible" content="ie=edge" />
//             <link
//             rel="stylesheet"
//             href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            
//             />
//             <link
//             rel="stylesheet"
//             href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
//             integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
//             crossorigin="anonymous"
//             />
//             <link
//             href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
//             rel="stylesheet"
//             />
//             <link rel="stylesheet" href="style.css" />
//             <title>Team Profile</title>
//         </head>
//         <header class="jumbotron">
//             <h1 attribute = "title" id = "title" class="display-3"> Team</h1>
//         </header>
//         <body>
//         ${ employeepart }
//         </body>
//         </html>`;
    


//function createEmployeepart(employees) 

//     employeepart = () => 
//     {
 
//     console.log(`Gen HTML ` , employees)

//     global.document = new JSDOM(generatedHTML).window.document;
//     console.log ("HTML", employees.length, employees);
    
//     let newcontainerDiv = document.createElement(`div`);
//     newcontainerDiv.className = `container`;
    
//     let newrowDiv = document.createElement(`div`);
//     newrowDiv.className = `row col-xs-3`;
//     newcontainerDiv.appendChild(newrowDiv);
//     console.log(newcontainerDiv);
//     for ( i=1; i <= employees.length; i++) 
//       console.log(employees.length);
//     {
//         if (`Intern`)
//         {
//             empName = Intern.empName;
//             empId = Intern.id;
//             empEmail = Intern.email;
//             empDetail = Intern.school;
//             empRole = `Intern`;
//         }
//         else
//         {
//             if (`Engineer`)
//             {
//                 empName = Engineer.empName;
//                 empId = Engineer.id;
//                 empEmail = Engineer.email;
//                 empDetail = Engineer.gitHub;;
//                 empRole = `Engineer`;
//             }
//             else
//             {
//                 empName = Manager.empName;;
//                 empId = Manager.id;
//                 empEmail = Manager.email;
//                 empDetail = Manager.OfficeNo;
//                 empRole = `Manager`;
//             }
//         }
//     }
//         let newemployeeDiv = document.createElement(`div`)
//         newemployeeDiv.id = `employee`;
//         newemployeeDiv.className = 'container'
//         newrowDiv.appendChild(newemployeeDiv);

//         let newbannerDiv = document.createElement(`div`)
//         newbannerDiv.id = `banner`;
//         newbannerDiv.className = `banner row`;
//         newbannerDiv.style.backgroundColor = '#06aed5';
//         newemployeeDiv.appendChild(newbannerDiv);

//         let newnameDiv = document.createElement(`div`)
//         newnameDiv.id = `name`;
//         newnameDiv.className = `banner_field`;
//         newbannerDiv.append(newnameDiv);
//         newnameDiv.innerHTML = empName;

//         let newroleDiv = document.createElement(`div`)
//         newroleDiv.id = `role`;
//         newroleDiv.className = `banner_field`;
//         newbannerDiv.append(newroleDiv);
//         newroleDiv.innerHTML = empRole;

//         let newcontentDiv = document.createElement(`div`)
//         newcontentDiv.id = `content`;
//         newcontentDiv.className = `content col`;
//         newemployeeDiv.appendChild(newcontentDiv);

//         let newidDiv = document.createElement(`div`)
//         newidDiv.id = `ID`;
//         newidDiv.className = `content_field`;
//         newcontentDiv.appendChild(newidDiv);
//         newidDiv.innerHtml = empId;

//         let newemailDiv = document.createElement(`div`)
//         newemailDiv.id = `email`
//         newemailDiv.className = `content_field`;
//         newcontentDiv.appendChild(newemailDiv);
//         newemailDiv.innerHTML = empEmail;

//         let newdetailDiv = document.createElement(`div`)
//         newdetailDiv.id = `detail`;
//         newdetailDiv.className = `content_field`;
//         newcontentDiv.appendChild(newdetailDiv);
//         newdetailDiv.innerHTML = empDetail;

//         document.body.appendChild(newcontainerDiv);
//         console.log("Return employee part");
//         return new Promise((resolve) => resolve(document.body.innerHTML));
//     }
//     return employeepart();
   
// };