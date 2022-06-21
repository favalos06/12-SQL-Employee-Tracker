// Imports
const db = require("../config/connection");

// ASYNC AWAIT
async function viewAllRoles() {
  const allRoles = await db.promise().query("SELECT * FROM roles");
  return allRoles;
}

// Export
module.exports = viewAllRoles;
