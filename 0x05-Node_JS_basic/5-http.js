const fs = require('fs');
const http = require('http');

const file = process.argv[2];
const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

app.listen(port, hostname, () => {
  console.log('...');
});

app.get('/', (req, res) => {
  res.end('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  function countStudents(file) {
    try {
      const data = fs.readFileSync(`./${file}`, 'utf-8');
      res.end(data);
    } catch (err) {
      console.log('');
    }
  }
  countStudents();
});

module.exports = app;
