const fs = require('fs');

const outputHTML = (html) => {
    fs.writeFile('test.html', html, (err) => {
        if (err) return console.log(err);
        console.log('Success');
        process.exit();
    });
};

const renderTemplate = (employees) => {
    const employeeList = employees.map(employee=>{
        return `<div class="col-sm-2">
            <div class="card card-block bg-primary text-white text-xs-center">
                <h5 class="card-title">${employee.getRole()}</h5>
                <h5 class="card-text">${employee.name}</h5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${employee.id}</li>
                <li class="list-group-item">Email:<a href:"mailto:${employee.email}">${employee.email}</a></li>
                <li class="list-group-item">${employee.officeNumber?'Office#: ':employee.github?'Github: ':'School: '}
                    ${employee.officeNumber?employee.officeNumber:employee.github?employee.github:employee.school}
                </li>
            </ul>
        </div>`
    }).join('');
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Generator</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css">
        <link rel="stylesheet" href="style.css">
    </head>
    
    <body>
        <main class="container">
            <header class="jumbotron bg-danger text-white text-center">
                <h1>My Team</h1>
            </header>

            <div class="card-container text-center">
                <div class="row justify-content-center"> 
                    ${employeeList}  
                </div>
            </div>
        </main>
    </body>
    </html> `
};

module.exports = {outputHTML, renderTemplate};
