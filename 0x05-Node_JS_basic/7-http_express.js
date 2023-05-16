const express = require('express');

const app = express();
const port = 1245;
const fs = require('fs');

app.listen(port, () => {
  console.log('...');
});

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  try {
    const data = fs.readFileSync(`./${process.argv[2]}`, 'utf-8');
    console.log(data);
  } catch (err) {
    console.log(err);
  }
});

module.exports = app;
