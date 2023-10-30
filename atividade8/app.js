const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

const calculadoraRoutes = require('./routes/calculadora');
app.use('/', calculadoraRoutes);

app.listen(port, () => {
  console.log(`Calculadora web app está rodando em http://localhost:${port}`);
});
