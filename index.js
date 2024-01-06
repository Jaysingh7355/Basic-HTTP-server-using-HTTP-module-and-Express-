const express = require('express');

const PORT = 3000;

const app = express(); // create an express server object.

app.get('/home', (request, response) => {
  response.send('hi there welcome to get ');
});

app.post('/home', (request, response) => {
  response.send('hi there welcome to post');
});

app.listen(PORT, () => {
  console.log(`App listening on the port ${PORT}`);
});
