// Imports
const db = require("../config/connection");
const inquirer = require("inquirer");

// ASYNC AWAIT
async function addDepartment() {
  const { department_name } = await inquirer.prompt([
    {
      type: "input",
      name: "department_name",
      message: "Enter Department Name:",
    },
  ]);

  // Add Department
  console.log(department_name);
  await db
    .promise()
    .query(`INSERT INTO departments (department_name) VALUES (?)`, [
      department_name,
    ]);
  return `${department_name} has been added to the database`;
}

// Export
module.exports = addDepartment;
