class AppController {
  getHomePage((req, res) => {
    return res.status(200).send('Hello Holberton School!');
  });
}
