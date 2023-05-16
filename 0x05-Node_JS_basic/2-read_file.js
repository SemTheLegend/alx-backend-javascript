const fs = require('fs');

function countStudents(file) {
  try {
    const data = fs.readFileSync(`./${file}`, 'utf-8');
    console.log(data);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
