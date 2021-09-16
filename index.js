const inquirer = require("inquirer");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const htmlTemplate = require("./src/template");

const employee = []

const beginning = () => {
    inquirer.prompt([
        {
            type: "Input",
            message: "What's your manager's name?",
            name: "managerName"
        },
        {
            type: "input",
            message: "What's your manager's employee ID?",
            name: "managerId"

        },
        {
            type: "input",
            message: "What's your manager's email address?",
            name: "managerEmail"
        },
        {
            type: "input",
            message: "What's your manager's office number?",
            name: "managerOfficeNumber"
        }
    ]).then(response => {
        const newManager = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOfficeNumber)
        // name1 = response.managerName;
        // id1 = response.managerId;
        // email1 = response.mangerEmail;
        // office = response.managerOfficeNumber;
        employee.push(newManager)
        addTeam();
    })
}


const newEngineer = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the name of the engineer?",
            name: "engineerName"
        },
        {
            type: "input",
            message: "What is the id number of the engineer?",
            name: "engineerId"
        },
        {
            type: "input",
            message: "What is the Email address of the engineer?",
            name: "engineerEmail"
        },
        {
            type: "input",
            message: "What is the GitHub username of the engineer?",
            name: "engineerGithub"
        }
    ]).then(response => {
        const newEngineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.engineerGithub)
        // name2 = response.engineerName;
        // id2 = response.engineerId;
        // email2 = response.engineerEmail;
        // github = response.engineerGithub;
        employee.push(newEngineer);
        addTeam();
    })
}

const newIntern = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the name of the intern?",
            name: "internName"
        },
        {
            type: "input",
            message: "What is the id number of the intern?",
            name: "internId"
        },
        {
            type: "input",
            message: "What is the Email address of the intern?",
            name: "internEmail"
        },
        {
            type: "input",
            message: "What school does the intern go to?",
            name: "internSchool"
        }
    ]).then(response => {
        const newIntern = new Intern(response.internName, response.internId, response.internEmail, response.internSchool)
        // name3 = response.internName;
        // id3 = response.internId;
        // email3 = response.internEmail;
        // school = response.interSchool;
        employee.push(newIntern);
        addTeam();
      
    });
}

const addTeam = () => {
    inquirer.prompt([
        {
            type: "list",
            message: "What type of employee do you want to add to your team?",
            choices: ["Engineer", "Intern", "none"],
            name: "addEmployee"
        }
    ]).then((response) => {
        if (response.addEmployee === "Engineer") {
            newEngineer();
        } else if (response.addEmployee === "Intern") {
            newIntern();
        } else {
          const generatedTemplate = htmlTemplate.renderTemplate(employee);
          htmlTemplate.outputHTML(generatedTemplate);
        }
    });

}
beginning();
