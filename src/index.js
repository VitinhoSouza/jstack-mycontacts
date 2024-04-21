const express = require('express');

const routes = require('./routes');

const app = express();

app.use(express.json());

app.use(routes);

app.get('/', (request, response) => {
  response.send('Olá mundo!');
});

app.listen(8000, () => console.log('Server started at http://localhost:8000'));
