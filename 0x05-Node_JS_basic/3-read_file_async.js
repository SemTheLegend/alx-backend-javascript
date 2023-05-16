const fs = require('fs');

async function countStudents(file) {
  try {
    const data = await fs.readFile(`./${file}`, { encoding: 'utf-8' });
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

module.exports = countStudents;

