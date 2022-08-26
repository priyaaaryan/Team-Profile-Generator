const fs = require("fs");
const inquirer = require("inquirer");

const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const { resolve } = require("path");


const employees = [];

const employeeGeneralQuestions = [{
    message: "Enter employee's name",
    name: "name"
},
{
    type: "list",
    message: "Select employee's role",
    choices: [
        "Manager",
        "Engineer",
        "Intern"
    ],
    name: "role"
},
{
    message: "Enter employee's id",
    name: "id"
},
{
    message: "Enter employee's email address",
    name: "email"
}];

var initializeApp = () => {
    promptUser();
}

var promptUser = () => {
    inquirer.prompt(employeeGeneralQuestions)
        .then(({ name, role, id, email }) => {
            var property = "";
            if (role === "Engineer") {
                property = "GitHub Username";
            } else if (role === "Manager") {
                property = "Office Number";
            } else if (role === "Intern") {
                property = "school name";
            }
            inquirer.prompt([{
                message: `Enter employee's ${property}`,
                name: "property"
            },
            {
                type: "list",
                message: "Do you want to add another employee?",
                choices: [
                    "yes",
                    "no"
                ],
                name: "anotherEmployee"
            }]).then(function ({ property, anotherEmployee }) {
                let newMember;
                if (role === "Engineer") {
                    newMember = new Engineer(name, id, email, property);
                } else if (role === "Intern") {
                    newMember = new Intern(name, id, email, property);
                } else {
                    newMember = new Manager(name, id, email, property);
                }
                employees.push(newMember);

                if (anotherEmployee == "yes") {
                    promptUser();
                } else {
                    console.log(employees);
                    startHTML().then(() => {
                        processEmployeesHTML().then(() => {
                            endHTML().then(() => {
                                createCSS().then(() => {
                                    console.log("Successfully created HTML and CSS files");
                                }, (error) => {
                                    console.log(error);
                                });
                                console.log("HTML file created");
                            }, (error) => {
                                console.log(error);
                            });
                        }).catch((error) => {
                            console.log(error);
                        });
                    }, (error) => {
                        console.log(error);
                    });
                }
            });
        });
}

var startHTML = () => {
    return new Promise((resolve, reject) => {
        const html = `<!DOCTYPE html>
        <html lang="en">
        
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,400i,700&display=swap" rel="stylesheet">
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
          <link rel="stylesheet" href="style.css" />
          <title>My Team</title>
        </head>
        
        <body class="flex-column min-100-vh">
          <header class="header">
            <h1 class="app-title">My Team</h1>
          </header>
          <div class="team">
            <div class="flex-row justify-space-around">`;
        fs.writeFile("./dist/app.html", html, (error) => {
            if (error) {
                reject(error);
            }
            resolve();
        });
    });
}

var processEmployeesHTML = () => {
    return new Promise((resolve, reject) => {
        let html = "";
        employees.forEach(employee => {
            html += `
            <div class="card">
        <div class="card-header">
          <p class="card-title">${employee.getName()}</p>
          <p class="card-title">${employee.getRole()}</p>
        </div>
        <div class="card-body">
          <p class="info">ID: ${employee.getId()}</p>
          <p class="info">Email: <a href="mailto:${employee.getEmail()}" target="_blank">${employee.getEmail()}</a></p>
        ${employee.getRole() === "Engineer" ? `<p class="info">GitHub: <a href="https://github.com/${employee.getGithubURL()}" target="_blank">${employee.getGithubURL()}</a></p>` : ""}
        ${employee.getRole() === "Intern" ? `<p class="info">School: ${employee.getSchool()}</p>` : ""}
        ${employee.getRole() === "Manager" ? `<p class="info">Office Number: ${employee.getOfficeNumber()}</p>` : ""}
        </div>
        </div>`;
        });
        return fs.appendFile("./dist/app.html", html, (error) => {
            if (error) {
                reject(error);
            }
            resolve();
        });
    });
}

var endHTML = () => {
    return new Promise((resolve, reject) => {
        const html = `</div>
        </div>
      </body>
      
      </html>`;

        return fs.appendFile("./dist/app.html", html, (error) => {
            if (error) {
                reject(error);
            }
            resolve();
        });
    });
}

var createCSS = () => {
    return new Promise((resolve, reject) => {
        const css = `.header {
            padding: 5px;
            background-color: #e84756;
            font-family: "IBM Plex Sans", sans-serif;
          }
          
          .app-title {
            font-size: 2rem;
            background: #e84756;
            color: #ffff;
            padding: 2px 0px 10px 0px;
            text-align: center;
          }
          
          .flex-row {
            display: flex;
            flex-wrap: wrap;
          }
          
          .justify-space-around {
            justify-content: space-around;
          }
          
          body {
            background-color: #ffff;
            margin: 0;
            padding: 5px;
            font-family: "IBM Plex Sans", sans-serif;
            line-height: 1.5;
            font-size: 16px;
          }
          
          .team {
            padding-left: 80px;
            padding-right: 80px;
            padding-top: 40px;
          }
          
          .card {
            background-color: #ffffff;
            padding: 0px;
            box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
            width: 260px;
            margin-bottom: 30px;
          }
          
          .card-header {
            padding: 10px;
            background-color: #0177f7;
            color: #ffff;
          }
          
          .card-title {
            color: #ffff;
            font-size: 1.5rem;
            margin-bottom: 10px;
            margin-top: 10px;
            font-weight: 600;
          }
          
          .card-body {
            padding-left: 15px;
            padding-right: 15px;
            padding-top: 44px;
            padding-bottom: 45px;
            background-color: #f5f7f9;
          }
          
          .info {
            background-color: #ffffff;
            margin: 0px;
            padding: 10px;
            border: solid rgb(206, 206, 206);
            border-width: 1px;
          }`;

          fs.writeFile("./dist/style.css", css, (error) => {
            if (error) {
                reject(error);
            }
            resolve();
        });

    });
}

module.exports = initializeApp;
