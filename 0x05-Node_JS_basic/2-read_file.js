const fs = require('fs');

try {
  const data = fs.readFileSync('./database.csv', 'utf-8');
  console.log(data);
} catch (err) {
  throw new Error('Cannot load the database');
}

