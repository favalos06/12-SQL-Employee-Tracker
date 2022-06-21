// Imports
const db = require("../config/connection");

// ASYNC AWAIT
async function viewAllDepartments() {
  const allDepartments = await db.promise().query("SELECT * FROM departments");
  return allDepartments;
}

// Export
module.exports = viewAllDepartments;
